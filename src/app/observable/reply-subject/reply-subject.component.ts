import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent implements OnInit {
userList1= [
  'Angular1', 'Angular2','Angular3'
];
userList2= [];
userList3= [];

@ViewChild('video', {static:false}) video: ElementRef;

// Toggle Propertise

methodInterval : boolean = false;
intSubscription: Subscription;
// Subscribe Modes

subscribeMode2: boolean = false;
subscribeMode3: boolean = false;

//Subscriptions

subscription2: Subscription;
subscription3: Subscription;

  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
this._designUtilit.videoEmit.subscribe(res=>{
  this.userList1.push(res);
})
  }
// Video Add Method

onVideoAdd(video):void{
this._designUtilit.videoEmit.next(video);
console.log('Testing---- '+video);
this.video.nativeElement.value= '';

}

// user2 Subscribe Buttons

user2Subscribe(){
  if(this.subscribeMode2){
    this.subscription2.unsubscribe()
  }else{
    this.subscription2 = this._designUtilit.videoEmit.subscribe(res=>{
      this.userList2.push(res);
    });
  }
  this.subscribeMode2 = !this.subscribeMode2;
}

// user3 Subscribe Buttons

user3Subscribe(){
  if(this.subscribeMode3){
this.subscription3.unsubscribe()
  }else{
    this.subscription3= this._designUtilit.videoEmit.subscribe(res=>{
      this.userList3.push(res)
    })
  }
 
  this.subscribeMode3 = !this.subscribeMode3;
};

//Toggle Method

toggle(){
  const broadCastVideo = interval(1000);
  if(this.methodInterval){
this.intSubscription.unsubscribe();
  }else{
    this.intSubscription = broadCastVideo.subscribe(res=>{
      this._designUtilit.videoEmit.next('Video '+ res )
    })
  }

this.methodInterval = !this.methodInterval
}


}
