import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-post',
  imports: [],
  templateUrl: './home-post.html',
  styleUrl: './home-post.scss',
  standalone: true,
})
export class HomePost {
  @Input() post!: {id:number, title: string, description: string}

}
