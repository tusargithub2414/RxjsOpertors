import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
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
