import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({
          width: 0
        }),
        animate(
          500,
          style({
            width: "250px"
          })
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
