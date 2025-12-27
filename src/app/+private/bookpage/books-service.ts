import { Injectable } from '@angular/core';
import { BookItem } from './bookpage';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودش', price: 50000 },
    { id: 2, title: 'برنامه نویسی', writer: 'خودت', publisher: 'خودش', price: 80000 },
    { id: 3, title: 'پایگاه داده', writer: 'خودم', publisher: 'خودش', price: 30000 },
    { id: 4, title: 'طراحی وب', writer: 'خودشان', publisher: 'خودش', price: 20000 },
    { id: 5, title: 'مدار منطقی', writer: 'خودمان', publisher: 'خودش', price: 90000 },

  ];
  list() {
    return [...this.data];
  }
  add(item: BookItem) {
    this.data.push(item);
  }
edit(item:BookItem){
  const index=this.data.findIndex(b=>b.id==item.id);
  if (index!=-1) {
    this.data[index].title=item.title;
    this.data[index].writer=item.writer;
    this.data[index].publisher=item.publisher;
    this.data[index].price=item.price;
  }
}
remove(item:BookItem){
    this.data=this.data.filter(b=>b.id!=item.id);
  }

}
