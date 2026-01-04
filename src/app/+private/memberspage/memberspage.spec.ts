import { Component,inject,OnInit } from "@angular/core";
import { memberspage } from "./memberspage";
import { FormsModule } from "@angular/forms";
import { BasecrudComponent, Column } from "../../+shared/+base/basecrud-component/basecrud-component";



export interface MemberItem{
mobile: any;
address: any;
fullname: any;
  id:number;
  name: string;
  telephone?:number;
}