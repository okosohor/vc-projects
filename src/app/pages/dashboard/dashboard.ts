import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSTS } from '../../../mock-data/posts';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  posts = POSTS;
}
