import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  constructor() {}

    public alertButtons = ['OK'];
  public alertInputs = [
    {
label: 'Red',
      type: 'button',
      value: 'red',


    }
  ];

}
