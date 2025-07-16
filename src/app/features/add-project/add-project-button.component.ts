import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from './add-project-dialog.component';
import { CustomButton } from 'src/app/shared/custom-button/custom-button';
import { Project } from 'src/app/entities/project/project.model';

@Component({
  selector: 'app-add-project-button',
  template: `<app-custom-button text="Add project" (click)="openDialog()" />`,
  standalone: true,
  imports: [CustomButton],
})
export class AddProjectButtonComponent {
  @Output() projectAdded = new EventEmitter<Project>();

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '400px',
      height: '400px',
    });
    dialogRef.afterClosed().subscribe((newProject: Project | undefined) => {
      if (newProject) {
        this.projectAdded.emit(newProject);
      }
    });
  }
}
