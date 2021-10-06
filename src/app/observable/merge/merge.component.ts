import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
const sourceTech = interval(2000).pipe(map(v=> 'TechVideo # ' + (v+1)),take(5))
const sourceComedy = interval(3000).pipe(map(v=> 'ComedyVideo # ' + (v+1)),take(3));
const sourceNews = interval(4000) .pipe(map(v=> 'NewsVideo # ' + (v+1)),take(4));


const finalSub = merge(sourceTech,sourceComedy,sourceNews)
finalSub.subscribe(res=>{
  console.log(res);
  this._designUtilit.print(res, 'eleContainer')
})

  }

}
