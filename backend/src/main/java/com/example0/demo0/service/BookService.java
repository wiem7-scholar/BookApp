package com.example0.demo0.service;

import com.example0.demo0.model.Book;

import java.util.List;

public interface BookService {
    Book createBook(Book book);
    Book updateBook(Book book);
    List<Book> getAllBook();
    Book getBookById(long bookId);
    void deleteBook(long bookId);


}
