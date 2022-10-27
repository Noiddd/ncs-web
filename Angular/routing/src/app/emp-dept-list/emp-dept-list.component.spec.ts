import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDeptListComponent } from './emp-dept-list.component';

describe('EmpDeptListComponent', () => {
  let component: EmpDeptListComponent;
  let fixture: ComponentFixture<EmpDeptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDeptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDeptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
