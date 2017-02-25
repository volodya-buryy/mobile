import { RegistrationPage } from './../registration/registration';
import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NavController} from 'ionic-angular';
import { MainPage } from './../main/main';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginPage {    
    private commentsUrl = 'http://localhost:3000'; 
    public allUsers;
    public user;

    constructor(private http: Http, private nav: NavController) {
        this.nav = nav;
    }
    ngOnInit() {
        localStorage.clear();
    }

    getallUsers(){
        return this.http.get(this.commentsUrl + '/users').subscribe(res => {
            this.user = res.json();
            console.log(res, '-->', this.user[0].firstName);
        })
    }

    authenticate(mail: String, pass: String) {
        this.http.post(this.commentsUrl + '/authenticate', 
        { 
            mail: mail, 
            password: pass
        }, { } )
        .subscribe(
            (res) => {
                if(res.status !== 404) {
                    let result = res.json();
                    console.log(result);
                    localStorage.setItem('token', JSON.stringify(result.token));
                    localStorage.setItem('_id', JSON.stringify(result.userId));
                    this.nav.push(MainPage);
                }
            },
            (err) => {
                if(err.status == 404) {
                    this.goToReg()
                }
                console.log(err)
            }
        );
    }
    goToReg() {
        this.nav.push(RegistrationPage)
    }

}