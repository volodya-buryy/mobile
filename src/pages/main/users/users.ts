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
@Injectable()


export class Users {
    private commentsUrl = 'http://localhost:3000'; 
    public users: any;
    ngOnInit(){
        this.getAllUsers();
    }

    constructor(private http: Http){
    }

    getAllUsers() {
         this.http.get(this.commentsUrl + '/get-all-user')
            .map((res:Response) => res.json())
            .subscribe(data  => {
                this.users = data;
                console.log(this.users, data );
        })
    }

   
}