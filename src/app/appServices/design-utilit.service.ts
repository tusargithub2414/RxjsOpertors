import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitService {
exclusive = new Subject<boolean>();
// userName = new Subject<string>();
userName = new BehaviorSubject<string>('Mr Mallick');
videoEmit = new ReplaySubject<string>(3);
asynceVideoEmit = new AsyncSubject();
  constructor() { }

  print(val, containerId){
    let ele = document.createElement('li');
    ele.innerText=val;
    document.getElementById(containerId).appendChild(ele)
  } 
}
