import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';



@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  public techStatus;
  public techStatus2;
  public names;
  public nameStatus;
  public subs2: Subscription;
  constructor(private _designUtilit: DesignUtilitService) { }

  ngOnInit(): void {
    const cusObs1 = Observable.create(observer => {
      // observer.next('Data Emit 1')
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);

      setTimeout(() => {
        observer.next('React JS')


      }, 2000);

      setTimeout(() => {
        observer.next('Java')

      }, 3000);

      setTimeout(() => {
        observer.next('HTML')
        observer.complete()
        // observer.error(new Error('Limit Exceed'))
      }, 4000);

      setTimeout(() => {
        observer.next('CSS');

      }, 5000);
    })

    // Subscribe -  data, error, completion

    cusObs1.subscribe(res => {
      // console.log(res);
      this._designUtilit.print(res, 'eleContainer')
    },
      (error) => {

      },
      () => {
        this.techStatus = 'completed';
      });


    // Ex-02 Custom data
    const array2 = ['Angular', 'React JS', 'Java', 'HTML', 'CSS']
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(array2[count]);

        if (count > 2) {
          observer.error('Emit Error');

        }
        if (count > 4) {
          observer.complete()

        }
        count++;
      }, 1000);

    });

    this.subs2 = cusObs2.subscribe(res => {
      this._designUtilit.print(res, 'eleContainer2')
      // console.log(res);
    },
      (error) => {
        this.techStatus2 = 'error'
      },
      () => {
        this.techStatus2 = 'completed'
      }
    );

    // Ex-03 (Random names)
    const array3 = ['Tusar', 'Akash', 'Sushant', 'Santanu','Rashmita','Sunanda']
    const cusObs3 = Observable.create(observer => {
      let count2 = 0;
      setInterval(() => {
        observer.next(array3[count2]);
        count2++;
        if(count2 >= 3){
          observer.error('Names error')
        }

        if(count2 == array3.length){
          observer.complete();
        }
        

      }, 1000);
    });

    cusObs3.subscribe(res=>{
      console.log(res);
      this.names = res;
    },
    (err) => {
      this.nameStatus = 'error'
    },
    () => {
      this.nameStatus = 'completed'
    }
    )
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }


}
