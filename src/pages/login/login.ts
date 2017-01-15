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
    allUsers: Observable<Object[]>;
    
    constructor(private http: Http) {}

    ngOnInit() {
        // Load comments
        this.getallUsers()
        this.authenticate()
    }

    getallUsers(){
        return this.http.get(this.commentsUrl + '/users').subscribe(res => {
            this.allUsers = res.json();
            console.log(res, res.json(), this.allUsers);
        })
    }   

    newUser(){
        this.http.post(this.commentsUrl + '/new-user', 
        {
            firstName: 'Vova',
            secondName: 'Buryy', 
            mail:"vova.budyy@mail.com", 
            password:"12345"
        }, { } ).subscribe(res => {
            console.log(res);
        });
    }

    authenticate() {
        this.http.post(this.commentsUrl + '/authenticate', 
        { 
            mail:"vova.budyy@mail.com", 
            password:"12345"
        }, { } ).subscribe(res => {
            console.log(res);
        });
    } 

}