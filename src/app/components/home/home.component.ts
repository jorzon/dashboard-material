import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav = MatSidenav;
  sidenavSmall: boolean = false;

  sidenavToggle() {
    this.sidenavSmall = !this.sidenavSmall;
  }

  constructor() {}

  ngOnInit(): void {}
}
