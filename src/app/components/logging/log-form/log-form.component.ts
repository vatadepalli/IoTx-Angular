import { Component, OnInit } from "@angular/core";
import { Log } from "../../../models/Log";

import { LogService } from "../../../services/log.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to the selected log observable
    this.logService.selectedLog.subscribe(log => {
      console.log(log);
      if (log.id != null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.isNew = false;
      }
    });
  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      // create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };

      this.logService.addLog(newLog);
    } else {
      // create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      this.logService.updateLog(updLog);
    }
    console.log("123");

    // Clear State
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = "";
    this.text = "";
    this.date = "";
    this.logService.clearState();
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
