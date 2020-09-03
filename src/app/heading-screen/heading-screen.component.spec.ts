import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingScreenComponent } from './heading-screen.component';

describe('HeadingScreenComponent', () => {
  let component: HeadingScreenComponent;
  let fixture: ComponentFixture<HeadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
