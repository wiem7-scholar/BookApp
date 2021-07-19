package com.example0.demo0.controller;

import com.example0.demo0.model.Book;
import com.example0.demo0.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBook(){
        return ResponseEntity.ok().body(bookService.getAllBook());
    }
    @GetMapping("/book/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable long id){
        return ResponseEntity.ok().body(bookService.getBookById(id));
    }
    @PostMapping("/book")
    public ResponseEntity<Book> createBook(@RequestBody Book book){
        return ResponseEntity.ok().body(this.bookService.createBook(book));
    }
    @PutMapping("/book/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable long id, @RequestBody Book book){
        book.setId(id);
        return ResponseEntity.ok().body(this.bookService.updateBook(book));
    }
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable long id){
        this.bookService.deleteBook(id);
        return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.OK);
    }


}
