import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
myColor :string = '';
  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
    const source = interval(1000);

    const arr = ['Tusar', 'Akash', 'Sushant', 'Santanu','Rashmita','Sunanda'];
    
    let obsSubscription:Subscription;
    obsSubscription = source.pipe(
      tap(res =>{
        console.log('Tap Before ' + res)
        if(res== arr.length){
obsSubscription.unsubscribe();
        }
      }),
      map(res=>arr[res]),
      tap(res=> console.log( 'Tap After ' + res))
 
       
    )
    .subscribe(res=>{
      console.log(res);
      this._designUtilit.print(res, 'eleContainer');
    });

    //Ex-02
const colors= [ 'Red', 'Green', 'Yellow', 'Orange', 'Blue', 'Purple', 'Maroon', 'Olive','Aqua'];
let obsSubscription2:Subscription;
obsSubscription2 = source.pipe(

  tap(res=>{
    this.myColor = colors[res];
    if(res==colors.length){
obsSubscription2.unsubscribe();
    }
  }),
  map(res=>colors[res])
).subscribe(res=>{
  console.log(res);
  this._designUtilit.print(res, 'eleContainer2')
})


  }

}
