import { Users } from './users/users';
import { Settings } from './settings/settings';
import { Chat } from './chat/chat';
import { LoginPage } from './../login/login';
import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'main.html'
})
@Injectable()
export class MainPage {
    @ViewChild(Nav) nav: Nav;

  rootPage: any = Chat;
  pages: Array<{title: string, component: any}>;

   constructor(private navigation: NavController, public menu: MenuController ) {
      //this.navigation.setRoot(MainPage);
      this.pages = [
            { title: 'Chat', component: Chat },
			{ title: 'Users', component: Users },			
            { title: 'Settings', component: Settings },	
			{ title: 'Logout', component: LoginPage },		
		];
   }
   openPage(page) {
    	this.menu.close();
		this.nav.setRoot(page.component);

   }
}