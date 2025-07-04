import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class SideNavService {
  readonly opened = signal(false);

  open() {
    this.opened.set(true)
  }

  close() {
    this.opened.set(false)
  }
}