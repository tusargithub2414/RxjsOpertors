import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { delay, filter, retry, retryWhen, scan, take } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
public data;
public fetching:boolean = false; 
public status: string = 'No Data'
_dataUrl = 'https://jsonplaceholder.typicode.com/todos/'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  fetchDetails(){
    this.fetching = true;
    this.http.get(this._dataUrl).pipe(
      retry(3),
      retryWhen(err=> err.pipe(
        delay(1000),
        scan(retryCount =>{
          if(retryCount >=3){
            throw err;
          }else{
            retryCount = retryCount + 1
            console.log('retryCount = ' + retryCount);
            this.status = 'Retrying Attempt # ' + retryCount;
            return retryCount;
          }
        },0)
      ))
    )
    .subscribe
    (res=>{
      console.log(res);
      this.data = res;
      this.status = 'Data fetched'
      this.fetching = false;
    },
    (err=>{
      console.log(err);
      this.status = 'Problem fetching data'
      this.fetching = false;

    })
    )
  }
}
