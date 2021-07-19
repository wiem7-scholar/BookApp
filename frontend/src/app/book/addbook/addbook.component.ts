import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-book',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent implements OnInit {
  book : Book = new Book();
  today = new Date().toJSON().split('T')[0];


  
 
  constructor(private bookService: BookService, private router: Router ) {

  }

  ngOnInit(): void {
    
   
}
  

  saveBook() {
    this.bookService.createBook(this.book)
    .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book ();
    this.router.navigate(['book'])

  
      
    }

}