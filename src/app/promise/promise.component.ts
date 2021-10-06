import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {


  constructor() { }

dellAvailable(){
  return true;
}
hpAvailable(){
  return false;
}

public promiseVal;

dell = {
  brand:'Dell',
  hardDisk:'2 TB',
  color:'Black'

}

hp = {
  brand:'HP',
  hardDisk:'1 TB',
  color:'Silver'

}

notAvl ={
  brand: 'Not Available'
}

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resloved');
      // reject('Promise is reject');
if(this.dellAvailable()){
return setTimeout(()=>{
// resolve('Del is Purchased')
resolve(this.dell)
},3000)
}else if(this.hpAvailable()){
  return setTimeout(()=>{
    // resolve('Hp is purchased')
    resolve(this.hp)
  }, 3000)
}else{
  return setTimeout(()=>{
    // reject('Laptop is not available on store')
    reject(this.notAvl)
  }, 3000)
}

    });

    buyLaptop.then(res => {
      console.log("then code", res);
      this.promiseVal = res;
    }).catch(res => {
      console.log("catch sode", res);
      this.promiseVal = res;

    });
    
  }


}
