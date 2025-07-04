import { Component, inject } from '@angular/core';
import { SideNavService } from '../../services/sidenav';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 sidenav = inject(SideNavService)
}
