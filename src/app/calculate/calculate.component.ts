import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Your calorie intake is 1000 kcal',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Back',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Add it',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  async sendApiRequest() {
    let APP_ID = "0e493536"
    let API_KEY = "d60965463246b475a5af44cde2e2fdc1"
    let response = await fetch(``);
    console.log(response)
  }
}



