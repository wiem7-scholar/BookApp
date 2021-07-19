package com.example0.demo0.service;

import com.example0.demo0.exception.ResourceNotFoundException;
import com.example0.demo0.model.Book;
import com.example0.demo0.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;
    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book) {
        Optional<Book> bookDb = this.bookRepository.findById(book.getId());

        if(bookDb.isPresent()){
            Book bookUpdate =bookDb.get();
            bookUpdate.setId(book.getId());
            bookUpdate.setName(book.getName());
            bookUpdate.setAuthor(book.getAuthor());
            bookUpdate.setIsbn(book.getIsbn());
            bookUpdate.setPublished(book.getPublished());
            bookUpdate.setPublisher(book.getPublisher());
            bookUpdate.setGenre(book.getGenre());
            bookRepository.save(bookUpdate);
            return bookUpdate;
        }else {
            throw new ResourceNotFoundException("No book found with id :"+book.getId());
        }

    }

    @Override
    public List<Book> getAllBook() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book getBookById(long bookId) {
        Optional<Book> bookDb = this.bookRepository.findById(bookId);
        if(bookDb.isPresent()){
            return bookDb.get();
        }else{
            throw new ResourceNotFoundException("No book found with id :"+bookId);

        }

    }

    @Override
    public void deleteBook(long bookId) {
        Optional<Book> bookDb = this.bookRepository.findById(bookId);
        if(bookDb.isPresent()){
            this.bookRepository.delete(bookDb.get());
        }else{
            throw new ResourceNotFoundException("No book found with id :"+bookId);

        }

    }
}
