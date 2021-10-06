import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
public data;
public data2;
  constructor() { }
users = [
  {name:'Tusar', skill:'Angular',
  job:{
    title:'UI Developer',
    exp: '5 Yrears'
  }

},
  {name:'Akash', skill:'Adobe',
  job:{
    title:'UX Designer',
    exp: '10 Yrears'
  }
},
  {name:'Sushant', skill:'HTML',
  job:{
    title:'HTML Developer',
    exp: '7 Yrears'
  }
},
  {name:'Santanu', skill:'Java',
  job:{
    title:'Fullstack Developer',
    exp: '3 Yrears'
  }
},
  {name:'Sunanda', skill:'PHP',
  job:{
    title:'Backend Developer',
    exp: '9 Yrears'
  }
},
]

  ngOnInit(): void {
//using map property
    // from(this.users).pipe(map(data=>data.name),toArray()).subscribe(res=>{
    //   console.log(res);
    //   this.data = res;
    // })

    // Using pluck property
//Ex-01
    from(this.users).pipe(pluck('name'),toArray()).subscribe(res=>{
      console.log(res);
      this.data = res;
    });

    //Ex-02  Pluck Nested Property 

from(this.users)
.pipe(pluck('job','title'),toArray()).subscribe(res=>{
  this.data2 = res;
})

  }

}
