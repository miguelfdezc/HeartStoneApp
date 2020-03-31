import { Component } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  toast: ToastComponent;

  constructor() {}

  ionViewWillEnter() {
    this.toast = new ToastComponent(new ToastController);
    this.toast.presentToastWithOptions();
  }
}
