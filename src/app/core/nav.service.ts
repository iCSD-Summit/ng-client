import {Injectable} from '@angular/core';
import {NavItem} from './model/nav-item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class NavService {
  private _navItems: NavItem[];

  constructor() {
    this._navItems = [];

    const navItem2: NavItem = new NavItem('Agenda', '/agenda');
    this._navItems.push(navItem2);

    const navItem1: NavItem = new NavItem('Venue', '/venue');
    this._navItems.push(navItem1);
  }

  getNavItems(): Observable<NavItem[]> {
    return Observable.of(this._navItems);
  }

}
