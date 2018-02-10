import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BprDetailsComponent } from './bpr-details.component';

describe('BprDetailsComponent', () => {
  let component: BprDetailsComponent;
  let fixture: ComponentFixture<BprDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BprDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BprDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
