import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/helpers.json';

@Component({
  selector: 'app-helper-list',
  templateUrl: './helper-list.component.html',
  styleUrls: ['./helper-list.component.scss']
})
export class HelperListComponent implements OnInit {

  helpers = (json as any[]);

  constructor() { }

  ngOnInit() {
  }

}
