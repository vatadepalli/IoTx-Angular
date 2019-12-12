import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedLog = this.logSource.asObservable();

  private StateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.StateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {
    //     id: "1",
    //     text: "Generated Components",
    //     date: new Date("12/26/2017 12:54:23")
    //   },
    //   {
    //     id: "2",
    //     text: "Added Boostrap",
    //     date: new Date("12/27/2017 09:33:23")
    //   },
    //   {
    //     id: "3",
    //     text: "Added Logs Component",
    //     date: new Date("12/29/2017 12:00:23")
    //   }
    // ];

    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    // Get from local storage
    if (localStorage.getItem("logs") === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem("logs"));
    }

    return of(
      this.logs.sort((a, b) => {
        return b.date - a.date;
      })
    );
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);

    // Adding to local storage
    localStorage.setItem("logs", JSON.stringify(this.logs));
  }

  updateLog(log: Log) {
    // Delete Old
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log); // Put new

    // Update local storage
    localStorage.setItem("logs", JSON.stringify(this.logs));
  }

  deleteLog(log: Log) {
    // Delete Deleted
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem("logs", JSON.stringify(this.logs));
  }

  clearState() {
    this.StateSource.next(true);
  }
}
