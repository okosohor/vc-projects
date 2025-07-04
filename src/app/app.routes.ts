import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { OrdersList } from './components/orders-list/orders-list';
import { ProjectList } from './components/project-list/project-list';
import { OrderPage } from './pages/order-page/order-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'orders',
        component: OrdersList,
      },
      {
        path: 'orders/:id',
        component: OrderPage
      },
      {
        path: 'projects',
        component: ProjectList,
      },
    ],
  },
  { path: 'login', component: Login },
];
