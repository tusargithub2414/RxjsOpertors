import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
public sub1: Subscription;
public sub2: Subscription;
public msg1;
public msg2;
  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {

  const brodCastVideo = interval(1000);
  //Ex-01

   this.sub1= brodCastVideo.pipe(map (data =>'Video ' + data)
   )
   .subscribe(res=>{
      // console.log(res);
      this.msg1 = res;
    });

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);



    // Ex-02
this.sub2 = brodCastVideo.pipe(map(data => data * 5))
.subscribe(res=>{
  console.log(res);
  this.msg2 = res;
});
setTimeout(() => {
  this.sub2.unsubscribe()
}, 10000);


// Ex-03

const members = from([
  {id:1, name:'Tusar'},
  {id:2, name:'Sushant'},
  {id:3, name:'Akash'},
  {id:4, name:'Santanu'},
  {id:5, name:'Siba'},
  {id:6, name:'Rashmita'},
  {id:7, name:'Swopranjali'},
  {id:8, name:'Asif'},
]);
members.pipe(map(data=> data.name))
.subscribe(res=>{
  console.log(res);
  this._designUtilit.print(res, 'eleContainer')
})

  }

}
