import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { OrdersList } from './pages/orders-list/orders-list';
import { ProjectList } from './pages/project-list/project-list';
import { OrderPage } from './pages/order-page/order-page';
import { Profile } from './pages/profile/profile';
import { Dashboard } from './pages/dashboard/dashboard';
import {ProjectPage} from './pages/project-page/project-page';
import { AuthGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/noAuth.guard';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: Dashboard,
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        component: OrdersList,
      },
      {
        path: 'orders/:id',
        canActivate: [AuthGuard],
        component: OrderPage,
      },
      {
        path: 'projects',
        canActivate: [AuthGuard],
        component: ProjectList,
      },
      {
        path: 'projects/:id',
        canActivate: [AuthGuard],
        component: ProjectPage,
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: Profile,
      },
    ],
  },
  { path: 'login',
    canActivate: [noAuthGuard],
    component: Login
  },
  { path: 'register',
    canActivate: [noAuthGuard],
    component: Register
  },
];
