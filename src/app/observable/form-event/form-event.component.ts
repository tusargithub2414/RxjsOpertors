import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {
@ViewChild('addBtn') addBtn:ElementRef
  constructor( private _designUtiliti:DesignUtilitService) { }

  ngOnInit(): void {

  }
ngAfterViewInit(){
  let count = 1;
  fromEvent(this.addBtn.nativeElement,'click').subscribe(res =>{
    let countVal = 'Video' + ' ' + count++;
    console.log(countVal);
    this._designUtiliti.print(countVal, 'elContainer');
    this._designUtiliti.print(countVal, 'elContainer1');
    // this.print(countVal, 'elContainer');
    // this.print(countVal, 'elContainer1');
  })
}


}
