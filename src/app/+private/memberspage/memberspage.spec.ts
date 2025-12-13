import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memberspage } from './memberspage';
import { Component, OnInit } from '@angular/core';
@Component({
  selector:'app-members-page',
  imports:[],
  templateUrl:'./memberspage.html',
  styleUrl:'./members-page.scss',
})
export class Memberspage implements OnInit{
  ngOnInit(): void {
    this.dataRefresh();
  }
}
describe('Memberspage', () => {
  let component: Memberspage;
  let fixture: ComponentFixture<Memberspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memberspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
