import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  constructor(private _designUtilit:DesignUtilitService) { }

   randomNames = ['Tusar', 'Akash', 'Sushant', 'Santanu','Rashmita','Sunanda']
  
  ngOnInit(): void {

    const nameSource = from(this.randomNames);
    // Ex- 01 Take
    nameSource.pipe(
      take(3)
    )
    .subscribe(res=>{
      console.log(res);
      this._designUtilit.print(res, 'eleContainer')
    });


    //Ex - 02  Take Last
    nameSource.pipe(
      takeLast(3)
    )
    .subscribe(res=>{
      console.log(res);
      this._designUtilit.print(res, 'eleContainer2')
    });


    //Ex - 03  Take Until
   const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click')
    source.pipe(
      map(res=> 'Number' + res),
      takeUntil(condition2)
    )
    .subscribe(res=>{
      console.log(res);
      this._designUtilit.print(res, 'eleContainer3')
    });


  }

}
