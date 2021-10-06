import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    { id: 1, name: 'Tusar', gender: 'Male' },
    { id: 2, name: 'Akashjit', gender: 'Male' },
    { id: 3, name: 'Rashmita', gender: 'Female' },
    { id: 4, name: 'Sushant', gender: 'Male' },
    { id: 5, name: 'Madhusmita', gender: 'Female' },
    { id: 6, name: 'Rani panda', gender: 'Female' },
    { id: 7, name: 'Ravichandra', gender: 'Male' },
    { id: 8, name: 'Sunanda', gender: 'Female' },
    { id: 9, name: 'Sanatanu', gender: 'Male' },
    { id: 10, name: 'Nalini', gender: 'Female' },
    { id: 11, name: 'Janardhan', gender: 'Male' },
    { id: 12, name: 'Avinash', gender: 'Male' },
    { id: 13, name: 'Subhasree', gender: 'Female' },

  ];

  public data;
  public data2;
  public data3;

  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArr);

    // Ex-01 Filter by length

    source.pipe(
      filter(member=>member.name.length <= 6),
      toArray()
      ).subscribe(res => {
        console.log(res);
        this.data = res;
      });


      //Ex-02 Filter by Gender
    source.pipe(
      filter(member=>member.gender == 'Male'),
      toArray()
      ).subscribe(res => {
        console.log(res);
        this.data2 = res;
      });

// Ex-03 Filter by Nth Item

source.pipe(
  filter(member=> member.id <= 6),
  toArray()
).subscribe(res =>{
  console.log(res);
  this.data3 =res;
})



  }

}
