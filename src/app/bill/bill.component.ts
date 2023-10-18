import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  selectedItem: String;
  showcard:boolean;
  showupi:boolean;
  constructor(private fb: FormBuilder, private router:Router)
  {
    
  }
  payForm!: FormGroup
  ngOnInit():void{
    this.payForm = this.fb.group({
      name:['',Validators.required],
      amt:['',Validators.required]
    })}
    onsubmit()
    {

    }
    onSelected(value:String)
    {
        this.selectedItem = value;
        console.log(this.selectedItem);
        if(this.selectedItem == 'card')
        {
          this.showcard = true
          this.showupi = false;
        }
        else if(this.selectedItem == 'upi')
        {
          this.showupi = true;
          this.showcard = false;
        }
        else if(this.selectedItem == 'select')
        {
          this.showcard = false;
          this.showupi = false;
        }
    }
}
