import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/news.json';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  imageUrlPrefix = `https://res.cloudinary.com/wwcodekl/image/upload/c_fill,q_auto:best,w_300/v1546229176/year_in_review_2018/news/`;
  features = (json as any[]).map(x => ({ ...x, photo: this.imageUrlPrefix + x.photo + '.png' }));

  constructor() { }

  ngOnInit() {
  }

}
