import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-preinscription',
  templateUrl: './preinscription.page.html',
  styleUrls: ['./preinscription.page.scss'],
})
export class PreinscriptionPage implements OnInit {
  preinscriptionForm: FormGroup;
  isSubmitted=false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.preinscriptionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[az0-9.-]+.+[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      school: ['', [Validators.required, Validators.minLength(3)]],
      degree: ['', [Validators.required]],
      place: ['', [Validators.required]],
      habit: ['', [Validators.required]],
      country: ['', [Validators.required]],
      diploma: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.isSubmitted=true

    if (!this.preinscriptionForm.valid) {
      console.log('Please provide all the required values !')
      return false;
    } else {
      console.log(this.preinscriptionForm.value)
    }
  }

  get errorControl() {
    return this.preinscriptionForm.controls;
  }

}
