import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jest-play-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})

export class FirstComponentComponent implements OnInit {
  formGroup: FormGroup;
  searchTitle: string = "";
  formSubmitted: boolean;
  result: any;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      title : [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.formGroup.valid) {
      // this.service.PostDummyResult(this.searchTitle).subscribe(
      //   success => {
      //     console.log(success);
      //     this.result = JSON.stringify(success);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );

      console.log(this.searchTitle);

      //fully reset the form
      this.formGroup.reset();
      for(let name in this.formGroup.controls) {
        this.formGroup.controls[name].setErrors(null);
      }
    }
  }

}
