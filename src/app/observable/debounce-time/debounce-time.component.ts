import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { LoadingBarService } from 'ngx-loading-bar';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  public updateData = null;
  @ViewChild('myInput2') myInput2: ElementRef;
  public updateData2 = null;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {

    // Ex-01 Debounce Time
    const searchterm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
      .pipe(
        map(ele => ele.target.value),
        debounceTime(1000)
      )
    searchterm.subscribe(res => {
      console.log(res);
      this.updateData = res;
      // this.loadingBar.start()
      setTimeout(() => {
        this.updateData = null;
        // this.loadingBar.stop()
      }, 2000);
    });
    
    // Ex-02 Distinct Until Changed

    const searchterm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
    .pipe(
      map(ele => ele.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )
  searchterm2.subscribe(res => {
    console.log(res);
    this.updateData2 = res;
    // this.loadingBar.start()
    setTimeout(() => {
      this.updateData2 = null;
      // this.loadingBar.stop()
    }, 2000);
  }) 
  }

}
