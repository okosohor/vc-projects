import { Component, inject } from '@angular/core';
import { SideNavService } from '../../services/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 sidenav = inject(SideNavService)
}
