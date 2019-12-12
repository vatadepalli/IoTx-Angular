import { Injectable } from "@angular/core";
import { User } from "../models/User";

// OBSERVABLES
import { of } from "rxjs";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];

  // OBSERVABLES
  data: Observable<any>;

  constructor() {
    this.users = [
      {
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
      },
      {
        firstName: "Kapil",
        lastName: "Anirudh",
        age: 20,
        address: {
          street: "50 Other Street",
          city: "Chennai",
          state: "TN"
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 200,
        registered: new Date("03/11/2017 08:30:00"),
        hide: true,
        email: "kat@hotmail.com"
      },
      {
        firstName: "Abishek",
        lastName: "Tamma",
        age: 23,
        address: {
          street: "22 Engg Street",
          city: "Banglore",
          state: "KA"
        },
        image: "http://lorempixel.com/600/600/people/1",
        isActive: true,
        balance: 50,
        registered: new Date("05/08/2018 11:02:00"),
        hide: true,
        email: "at@hotmail.com"
      }
    ];
  }

  getUsers(): Observable<User[]> {
    console.log("Fetching users from service.");

    return of(this.users);
  }

  addUser(user: User) {
    console.log("Added through service");

    this.users.unshift(user);
  }
}
