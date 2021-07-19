import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css']
  })
  export class EditBookComponent implements OnInit {
      id : number;
      book: Book;
      today = new Date().toJSON().split('T')[0];
      constructor(private route: ActivatedRoute, private router:Router, private bookService:BookService) {}
      ngOnInit(){
          this.book = new Book();
          this.id= this.route.snapshot.params.id;
          this.bookService.getBook(this.id).subscribe( data => {
              this.book = data ;
            
          }, error => console.log(error));
      }

      onSubmit() {
        this.bookService.updateBook(this.id, this.book)
        .subscribe(data => Swal.fire( 'Done',
        'Your book is updated',
        'success'
      ) )
       this.router.navigate(['books']);
    

    }
    redirect() {
 
      this.router.navigate(['books']);
  }
    }