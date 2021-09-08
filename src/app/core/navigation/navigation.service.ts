import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getNavigationItems() {
    return [
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
    ];
  }
}
