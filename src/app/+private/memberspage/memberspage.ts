import { Injectable } from '@angular/core';
import { MemberItem } from './memberspage.spec';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    { id: 1, name: 'تینا الوندی', telephone:435789 },
    { id: 2, name: ' زهرا نظری', telephone:97542, },
    { id: 3, name: ' عسل مرادی منظر',telephone:97521245,},
  ];
  list() {
    return [...this.data];
  }
  add(item: MemberItem) {
    this.data.push(item);
  }

}

