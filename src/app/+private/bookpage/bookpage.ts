import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+shared/+base/base-thing';
import { baseCrudpage } from '../../+shared/+base/base-crud-page';
import { BasecrudComponent, Column } from "../../+shared/+base/basecrud-component/basecrud-component";

@Component({
  selector: 'app-bookpage',
  imports: [FormsModule, BasecrudComponent],
  templateUrl: './bookpage.html',
  styleUrl: './bookpage.scss',
})
export class Bookpage extends baseCrudpage<BookItem> implements OnInit {

  ngOnInit(): void {
    this.item = {
      title: '',
      publisher: '',
      writer: '',
    }
    this.dataRefresh();
  }
  override dataService = inject(BooksService);
  override addPrepair(): void {
    this.item = {
      title: '',
      publisher: '',
      writer: '',
    }
  }
  booksCulomns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'publisher', title: 'ناشر' },
    { field: 'price', title: 'قیمت' },
  ]

}

export interface BookItem extends thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}