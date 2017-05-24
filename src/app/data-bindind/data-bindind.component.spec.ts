import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindindComponent } from './data-bindind.component';

describe('DataBindindComponent', () => {
  let component: DataBindindComponent;
  let fixture: ComponentFixture<DataBindindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
