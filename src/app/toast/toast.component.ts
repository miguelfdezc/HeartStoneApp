import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {

  constructor(public toastController: ToastController) {}

  async presentToast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'SALIR',
      message: '¿Quieres salir de la app?',
      position: 'top',
      buttons: [
        {
          side: 'end',
          icon: 'exit',
          text: 'Exit',
          handler: () => {
            console.log('Exit clicked');
            this.presentToast("Exiting from app...");
            navigator['app'].exitApp();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
