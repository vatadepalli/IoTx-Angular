import { Component } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-user",
  // template: "<h2> AdiKap Labs </h2>",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  styles: [
    `
      h2 {
        color: pink;
      }
    `
  ]
})
export class UserComponent {
  firstName: string;
  lastName = "Anirudh";
  age = 20;
  address = {
    street: "50 Main Street",
    city: "Boston",
    state: "MA"
  };

  foo: any;

  hasKids: boolean;
  numberArray: number[];
  mixedArray: any[];

  myTuple: [string, number, boolean];

  unusable: void;
  u: undefined;
  n: null;

  // USER
  user: User;

  constructor() {
    console.log("Hello User");
    this.sayHello();

    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);

    this.hasKids = false;

    // this.firstName = 4; // Throws an Error
    this.firstName = "Kapil";

    // ANY
    this.foo = 12;
    this.foo = "Banna";
    this.mixedArray = ["Banna", 34, undefined, null];

    this.numberArray = [1, 4, 7];

    // Tuple
    this.myTuple = ["Banna", 25, true];
    // this.myTuple = ["Banna", 25, 1]; // Throws Error
    // this.myTuple = ["Banna", 25, true, "Whateva"]; // Throws Error

    // Useless
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    // USER
    this.user = {
      firstName: "Vijaya",
      lastName: "Aditya",
      age: 25,
      address: {
        street: "40 Side Street",
        city: "Vijayawada",
        state: "AP"
      },
      image: "http://lorempixel.com/600/600/people/3",
      isActive: true,
      balance: 100,
      registered: new Date("01/02/2018 08:30:00"),
      hide: true,
      email: "vat@hotmail.com"
    };
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
    // return true; // Throws an error
  }
}
