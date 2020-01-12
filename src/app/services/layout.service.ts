import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  private snCollapseState = false;

  constructor() {}

  public setSidenavCollapseState(state) {
    this.snCollapseState = state;
  }

  public getSidenavCollapseState() {
    return this.snCollapseState;
  }
}
