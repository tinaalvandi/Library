import { BookItem } from "../../+private/bookpage/bookpage";
import { thing } from "./base-thing";

export class baseservice<T extends thing> {
  protected data: T[] = [];

  list() {
    return [...this.data];
  }

  add(item: T) {
    this.data.push(item);
  }

edit(item:T){
  const index=this.data.findIndex(b=>b.id==item.id);
  if (index!=-1) {
    this.update(this.data[index],item);

  }
}

remove(item:T){
    this.data=this.data.filter(b=>b.id!=item.id);
  }

update(destination:T,source:T){

}
}
