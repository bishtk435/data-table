import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosStoreDataComponent } from './ios-store-data.component';

describe('IosStoreDataComponent', () => {
  let component: IosStoreDataComponent;
  let fixture: ComponentFixture<IosStoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosStoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosStoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
