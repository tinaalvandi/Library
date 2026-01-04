import { Component,inject,OnInit } from "@angular/core";
import { MembersService } from "./memberspage";
import { FormsModule } from "@angular/forms";

@Component({
imports:[FormsModule],
templateUrl:'./memberspage.html',
styleUrl:'./memberspage.scss',

})
export class memberspage implements OnInit{
cancel() {
throw new Error('Method not implemented.');
}
item: any;
save() {
throw new Error('Method not implemented.');
}
remove(_t11: MemberItem) {
throw new Error('Method not implemented.');
}
edit(_t11: MemberItem) {
throw new Error('Method not implemented.');
}
state: any;
add() {
throw new Error('Method not implemented.');
}
ngOnInit(): void {
  this.dataRefresh();
}
data:MemberItem[]=[];
membersService=inject(MembersService);
dataRefresh(){
  this.data=this.membersService.list();
}



}
export interface MemberItem{
mobile: any;
address: any;
fullname: any;
  id:number;
  name: string;
  telephone?:number;
}