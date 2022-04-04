import { Component, VERSION } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search: string;
  AllUsers = [];
  searchedData = [];
  SelectedUser = { id: '', Name: '' };
  name = 'Angular ' + VERSION.major;
  constructor(private u: UsersService) {
    this.u.getUsers().subscribe((data) => {
      console.log(data);
      this.AllUsers = [...data];
    });
  }

  onSearchChange(searchValue) {
    this.searchedData = [];
    console.log(searchValue.target.value);
    this.search = searchValue.target.value;
    if (this.search != '') {
      for (let i = 0; i < this.AllUsers.length; i++) {
        if (
          this.AllUsers[i].Name.includes(this.search) &&
          this.AllUsers[i].id != this.SelectedUser.id
        ) {
          this.searchedData.push(this.AllUsers[i]);
        }
      }
    } else {
      this.searchedData = [];
    }

    console.log(this.searchedData);
  }
  selectCard(event) {
    console.log(event);
    this.SelectedUser = event;
    this.onSearchChange({ target: { value: '' } });
  }
  clear() {
    this.search = '';
    this.SelectedUser = { id: undefined, Name: undefined };
    this.onSearchChange({ target: { value: '' } });
  }
}
