import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {

  foodForm: FormGroup;

  constructor(
    private alertController: AlertController,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    public user_profileService: User_profileService) {
    this.foodForm = this.formBuilder.group({
      foodName: [''],
      intake: ['']
    });
  }

  ngOnInit() {
  }
  totalK = 0;
  kcal = 0;

  async presentAlert(kcal) {
    const alert = await this.alertController.create({
      header: 'Your calorie intake is ' + kcal + ' kcal',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Back',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Add it',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.totalK += kcal;
            
            this.user_profileService.addUserIntake(localStorage.getItem('user_id'), this.totalK).subscribe(() =>{
              this.zone.run(() => {
                // this.user_profileService.userForm.reset();
              })
            });
          }
        },
      ],
    });

    await alert.present();
  }

  async sendApiRequest(foodName, intake) {
    const APP_ID = "0e493536"
    const APP_KEY = "d60965463246b475a5af44cde2e2fdc1"
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${foodName}`
    let response = await fetch(url);
    let JSON = await response.json();
    // console.log(JSON.hints[0].food.nutrients.ENERC_KCAL);
    let foodKcal = JSON.hints[0].food.nutrients.ENERC_KCAL;
    let kcal = Number((foodKcal * (intake / 100)).toFixed(2));
    console.log(kcal);
    document.getElementById("result").innerHTML = kcal.toString();
    this.presentAlert(kcal);

  }

  onSubmit() {
    console.log(this.foodForm.value['foodName']);
    this.sendApiRequest(this.foodForm.value['foodName'], this.foodForm.value['intake']);
  }

  onSubmit2() {
    // console.log(`[Goal]: ${this.user_profileService.userProfile.goal}`);
    if (!this.user_profileService.userForm.valid) {
      return false;
    } else {
      this.user_profileService.addUserIntake(localStorage.getItem('user_id'), parseInt(this.user_profileService.userForm.value)).subscribe(() =>{
        this.zone.run(() => {
          this.user_profileService.userForm.reset();
        })
      });
    }
  }
}



