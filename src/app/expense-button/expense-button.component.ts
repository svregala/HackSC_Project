import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expense-button',
  templateUrl: './expense-button.component.html',
  styleUrls: ['./expense-button.component.css']
})
export class ExpenseButtonComponent implements OnInit {

  expenses:any[]=[];
  expense = { title: '', category: 'Entertainment', amount: 0, date: '' };
  modalRef: any;
  showList = false;


  constructor(private modalService: NgbModal,private router: Router) {}

  
  
  ngOnInit():void{
    const localData=localStorage.getItem('expenseLog');
    if (localData!=null)
    {
      this.expenses=JSON.parse(localData);
    }
  
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  addExpense() {
    this.expense.date = new Date().toLocaleString();
    this.expenses.push(this.expense);
    localStorage.setItem('expenseLog',JSON.stringify(this.expenses));

    this.expense = { title: '', category: 'Entertainment', amount: 0, date: '' };
    this.modalRef.close();
  }


  showExpenses() {
    this.router.navigateByUrl('showexpense');

  }

}
