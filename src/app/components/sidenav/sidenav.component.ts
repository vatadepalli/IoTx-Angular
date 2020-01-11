import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
