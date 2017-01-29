import { NavController } from 'ionic-angular';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'chat.html'
})
@Injectable()
export class Chat {    
    
}