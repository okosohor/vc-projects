import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../../widgets/header/header';
import { SideNavService } from '../../services/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/entities/auth/auth.service.';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    Header,
    RouterLink,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  constructor( private authService: AuthService) {
  }
  sidenav = inject(SideNavService);

  logout() {
    this.authService.logout()
  }
}
