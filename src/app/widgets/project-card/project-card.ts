import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/entities/project/project.model';
import { CustomButton } from "src/app/shared/custom-button/custom-button";


@Component({
  selector: 'app-project-card',
  imports: [CommonModule, CustomButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  standalone: true,
})
export class ProjectCard {
  @Input() project!: Project;

  constructor(private router: Router) {}

  openProject() {
    this.router.navigate(['/projects', this.project.id])
  }
}
