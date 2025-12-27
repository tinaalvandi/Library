import { Component,inject,OnInit } from "@angular/core";
import { MembersService } from "./memberspage";

@Component({
imports:[],
templateUrl:'./memberspage.html',
styleUrl:'./memberspage.scss',

})
export class memberspage implements OnInit{
ngOnInit(): void {
  this.dataRefresh();
}
data:MemberItem[]=[];
membersService=inject(MembersService);
dataRefresh(){
  this.data=this.membersService.list();
}
add(){
  this.membersService.add({
    id:4, name: 'آزمایش',telephone:1234,
  })
}


}
export interface MemberItem{
  id:number;
  name: string;
  telephone?:number;
}