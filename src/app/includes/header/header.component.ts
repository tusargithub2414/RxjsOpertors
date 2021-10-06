import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
exclusive: boolean = false;

  constructor(private _designUtilit:DesignUtilitService) { }

  ngOnInit(): void {
    this._designUtilit.exclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }

}
