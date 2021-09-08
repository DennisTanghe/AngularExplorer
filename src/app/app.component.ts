import { Component,OnInit } from '@angular/core';

import { MegaMenuItem, MenuItem } from 'primeng/api';

import { NavigationService } from './core/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Explorer';
  items: MegaMenuItem[] = [];

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit() {
    this.items = this.navigationService.getNavigationItems();
    /*[
      {
        label: 'Home', 
        icon: 'pi pi-fw pi-home',
        items: [],
        routerLink: 'home'
      },
      {
        label: 'Some page',
        icon: 'pi pi-fw pi-bell',
        routerLink: 'some-page'
      }
    ];*/
  }
}
