import { Component, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public api: AuthService, private router: Router,  private renderer: Renderer2){}

  logout(){
    this.api.logout()
    this.router.navigate(['/']);
  }

  toggleMenu() {
    const menuElements = document.querySelectorAll('.navbar-menu-phone');
    menuElements.forEach(menuElement => {
      if (menuElement.classList.contains('hidden')) {
        this.renderer.removeClass(menuElement, 'hidden');
      } else {
        this.renderer.addClass(menuElement, 'hidden');
      }
    });
  }

  closeMenuAndNavigate(pageRoute: string) {
    const menuElements = document.querySelectorAll('.navbar-menu-phone');
    menuElements.forEach(menuElement => {
      this.renderer.addClass(menuElement, 'hidden');
    });

    this.router.navigate([pageRoute]);
  }

}
