import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
public obsMsg;
  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {

    //Of Code
    const obs1 = of('Father', 'Mother', 'Baby');
    obs1.subscribe(res =>{
      console.log(res);
      this._designUtilit.print(res, 'eleContainer');
    });

    const obs2 = of({a:'Father', b:'Mother', c:'Beby'});
    
    obs2.subscribe(res =>{
      this.obsMsg = res;
      console.log('obsMsg =>', res);
    });

//From Code Array
const obs3 = from(['Salman Khan', 'Gobinda', 'Sharukh Khan']);
obs3.subscribe(res=>{
  console.log(res);
  this._designUtilit.print(res,'eleContainer3');
});

// From- Promise

const promise = new Promise(resolve =>{
  setTimeout(() => {
    resolve('promise resolved')
  }, 3000);
});
// promise.then(res =>{
//   console.log(res);
// })

const obs4 = from(promise);
obs4.subscribe(res=>{
  console.log('from promise =>', res );
  this._designUtilit.print(res, 'eleContainer4')
});

const obs5 = from('Welcome to Harman');

obs5.subscribe(res=>{
  console.log('from String =>', res);
  this._designUtilit.print(res, 'eleContainer5')
})

  }

}
