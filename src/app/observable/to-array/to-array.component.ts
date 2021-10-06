import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray} from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
users = [
  { name:'Tusar', skil: 'HTML, CSS'},
  { name:'Akash', skil: 'HTML5, CSS3'},
  { name:'Sushant', skil: 'javascript, CSS'},
  { name:'Sanatanu', skil: 'Jquery, Angular'}
];
public showMsg;
public showMsg1;
  sourceSub: Subscription;
  constructor() { }

  ngOnInit(): void {
//Ex- 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5),toArray()) .subscribe(res => {
this.showMsg = (res);
      console.log(res);
      // if (res >= 7) {
      //   this.sourceSub.unsubscribe();
      // }
    });

// Ex- 02

const source2 = from(this.users);
source2.subscribe(res =>{
  console.log(res);
  this.showMsg1 = (res);
});

//Ex- 03

const source3 = of('Tusar', 'Kanta', 'Mallick', 'UI Developer');
source3.pipe(toArray()).subscribe(res=>{
  console.log(res);
});

  }

}
