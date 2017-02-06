import { NavController } from 'ionic-angular';
import { Component, Injectable } from '@angular/core';
import {Router} from '@angular2/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as io from "socket.io-client";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'chat.html'
})
@Injectable()
export class Chat {    
	message = "";
	socket:any = null;
	constructor(){
		this.socket = io('http://localhost:3000');
	}
	
	ngOnInit() {
		console.log('Socket');      
		this.socket.emit('sendMessage', {content:'it works !'});  
		// this.socket.on('chatUpdate', function() {
		// 	this.socket.emit('newMessage', {
		// 		'userName': "Hello",
		// 		'text': "World"
		// 	});
		// });
	}
}