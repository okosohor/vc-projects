import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/entities/project/project.service';
import { CustomButton } from 'src/app/shared';
import { environment } from 'src/enviroments/enviroment.prod';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-project-dialog',
  template: `
    <h2 mat-dialog-title>Add Project</h2>
    <mat-dialog-content [formGroup]="form">
      <mat-form-field
        appearance="fill"
        style="width: 100%; margin-bottom: 16px;"
      >
        <mat-label>Project Name</mat-label>
        <input
          matInput
          formControlName="name"
          placeholder="Enter project name"
        />
      </mat-form-field>
      <mat-form-field appearance="fill" style="width: 100%;">
        <mat-label>Description</mat-label>
        <textarea
          matInput
          formControlName="description"
          placeholder="Enter description"
        ></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <app-custom-button mat-button mat-dialog-close text="Cancel" />
      <app-custom-button (clicked)="addProject()" mat-button text="Add" />
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatDialogModule,
    CustomButton,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddProjectDialogComponent {
  form: FormGroup;

  constructor(
    private projectService: ProjectService,
    private dialogRef: MatDialogRef<AddProjectDialogComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  addProject() {
    if (this.form.invalid) return;
    const { name, description } = this.form.value;
    this.projectService
      .addProject({
        customerId: environment.userId,
        name,
        description,
      })
      .subscribe((project) => {
        this.dialogRef.close(project);
      });
  }
}
