import { Component, OnInit } from '@angular/core';
import { FeedService } from '../service/feed-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss', './../../app.component.scss']
})
export class FeedListComponent implements OnInit {

  public feeds: any;
  constructor(
    private feedService: FeedService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.feedAll();
  }

  feedAll() {
    this.feedService.allFeed()
      .then((data: any) => {
        this.feeds = data.result;
        console.log(this.feeds);

      }).catch((err: any) => {
        console.log(err.error);
      });
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
