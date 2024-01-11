import { Component } from '@angular/core';

interface Supplier{
  name: string;
  address: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-data-table';

  public suppliers: Array<Supplier> = [
    {
      name: 'Supplier 1',
      address: 'Address 1',
      phone: '981554545',
      email: 'test@gmail.com',
    },
    {
      name: 'Supplier 2',
      address: 'Address 2',
      phone: '981500045',
      email: 'test1@gmail.com',
    },
    {
      name: 'Supplier 3',
      address: 'Address 3',
      phone: '981500000',
      email: 'test2@gmail.com',
    },
    {
      name: 'Supplier 4',
      address: 'Address 4',
      phone: '90000000',
      email: 'test3@gmail.com',
    },
    {
      name: 'Supplier 5',
      address: 'Address 5',
      phone: '90000000',
      email: 'test4@gmail.com',
    },
    {
      name: 'Supplier 6',
      address: 'Address 6',
      phone: '90000000',
      email: 'test6@gmail.com',
    },
    {
      name: 'Supplier 7',
      address: 'Address 7',
      phone: '90000000',
      email: 'tes73@gmail.com',
    },
    {
      name: 'Supplier 8',
      address: 'Address 8',
      phone: '90000000',
      email: 'test8@gmail.com',
    },
    {
      name: 'Supplier 9',
      address: 'Address 9',
      phone: '90000000',
      email: 'test9@gmail.com',
    },
    {
      name: 'Supplier 10',
      address: 'Address 10',
      phone: '90000000',
      email: 'test10@gmail.com',
    },
    {
      name: 'Supplier 11',
      address: 'Address 11',
      phone: '90000000',
      email: 'tes113@gmail.com',
    },
    {
      name: 'Supplier 12',
      address: 'Address 12',
      phone: '90000000',
      email: 'test12@gmail.com',
    },
    {
      name: 'Supplier 13',
      address: 'Address 13',
      phone: '90000000',
      email: 'test13@gmail.com',
    },
    {
      name: 'Supplier 14',
      address: 'Address 14',
      phone: '90000000',
      email: 'test14@gmail.com',
    },
    {
      name: 'Supplier 15',
      address: 'Address 15',
      phone: '90000000',
      email: 'test15@gmail.com',
    },
    {
      name: 'Supplier 16',
      address: 'Address 16',
      phone: '90000000',
      email: 'test16@gmail.com',
    },
  ];
}
