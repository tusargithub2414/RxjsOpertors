import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
userName:string = ''
  constructor(private _designUtilit:DesignUtilitService) {
    this._designUtilit.userName.subscribe(res=>{
      this.userName = res;
    })
   }

  ngOnInit(): void {
    this._designUtilit.exclusive.next(true);
  }

  ngOnDestroy(){
    this._designUtilit.exclusive.next(false);
  }

}
