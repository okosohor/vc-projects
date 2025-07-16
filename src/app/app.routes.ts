import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { OrdersList } from './pages/orders-list/orders-list';
import { ProjectList } from './pages/project-list/project-list';
import { OrderPage } from './pages/order-page/order-page';
import { Profile } from './pages/profile/profile';
import { Dashboard } from './pages/dashboard/dashboard';
import {ProjectPage} from './pages/project-page/project-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'orders',
        component: OrdersList,
      },
      {
        path: 'orders/:id',
        component: OrderPage,
      },
      {
        path: 'projects',
        component: ProjectList,
      },
      {
        path: 'projects/:id',
        component: ProjectPage,
      },
      {
        path: 'profile',
        component: Profile,
      },
    ],
  },
  { path: 'login', component: Login },
];
