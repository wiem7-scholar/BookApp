import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
 
  createBook(book: Book): Observable<any> {
    return this.http.post('http://localhost:8089/book', book);
  }
  getAllBooks(): Observable<any> {
    return this.http.get('http://localhost:8089/books');
  }
  deleteBook(id : number): Observable<any> {
    return this.http.delete(`http://localhost:8089/book/${id}`, { responseType: 'text'});
  }
  getBook(id): Observable<any> {
    return this.http.get(`http://localhost:8089/book/${id}`);
  }
  updateBook(id : number, data : any): Observable<any> {
    return this.http.put(`http://localhost:8089/book/${id}`, data);
  }

}