import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBookingComponent } from './your-booking.component';

describe('YourBookingComponent', () => {
  let component: YourBookingComponent;
  let fixture: ComponentFixture<YourBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
