import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  @ViewChild('video', {static:false}) video: ElementRef;
  constructor(private _designUtilit:DesignUtilitService) { }
  public asyncValue;
  ngOnInit(): void {
this._designUtilit.asynceVideoEmit.subscribe(res=>{
  this.asyncValue = res;
})
  }

  onVideoAdd(video){
this._designUtilit.asynceVideoEmit.next(video)
console.log('Vide0 '+ video);
this.video.nativeElement.value = '';
  }

  onComplete(){
this._designUtilit.asynceVideoEmit.complete()
  }

}
