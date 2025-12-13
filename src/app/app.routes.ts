import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { Bookpage } from './+private/bookpage/bookpage';
import { Memberspage } from './+private/memberspage/memberspage';
import { Borrowspage } from './+private/borrowspage/borrowspage';
import { Reportspage } from './+private/reportspage/reportspage';
import { Dashboardpage } from './dashboardpage/dashboardpage';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'private',canActivate:[privateGuard],component:PrivateTemplate,children:[
        {path:'books',component:Bookpage},
        {path:'members',component:Memberspage},
        {path:'borrows',component:Borrowspage},
        {path:'reports',component:Reportspage},
        {path:'dashboard',component:Dashboardpage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},

    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
