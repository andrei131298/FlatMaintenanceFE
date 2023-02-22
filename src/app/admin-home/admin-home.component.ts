import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssociationService } from '../services/association.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private associationService: AssociationService
  ) {}

  associationForm: FormGroup = this.formBuilder.group({
    associationName: ['', Validators.required],
    bankAccount: ['', Validators.required],
  });

  ngOnInit(): void {}

  submitAssociation(): void {
    this.associationService
      .createAssociation({
        associationName: this.associationForm.get('associationName')?.value,
        bankAccount: this.associationForm.get('bankAccount')?.value,
      })
      .subscribe();
  }
}
