import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: "",
    lastName: "",
    age: null,
    address: {
      street: "",
      city: "",
      state: ""
    },
    email: ""
  };

  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild("userForm", null) form: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // OBSERVABLES
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this.showExtended = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //     age: null,
  //     address: {
  //       street: "",
  //       city: "",
  //       state: ""
  //     },
  //     email: ""
  //   };
  // }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "40px",
      "font-size": this.showExtended ? "" : "40px"
    };
  }

  fireEvent(e) {
    console.log("Event Fired");
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is now valid.");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }

    console.log("Form Submitted");
  }
}
