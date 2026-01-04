import { Component, Inject, inject, Injectable, OnInit } from '@angular/core';
import { thing } from '../../+shared/+base/base-thing';
import { baseCrudpage } from '../../+shared/+base/base-crud-page';
import { baseservice } from '../../+shared/+base/base-service';
import { BasecrudComponent, Column } from '../../+shared/+base/basecrud-component/basecrud-component';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';


@Component({
imports: [FormsModule, BasecrudComponent],
templateUrl:'./memberspage.html',
styleUrl:'./memberspage.scss',})

export class memberspage extends baseCrudpage<MemberItem> implements OnInit {
 
  ngOnInit(): void {
      this.item = {
      fullname: '',
      address: '',
      mobile: '',
    }
    this.dataRefresh();
  }
  override dataService = Inject(MembersService);
  override addPrepair(): void {
    this.item = {
      fullname: '',
      address: '',
      mobile: '',
    }
  }
  membersCulomns:Column[]=[
    { field: 'id', title: 'شناسه' },
    { field: 'fullname', title: 'نام و نام خانوادگی' },
    { field: 'address', title: 'آدرس' },
    { field: 'mobile', title: 'موبایل' },
  ]
}

export interface MemberItem extends thing {
  fullname: string;
  mobile: string;
  address: string;
}