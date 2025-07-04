import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../../components/header/header';
import { SideNavService } from '../../services/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  sidenav = inject(SideNavService);
}
