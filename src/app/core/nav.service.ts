import {Injectable} from '@angular/core';
import {NavItem} from './model/nav-item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class NavService {
  private _navItems: NavItem[];

  constructor() {
    this._navItems = [];

    const navItem2: NavItem = new NavItem('Agenda', '/');
    this._navItems.push(navItem2);

    const navItem3: NavItem = new NavItem('Streams', '/streams');
    this._navItems.push(navItem3);

    const navItem1: NavItem = new NavItem('Venue', '/venue');
    this._navItems.push(navItem1);

    const navItem4: NavItem = new NavItem('Survey', 'https://builders.capgemini.com/readonline/survey.php?content_id=58157BBE-8890-37C1-40D9-1F220793A37B', true);
    this._navItems.push(navItem4);

    const navItem5: NavItem = new NavItem('Slides', 'https://troom.capgemini.com/sites/vcc/Shared%20Documents/CrossCuttingContent/ConferencesEvents/Events/APPSEvolveSummits/Summit2018/Conference', true);
    this._navItems.push(navItem5);

    const navItem6: NavItem = new NavItem('Pictures (via VPN)', 'https://troom.capgemini.com/sites/vcc/Shared%20Documents/CrossCuttingContent/ConferencesEvents/Events/APPSEvolveSummits/Summit2018/Pictures', true);
    this._navItems.push(navItem6);
  }

  getNavItems(): Observable<NavItem[]> {
    return Observable.of(this._navItems);
  }

}
