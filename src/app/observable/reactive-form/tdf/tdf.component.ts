import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics = ['Angular', 'Javascript', 'React', 'Java'];
  userModel = new User('Tusar', 'tk@gmail.com', 9090909090, 'default', 'Morning',true);
  topicHasError :Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  validateTopic(value){
    if(value === 'default'){
this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  };

  onSubmit(){
    console.log(this.userModel);
  }



}
