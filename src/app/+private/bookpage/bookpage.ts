import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+shared/+base/base-thing';
import { baseCrudpage } from '../../+shared/+base/base-crud-page';

@Component({
  selector: 'app-bookpage',
  imports: [FormsModule],
  templateUrl: './bookpage.html',
  styleUrl: './bookpage.scss',
})
export class Bookpage extends baseCrudpage<BookItem> implements OnInit {

  ngOnInit(): void {
    this.dataRefresh();
  }
  override dataService = inject(BooksService);
  override addPrepair(): void {
    this.item={
      title:'',
      publisher:'',
      writer:'',
    }
  }
   }

export interface BookItem extends thing {
   title: string;
  writer: string;
  publisher: string;
  price?: number;
}