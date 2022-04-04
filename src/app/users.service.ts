import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  constructor() {}

  getUsers(): Observable<any> {
    let users = [
      { id: '1', Name: 'Sahil Manglani' },
      { id: '2', Name: 'Tushar Mohinani' },
      { id: '3', Name: 'Kunal Vishnani' },
      { id: '4', Name: 'Umanng Singhal' },
      { id: '5', Name: 'Parth Singhal' },
      { id: '6', Name: 'Rajkumar Dholpuria' },
      { id: '7', Name: 'Akhil Joseph' },
      { id: '8', Name: 'Ram Prasad Sharma' },
      { id: '9', Name: 'Kapil Chauhan' },
      { id: '10', Name: 'Lata Mangeshkar' },
      { id: '11', Name: 'Vishal Singh' },
      { id: '12', Name: 'Amit Singh' },
      { id: '13', Name: 'Pawan Harwani' },
      { id: '14', Name: 'Aayush Chhabra' },
      { id: '15', Name: 'Jai Mantri' },
    ];
    return of(users);
  }
}
