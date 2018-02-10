import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BprListComponent } from './bpr-list.component';

describe('BprListComponent', () => {
  let component: BprListComponent;
  let fixture: ComponentFixture<BprListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BprListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
