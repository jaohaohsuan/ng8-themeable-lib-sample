import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSet } from 'vis-data/esnext';
import { FeatureLicense } from './test-lib.model';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!
    </p>
    <div [appTimeline]="items"></div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./test-lib.component.scss']
})
export class TestLibComponent implements OnInit {

  items: DataSet<FeatureLicense>;

  constructor() {
    
  }

  ngOnInit() {
    this.items = new DataSet([
      { id: 1, content: 'item 1', start: '2013-04-20' },
      { id: 2, content: 'item 2', start: '2013-04-14' },
      { id: 3, content: 'item 3', start: '2013-04-18' },
      { id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19' },
      { id: 5, content: 'item 5', start: '2013-04-25' },
      { id: 6, content: 'item 6', start: '2013-04-27' }
    ]);
  }

}
