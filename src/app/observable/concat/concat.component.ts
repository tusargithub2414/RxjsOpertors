import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
const sourceTech = interval(1000).pipe(map(v=> 'TechVideo # ' + (v+1)),take(5))
const sourceComedy = interval(1000).pipe(map(v=> 'ComedyVideo # ' + (v+1)),take(3));
const sourceNews = interval(1000) .pipe(map(v=> 'NewsVideo # ' + (v+1)),take(4));


const finalSub = concat(sourceTech,sourceComedy,sourceNews)
finalSub.subscribe(res=>{
  console.log(res);
  this._designUtilit.print(res, 'eleContainer')
})

  }

}
