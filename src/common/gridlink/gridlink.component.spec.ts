import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlinkComponent } from './gridlink.component';

describe('GridlinkComponent', () => {
  let component: GridlinkComponent;
  let fixture: ComponentFixture<GridlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
