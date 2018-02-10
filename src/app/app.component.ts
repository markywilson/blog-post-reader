import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  blogList: any = [];

  selectedItem: Object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(list => {
      this.blogList = list;
    });
  }

  onItemSelected(ev) {
    this.selectedItem = ev;
  }
}
