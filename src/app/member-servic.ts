import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberServic {
  list(): import("./+private/memberspage/memberspage.spec").MemberItem[] {
    throw new Error("Method not implemented.");
  }
  add(arg0: { id: number; name: string; telephone: number; }) {
    throw new Error("Method not implemented.");
  }
  
}
