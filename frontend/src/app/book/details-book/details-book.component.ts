import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
 id : number;
 book: Book;
 constructor(private route:ActivatedRoute, private router: Router, private bookService: BookService) {}
ngOnInit() {
  this.book = new Book();
          this.id= this.route.snapshot.params.id;
          this.bookService.getBook(this.id).subscribe( data => {
              this.book = data ;
            
          }, error => console.log(error));
      } 


goToList(){
  this.router.navigateByUrl('books');
}
}