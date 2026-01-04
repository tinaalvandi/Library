import { Injectable } from '@angular/core';
import { MemberItem } from './memberspage';
import { baseservice } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends baseservice<MemberItem> {
  override data: MemberItem[] = [
{id:1000,fullname:'مریم احمدی',address:'همدان',mobile:'0939'},
{id:1001,fullname:'رضا احمدی',address:'تهران',mobile:'0938'},
{id:1002,fullname:'زهرا حمیدی',address:'همدان',mobile:'0918'},
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.address=source.address;
    destination.fullname=source.fullname;
    destination.mobile=source.mobile;
  }
  }
  

