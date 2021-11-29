import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  size = 100;
  txt :any;
  users: IUser[] =[
    {
      name: 'Son',
      email: 'son@gmail.com',
      age: 20,
      address: 'HN',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    },
    {
      name: 'Son',
      email: 'son@gmail.com',
      age: 20,
      address: 'HN'
    },
    {
      name: 'Lam',
      email: 'lam@gmail.com',
      age: 21,
      address: 'HN'
    },
    {
      name: 'Quan',
      email: 'quan@gmail.com',
      age: 23,
      address: 'HN'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  removeUser(index: number) {
    this.users.splice(index, 1);
    this.txt = {
      class : 'alert alert-danger',
      text: 'Xoa nguoi dung thanh cong'
    }
  }
}
