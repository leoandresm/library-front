import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.book = new Book();
  }

  saveBook(){
    this.bookService.saveBook(this.book)
    .subscribe(book => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
