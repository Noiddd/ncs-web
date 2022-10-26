import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdeptComponent } from './empdept.component';

describe('EmpdeptComponent', () => {
  let component: EmpdeptComponent;
  let fixture: ComponentFixture<EmpdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
