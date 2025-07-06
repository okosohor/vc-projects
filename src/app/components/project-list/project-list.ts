import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../../mock-data/projects';
import { ProjectCard } from '../project-card/project-card';
import { CustomButton } from 'src/app/shared/custom-button/custom-button';

@Component({
  selector: 'app-project-list',
  imports: [
    CommonModule,
    ProjectCard,
    CustomButton
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss'
})
export class ProjectList {
 projects = PROJECTS
}
