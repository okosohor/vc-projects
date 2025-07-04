import { Component } from '@angular/core';
import { HomePost } from '../home-post/home-post';
import { CommonModule } from '@angular/common';
import { POSTS } from '../../../mock-data/posts';

@Component({
  selector: 'app-home',
  imports: [
    HomePost,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  posts = POSTS;
}
