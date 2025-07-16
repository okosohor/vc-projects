import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/entities/project/project.model';
import { ProjectService } from 'src/app/entities/project/project.service';

@Component({
  selector: 'app-project-page',
  imports: [],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss'
})
export class ProjectPage {

  constructor(private projectService: ProjectService) {}

  projectId = inject(ActivatedRoute).snapshot.params['id'];

  project: Project | undefined = undefined;

  ngOnInit() {
    this.projectService.getProjectById(this.projectId).subscribe((project) => {
      this.project = project;
      console.log(this.project);
    });
  }
}
