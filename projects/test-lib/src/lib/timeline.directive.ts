import { Directive, ElementRef, Input } from '@angular/core';
import { DataSet } from 'vis-data/esnext';
import { Timeline } from "vis-timeline/esnext";
import { FeatureLicense } from './test-lib.model';

@Directive({
  selector: '[appTimeline]'
})
export class TimelineDirective {

  private _items: DataSet<FeatureLicense> = new DataSet([]);
  private _timeline: Timeline;

  constructor(private el: ElementRef) {
  }

  @Input('appTimeline')
  set items(value: DataSet<FeatureLicense>) {
    this._items = value;
    this._timeline = new Timeline(this.el.nativeElement, this._items, {});
  }

  get items(): DataSet<FeatureLicense> {
    return this.items;
  }

}
