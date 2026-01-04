import { Inject, inject, Injectable, OnInit } from '@angular/core';
import {memberspage  } from './memberspage.spec';
import { thing } from '../../+shared/+base/base-thing';
import { baseCrudpage } from '../../+shared/+base/base-crud-page';
import { baseservice } from '../../+shared/+base/base-service';


@Injectable({
  providedIn: 'root',
})
export class MembersService extends baseCrudpage<MemberItem> implements OnInit {
  list(): import("./memberspage.spec").MemberItem[] {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
   this.dataRefresh();
  }
override dataService=Inject(MembersService);
override addPrepair(): void {
  this.item={
    fullname:'',
    address:'',
    mobile:'',
  }
}
}

export interface MemberItem extends thing {
  fullname: string;
  mobile: string;
  address: string;
  }