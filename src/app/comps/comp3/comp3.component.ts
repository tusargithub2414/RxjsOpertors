import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  userName:string = ''
  constructor(private _designUtilit:DesignUtilitService) {
    this._designUtilit.userName.subscribe(res=>{
      this.userName = res;
    })
   }

  ngOnInit(): void {

  
  }

  onChange(uname){
      console.log(uname.value);
      this._designUtilit.userName.next(uname.value);
  }

}
