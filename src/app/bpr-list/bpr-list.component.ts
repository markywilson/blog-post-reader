import {Component, EventEmitter, Output, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-bpr-list',
  templateUrl: './bpr-list.component.html',
  styleUrls: ['./bpr-list.component.scss']
})
export class BprListComponent implements OnChanges {
  @Output() onItemSelected = new EventEmitter<boolean>();
  @Input('blogList') blogList;
  selectedItemId: Number;

  constructor() { }

  ngOnChanges() {
  }

  onItemClick(ev, item) {
    this.onItemSelected.emit(item);
    this.selectedItemId = item.id;
  }

  onFavClick(item) {
    item.isFav = !item.isFav;
  }
}
