import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { FeedService } from '../service/feed-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-add',
  templateUrl: './feed-add.component.html',
  styleUrls: ['./feed-add.component.scss', './../../app.component.scss']
})
export class FeedAddComponent implements OnInit {
  public photo: String = '';
  private feed: Feed = new Feed();
  private user = JSON.parse(localStorage.user);
  constructor(
    private feedService: FeedService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  uploadImage() {
    document.getElementById('image_post').click();
  }

  selectPhoto(ev) {
    let files = ev.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        document.querySelector('div.image-post').querySelector('svg').classList.add('hide');

        this.feed.image_post = reader.result;
      }
      reader.readAsDataURL(file);
    }

  }

  addFeed() {
    this.feed.user_id = this.user.id;
    this.feed.api_token = this.user.api_token;
    this.feedService.addFeed(this.feed)
      .then((data: any) => {
        console.log(data);

        this.router.navigate(['/feed-list']);
      }).catch(err => {
        console.log(err.error);

      })
  }
}
