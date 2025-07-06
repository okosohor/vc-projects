import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ProjectProduct {
  id: number;
  title: string;
  price: number;
  qty: number;
  comment?: string;
  imageUrl?: string;
}

interface ProjectCardModel {
  id: number;
  title: string;
  description: string;
  tags: string[];
  updated: string;
  client: string;
  isFavorite: boolean;
  status: string;
  totalPrice: number;
  lastEditor: string;
  products: ProjectProduct[];
}

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  standalone: true,
})
export class ProjectCard {
  @Input() project: ProjectCardModel = {
    id: 1,
    title: 'Modern Office Design',
    description: 'Contemporary office space for tech startup',
    tags: ['urgent', 'client-a'],
    updated: '2024-01-20',
    client: 'Acme Corp',
    isFavorite: true,
    status: 'active',
    totalPrice: 3300,
    lastEditor: 'John Doe',
    products: [
      {
        id: 1,
        title: 'Executive Desk – Walnut',
        price: 1200,
        qty: 2,
        comment: 'Client prefers darker wood finish',
        imageUrl: '',
      },
      {
        id: 2,
        title: 'Ergonomic Office Chair',
        price: 450,
        qty: 4,
        comment: 'Must support 8+ hours daily use',
        imageUrl: '',
      },
    ],
  };

  getStatusLabel(status: string): string {
    if (!status) return '';
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
}
