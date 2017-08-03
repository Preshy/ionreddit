import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsPage } from '../reddits/reddits';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  currentCategory: string;
  currentLimit: any;

  constructor(public navCtrl: NavController) {
    this.getDefaults();
    this.getCurrent();
  }

  getDefaults() {
      if(localStorage.getItem('category') != null){
            this.category = localStorage.getItem('category');
      } else {
          this.category = 'Technology';
      }

      if(localStorage.getItem('limit') != null){
            this.category = localStorage.getItem('limit');
      } else {
          this.limit = 10;
      }
  }

  getCurrent() {
      if(localStorage.getItem('category') != null){
            this.currentCategory = localStorage.getItem('category');
      } else {
          this.currentCategory = 'Technology';
      }

      if(localStorage.getItem('limit') != null){
            this.currentLimit = localStorage.getItem('limit');
      } else {
          this.currentLimit = 10;
      }
  }

  setDefaults() {
      localStorage.setItem('category', this.category);
      localStorage.setItem('limit', this.limit);
    
      //alert(localStorage.getItem('category'));

      this.navCtrl.push(RedditsPage);
  }

  

}
