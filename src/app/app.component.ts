import { MainPage } from './../pages/main/main';
import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { RegistrationPage } from './../pages/registration/registration';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	//@ViewChild(Nav) nav: Nav;

	// make HelloIonicPage the root (or first) page
	rootPage: any;
	pages: Array<{title: string, component: any}>;

	constructor(
		// public platform: Platform,
		// public menu: MenuController		
		) {
		this.initializeApp();

		// // set our app's pages
		// this.pages = [
		// 	{ title: 'Login', component: LoginPage },
		// 	{ title: 'Hello Ionic', component: HelloIonicPage },
		// 	{ title: 'My First List', component: ListPage },      
		// 	{ title: 'Reg', component: RegistrationPage}
		// ];
	}

	initializeApp() {
		// this.platform.ready().then(() => {
		// 	// Okay, so the platform is ready and our plugins are available.
		// 	// Here you can do any higher level native things you might need.
		// 	StatusBar.styleDefault();
		// 	Splashscreen.hide();
		// });
		let tokenStore = localStorage.getItem("token");
		if(tokenStore){
			this.rootPage = MainPage;
			console.log(tokenStore);
		}else {
			this.rootPage = LoginPage;
		}
	}

	// openPage(page) {
	// 	// close the menu when clicking a link from the menu
	// 	this.menu.close();
	// 	// navigate to the new page if it is not the current page
	// 	this.nav.setRoot(page.component);
	// }
}
