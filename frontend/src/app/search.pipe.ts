import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './model/Book';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Books: Book[], searchValue: string): Book[] {
    if (!Books || !searchValue) {
      return Books;
    }
    return Books.filter(book => 
      book.genre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}