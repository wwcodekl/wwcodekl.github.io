import { Component, OnInit, OnDestroy } from '@angular/core';
import json from '../../assets/data/events.json';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  imageUrlPrefix = `https://res.cloudinary.com/wwcodekl/image/upload/c_thumb,g_face/v1546158928/year_in_review_2018/events/`;
  events = (json as any[]).map((x, idx) => ({ ...x, id: idx + 1, photo: this.imageUrlPrefix + x.photo + '.jpg' }));
  max = this.events.length;
  selected = 1;
  constructor() { }

  ngOnInit() {
    interval(3600).pipe(
      takeUntil(this._destroy$)
    ).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage() {
    this.selected = this.selected === this.max ? 1 : this.selected + 1;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
