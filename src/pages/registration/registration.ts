import { MainPage } from './../main/main';
import { NavController } from 'ionic-angular';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'registration.html'
})
@Injectable()
export class RegistrationPage {    
    private commentsUrl = 'http://localhost:3000'; 
    public allUsers;
    public user;
    constructor(private http: Http,  private nav: NavController) {}  

    newUser(name: String, secondName: String, mail: String, pass: String){
        this.http.post(this.commentsUrl + '/new-user', 
        {
            firstName: name,
            secondName: secondName, 
            mail: mail, 
            password: pass
        }, { } ).subscribe(
            (res) => {
                this.user = res.json();
                localStorage.setItem('token', JSON.stringify(this.user.token));
                localStorage.setItem('_id', JSON.stringify(this.user.userId));
                console.log('new User', this.user);
                this.nav.push(MainPage);
            },
            (err) => {
                alert('Oops, try one more time!');
            }
        )
    }

}