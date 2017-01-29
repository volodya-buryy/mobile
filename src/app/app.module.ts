import { Settings } from './../pages/main/settings/settings';
import { Chat } from './../pages/main/chat/chat';
import { MainPage } from './../pages/main/main';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { RegistrationPage } from './../pages/registration/registration';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegistrationPage,
    MainPage,
    Chat,
    Settings
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegistrationPage,
    MainPage,
    Chat,
    Settings
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
})
export class AppModule {}
