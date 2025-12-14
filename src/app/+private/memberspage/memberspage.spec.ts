import { Component,inject,OnInit } from "@angular/core";
import { MemberServic } from "../../member-servic";

@Component({
selector:'app-members-page',
imports:[],
templateUrl:'./members-page.html',
styleUrl:'./members-page.sccs',

})
export class memberspage implements OnInit{
ngOnInit(): void {
  this.dataRefresh();
}
data:MemberItem[]=[];
membersService=inject(MemberServic);
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