import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private browser : InAppBrowser, private platform: Platform, private routerOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
  });
}

  ngOnInit(){
    let options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no'
    }
    this.browser.create('https://dfaontheway.com/', '_self', options)
  }

  // openUrl(){
  //   let options: InAppBrowserOptions = {
  //     zoom: 'no',
  //     hidenavigationbuttons: 'yes',
  //     location: 'no',
  //     hardwareback: 'no',
  //   }
  //   this.browser.create('https://dfabeauty.com/', '_self', options)
  // }

}
