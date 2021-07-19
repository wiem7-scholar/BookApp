import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-books-list',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBooksComponent implements OnInit {
  items = [];
  p:any[];
  searchValue: string;
  p1:Number=0;
  show:Boolean=false;
  pageOfItems: Array<any>;
  books : Observable<Book[]>;
  BookValue: FormControl;
  constructor(private bookService: BookService, private router: Router){}
  ngOnInit(){
    this.BookValue= new FormControl();
    this.loadData();
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    if(this.p1==0){
      this.show=true;
    }
    else{this.show=false}
  }
  loadData(){
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data ;
    }, (error)  => { console.log(error);
  });
}

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
    .subscribe(data => {
      this.loadData();
    },
    error => console.log(error));
    Swal.fire( 'Done',
      'Your book is deleted',
      'success'
    ) 

  }
  
  BookDetails(id: number){
    
    this.router.navigate(['book', id]);
  }
  
  updateBook(Id: number) {
    this.router.navigate(['updatebook', Id])
  } 
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onSubmit(form: NgForm) {
  //console.log('Your form data : ', form.value);
  console.log(form.value['message'])
  this.p1=form.value['message'];
  this.show=false;

}
}