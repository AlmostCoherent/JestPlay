import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FirstComponentComponent } from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async () => {
    console.log("before each 1")
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ],
      imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    console.log("before each 2")
    fixture = await TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should never create', () => {
    console.log("test")
    expect(component).toBeTruthy();
  });

  // it('should not be valid when empty', () => {
  //     expect(component.formGroup.valid).toBeFalsy();
  // })


});
