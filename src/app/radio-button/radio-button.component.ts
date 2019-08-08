import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
 form: FormGroup;
  orders: { id: string; name: string; }[];
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      orders:[''],
      name:[''],
      dropdown:['']
    });
  }

  

  ngOnInit() {
    this.orders = this.getOrders();
    
  }
  getOrders(){
    return[
      {id:'1',name:'order1'},
      {id:'2',name:'order2'},
      {id:'3',name:'order3'},
      {id:'4',name:'order4'},
      {id:'5',name:'order5'},
    ]
  }
   submit(){
  console.log(this.form.value);
  console.log(this.form.value.name);
  }
}
