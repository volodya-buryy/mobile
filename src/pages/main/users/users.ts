import { Chat } from './../chat/chat';
import { RegistrationPage } from './../../registration/registration';
import { NavController } from 'ionic-angular';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'users.html'
})

export class Users {
    private commentsUrl = 'http://localhost:3000'; 
    public users: any;
   
    ngOnInit(){
        this.getAllUsers();
    }

    constructor(private http: Http, private nav: NavController){
    }

    getAllUsers() {
         this.http.get(this.commentsUrl + '/get-all-user')
            .map((res:Response) => res.json())
            .subscribe(data  => {
                this.users = data;
                console.log(this.users, data );
        })
    }
    goToChat(id) {
        console.log(id);
            this.nav.push(Chat, {
                id: id
            });
    }   
}