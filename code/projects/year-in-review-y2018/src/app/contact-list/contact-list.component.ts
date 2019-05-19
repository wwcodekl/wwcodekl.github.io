import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/contacts.json';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  imageUrlPrefix = `https://res.cloudinary.com/wwcodekl/image/upload/c_scale,q_auto:best,w_50/v1546182101/year_in_review_2018/others/`;
  contacts = (json as any[]).map(x => ({ ...x, photo: this.imageUrlPrefix + x.photo + '.jpg' }));
  constructor() { }

  ngOnInit() {
  }

}
