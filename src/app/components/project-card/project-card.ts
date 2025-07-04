import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  standalone: true,
})
export class ProjectCard {
  @Input() project!: {id:number, title:string, itemsCount: number, price:number}
}
