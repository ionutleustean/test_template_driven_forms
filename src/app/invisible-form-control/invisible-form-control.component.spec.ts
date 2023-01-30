import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisibleFormControlComponent } from './invisible-form-control.component';

describe('InvisibleFormControlComponent', () => {
  let component: InvisibleFormControlComponent;
  let fixture: ComponentFixture<InvisibleFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvisibleFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvisibleFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
