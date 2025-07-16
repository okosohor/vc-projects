import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../../../mock-data/projects';
import { ProjectCard } from '../../widgets/project-card/project-card';
import { CustomButton } from 'src/app/shared/custom-button/custom-button';
import { ProjectService } from 'src/app/entities/project/project.service';
import { Project } from 'src/app/entities/project/project.model';
import Pagination from 'src/app/types/pagintaion';
import { AddProjectButtonComponent } from 'src/app/features/add-project/add-project-button.component';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, ProjectCard, CustomButton, AddProjectButtonComponent],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList implements OnInit {
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getProjectsByCustomerId().subscribe({
      next: (data: { pagination: Pagination; projects: Project[] }) => {
        console.log('Projects:', data.projects);
        this.projects = data.projects;
      },
      error: (error) => {
        console.error('Projects loading error:', error);
      },
    });
  }
  projects: Project[] | undefined = undefined;

  onProjectAdded(newProject: Project) {
    this.projects = [ ...(this.projects ?? []), newProject];
  }
}
