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
    this.user_profileService.getUser(localStorage.getItem('user_id')).subscribe((res) => {
      this.totalK = res['intake'];
    });
    let date: Date = new Date();
    let date_info: string = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
    if ( date_info != localStorage.getItem('Intake_date') ){
      this.totalK = 0;
      this.user_profileService.getUser(localStorage.getItem('user_id')).subscribe((res) => {
        this.user_profileService.addUserIntake(localStorage.getItem('user_id'), -res['intake']).subscribe(() =>{
          localStorage.setItem('Intake_date', date_info);
        }); 
      }); 
      
    } 
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
            let date: Date = new Date();
            let date_info: string = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
            this.user_profileService.addUserIntake(localStorage.getItem('user_id'), kcal).subscribe(() =>{
              this.zone.run(() => {
                localStorage.setItem('Intake_date', date_info);
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
}



