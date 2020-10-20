import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystoreDataComponent } from './playstore-data.component';

describe('PlaystoreDataComponent', () => {
  let component: PlaystoreDataComponent;
  let fixture: ComponentFixture<PlaystoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
