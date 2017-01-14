import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginPage {    
    private commentsUrl = 'http://localhost:3000/users'; 

    constructor(private http: Http) {
       let result = http.get(this.commentsUrl).map(response => {
           response.json();
           console.log('1', response);
        });
    }

    ngOnInit() {
        // Load comments
        this.getComments()
    }

    getComments(){
        console.log('!!!!');
        return this.http.get(this.commentsUrl).subscribe(res => {
            res.json();
            console.log(res, res.json());
        })
    }    
}