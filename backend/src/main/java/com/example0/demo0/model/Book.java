package com.example0.demo0.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "book")
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id",nullable = false,updatable = false)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name = "author")
    private String author;
    @Column(name="isbn",nullable = false,updatable = false)
    private String isbn;
    @Temporal (TemporalType.DATE)
    private Date published;
    @Column(name="publisher")
    private String publisher;
    @Column(name="genre")
    private String genre;

    public Book(String name, String author, String isbn, Date published, String publisher, String genre){
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.published = published;
        this.publisher = publisher;
        this.genre = genre;
    }
    public Book(){}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Date getPublished() {
        return published;
    }

    public void setPublished(Date published) {
        this.published = published;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

//    @Override
//    public String toString() {
//        return "Book{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", author='" + author + '\'' +
//                ", isbn='" + isbn + '\'' +
//                ", published='" + published + '\'' +
//                ", publisher='" + publisher + '\'' +
//                ", genre='" + genre + '\'' +
//                '}';
//    }


}
