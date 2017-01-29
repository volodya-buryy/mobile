import { NavController } from 'ionic-angular';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Camera } from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'settings.html'
})
@Injectable()


export class Settings {
    private commentsUrl = 'http://localhost:3000'; 
    public base64Image: string;
    public user: any;
    title = 'I\'m a nested component';

    ngOnInit(){
        this.getUserInfo();
    }

    constructor(private http: Http){
    }

    getUserInfo() {
        let id = localStorage.getItem('_id');

        this.http.get(this.commentsUrl + '/user-info/' + id)
            .map((res:Response) => res.json())
            .subscribe(data  => {
                this.user = data;
                console.log(this.user, data );
        })
    }

    takePicture(){
        // Camera.getPicture({
        //     destinationType: Camera.DestinationType.DATA_URL,
        //     targetWidth: 1000,
        //     targetHeight: 1000
        // }).then((imageData) => {
        //     console.log('image ->', imageData);
        //     // imageData is a base64 encoded string
        //     this.base64Image = "data:image/jpeg;base64," + imageData;
        // }, (err) => {
        //     console.log(err);
        // });
    }
}