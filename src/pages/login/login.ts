import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
    constructor(private http: Http) {}

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
        }, { } ).subscribe(res => {
            console.log(res);
        });
    }

}