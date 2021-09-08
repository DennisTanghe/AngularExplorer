import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a exact one link to the home component', () => {
    let links = service.getNavigationItems();
    let homeLink = links.filter((e) => { return e.routerLink === 'home' });

    expect(homeLink.length).toEqual(1);
  });
});
