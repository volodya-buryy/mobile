import { Users } from './../users/users';
import { NavController, NavParams } from 'ionic-angular';
import { Component, Input, ViewChild } from '@angular/core';
import {Router} from '@angular2/router';
import { Http, Response, Headers, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as io from "socket.io-client";
import { Content } from 'ionic-angular'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'chat.html'
})

export class Chat {    
	message: string;
	socket:any = null;
	public dialog = [];
	public id: any;
	private commentsUrl = 'http://localhost:3000'; 
	private curentUser;
	@Input() user;
	@ViewChild(Content) content: Content;

	constructor(params:NavParams, private http: Http){
		this.socket = io('http://localhost:3000');
		this.id = params.get('id');
		console.log('--->>>>', this.id);
	}
	
	ngOnInit() {
		let curentId = localStorage.getItem('_id');
	    let dialogId = this.id + JSON.parse(curentId);
		console.log(this.id,  JSON.parse(curentId), dialogId)
		this.getUserInfo(curentId);
		this.getDialogs(dialogId);		

		this.socket.emit('sendMessage');
		this.socket.emit('sendDialogId', dialogId);
		this.socket.on('sendMessage', (msg) => {
			if(msg.content){ 
				console.log('this is msg --->', msg);
				this.dialog.push(msg);
			}
		});
	}	

	
	
	getUserInfo(id) {
		return this.http.get(this.commentsUrl + '/user-info/' +  JSON.parse(id))
			.map((res:Response) => res.json())
			.subscribe(data  => {
				this.curentUser = data;
				console.log(this.curentUser, data );
			})
	}

	getDialogs(id) {
		this.http.get(this.commentsUrl + '/get-dialogs/' + id)
			.subscribe(result => {
				var res = result.json();
				if(res !== null) {
					this.dialog = res.message.map(i => {
						return i
					})
					console.log(result, res);
					setTimeout(() => {
						this.content.scrollToBottom(300);//300ms animation speed
					});
				};
			})
	}
	
	send(): void {
		this.socket.emit('sendMessage', {
			content: this.message,
			user:  this.curentUser.firstName + this.curentUser.secondName,
		});
		this.message = '';
		setTimeout(() => {
			this.content.scrollToBottom(300);
		},100);
	}
}