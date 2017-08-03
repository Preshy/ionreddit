import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService, public loadingCtrl:LoadingController) {
    this.getDefaults();
  }

  ngOnInit(){
      this.presentLoadingText();
      this.getPosts(this.category, this.limit);
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
        content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
        loading.dismiss();
    }, 3000);
}

  getDefaults() {
      if(localStorage.getItem('category') != null){
            this.category = localStorage.getItem('category');
      } else {
            this.category = 'tech';
      }

      if(localStorage.getItem('limit') != null){
            this.limit = localStorage.getItem('limit');
      } else {
            this.limit = 10;
      }
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response =>  {
        //console.log(response);
        this.items = response.data.children;
    })
  }

  viewItem(item) {
      this.navCtrl.push(DetailsPage, {
          item: item
      });
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }

}
