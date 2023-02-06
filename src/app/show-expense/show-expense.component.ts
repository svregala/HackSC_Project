import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrls: ['./show-expense.component.css']
})
export class ShowExpenseComponent implements OnInit {

  expenses:any[]=[];


  constructor(private router: Router) {}

  
  
  ngOnInit():void{
    const localData=localStorage.getItem('expenseLog');
    if (localData!=null)
    {
      this.expenses=JSON.parse(localData);
    }
  
  }

  goback(){
    this.router.navigateByUrl('profile');


  }



  

}
