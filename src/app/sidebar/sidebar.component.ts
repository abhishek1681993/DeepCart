import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'dc-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.css']
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  _sortByItems = [
    {
      name: 'Color',
      values: [{
        label: 'Red',
        value: 'Red'
      },{
        label: 'Yellow',
        value: 'Yellow'
      },{
        label: 'Green',
        value: 'Green'
      },{
        label: 'Blue',
        value: 'Blue'
      },{
        label: 'Pink',
        value: 'Pink'
      }]
    },
    {
      name: 'Size',
      values: [{
        label: '5',
        value: '5'
      },{
        label: '6',
        value: '6'
      },{
        label: '7',
        value: '7'
      },{
        label: '8',
        value: '8'
      },{
        label: '8.5',
        value: '8.5'
      },{
        label: '9',
        value: '9'
      },{
        label: '9.5',
        value: '9.5'
      },{
        label: '10',
        value: '10'
      }]
    }
  ]
}
