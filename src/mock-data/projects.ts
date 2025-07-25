export const PROJECTS = [
  {
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
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    description: 'High-end residential interior design',
    tags: ['luxury', 'residential'],
    updated: '2024-01-18',
    client: 'Luxury Group',
    isFavorite: false,
    status: 'active',
    totalPrice: 2800,
    lastEditor: 'Jane Smith',
    products: [
      {
        id: 3,
        title: 'Italian Leather Sofa',
        price: 2800,
        qty: 1,
        comment: 'Cognac brown leather preferred',
        imageUrl: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Project name3',
    description: 'Short description for project 3',
    tags: ['client-b'],
    updated: '2024-01-10',
    client: 'Beta LLC',
    isFavorite: false,
    status: 'archived',
    totalPrice: 4000,
    lastEditor: 'Alex Green',
    products: [
      {
        id: 4,
        title: 'Sample Product',
        price: 4000,
        qty: 2,
        comment: 'Sample comment',
        imageUrl: '',
      },
    ],
  },
];
