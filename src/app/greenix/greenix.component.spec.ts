import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenixComponent } from './greenix.component';

describe('GreenixComponent', () => {
  let component: GreenixComponent;
  let fixture: ComponentFixture<GreenixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenixComponent]
    });
    fixture = TestBed.createComponent(GreenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
