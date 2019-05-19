import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/sponsors.json';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {

  imageUrlPrefix = `https://res.cloudinary.com/wwcodekl/image/upload/c_fill,q_auto:best,w_300/v1546186237/year_in_review_2018/sponsors/`;
  sponsors = (json as any[]).map(x => ({ ...x, photo: this.imageUrlPrefix + x.photo }));

  constructor() { }

  ngOnInit() {
  }

}
