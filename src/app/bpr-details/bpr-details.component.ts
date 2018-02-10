import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bpr-details',
  templateUrl: './bpr-details.component.html',
  styleUrls: ['./bpr-details.component.scss']
})
export class BprDetailsComponent implements OnInit {
  @Input('item') item;
  constructor() {
  }

  ngOnInit() {
  }

}
