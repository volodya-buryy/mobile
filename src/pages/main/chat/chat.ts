import { Users } from './../users/users';
import { NavController, NavParams } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import {Router} from '@angular2/router';
import { Http, Response, Headers, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as io from "socket.io-client";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'chat.html'
})

export class Chat {    
	message: string;
	socket:any = null;
	dialog = [];
	public id: any;
	private commentsUrl = 'http://localhost:3000'; 
	private curentUser;
	@Input() user;

	constructor(params:NavParams, private http: Http){
		this.socket = io('http://localhost:3000');
		this.id = params.get('id');
		console.log('--->>>>', this.id);
	}
	
	ngOnInit() {
		
		let curentId = localStorage.getItem('_id');
	    let dialogId = this.id + curentId;

        this.http.get(this.commentsUrl + '/user-info/' + curentId)
            .map((res:Response) => res.json())
            .subscribe(data  => {
                this.curentUser = data;
                console.log(this.curentUser, data );
        })

		this.socket.emit('sendMessage');
		this.socket.emit('sendDialogId', dialogId);
		this.socket.on('sendMessage', (msg) => {
			if(msg.content){ 
				console.log('this is msg --->', msg);
				this.dialog.push(msg);
			}
		});
	}
	send(): void {
		this.socket.emit('sendMessage', {
			content: this.message,
			user:  this.curentUser.firstName + this.curentUser.secondName,
		}); 
	}
}