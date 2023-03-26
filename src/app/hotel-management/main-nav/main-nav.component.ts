import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isOpened: any = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleSideNav() {
    this.isOpened = !this.isOpened;
  }
}
