import { Injectable } from '@angular/core';
import { BookItem } from './bookpage';
import { baseservice } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends baseservice<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودش', price: 50000 },
    { id: 2, title: 'برنامه نویسی', writer: 'خودت', publisher: 'خودش', price: 80000 },
    { id: 3, title: 'پایگاه داده', writer: 'خودم', publisher: 'خودش', price: 30000 },
    { id: 4, title: 'طراحی وب', writer: 'خودشان', publisher: 'خودش', price: 20000 },
    { id: 5, title: 'مدار منطقی', writer: 'خودمان', publisher: 'خودش', price: 90000 },

  ];
  override update(destination: BookItem, source: BookItem): void {
    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }

}
