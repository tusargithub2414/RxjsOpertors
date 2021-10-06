import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  public obsMsg;
  videoSubscription: Subscription;
  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
    // const broadCastVideo = interval(1000);
    // timer(dealy, interval)
    const broadCastVideo = timer(3000, 1000);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtilit.print(this.obsMsg,'eleContainer');
      this._designUtilit.print(this.obsMsg,'eleContainer2');
      this._designUtilit.print(this.obsMsg,'eleContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
        console.log('Video stoped');
        // this.obsMsg = 'Video Upload Completd'

      }
    });

  }

}
