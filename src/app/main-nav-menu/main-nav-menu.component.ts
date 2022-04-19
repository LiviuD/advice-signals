import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.css']
})
export class MainNavMenuComponent implements OnInit {
  active = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.setTimeout(() => {
      if(this.router.url != '/'){
        var menuItems= Array.from(document.querySelectorAll('a.nav-link[routerLink="' + this.router.url + '"]'));
        if(menuItems && menuItems.length > 0)
        {
          this.setElementActive(menuItems[0]);
        }
      }
    },0);
  }

  setActive(event: any)
  {
    window.setTimeout(() => {
    event.target && this.setElementActive(event.target)
    }, 0);
  }

  setElementActive(element: any)
  {
    this.active = true;
    Array.from(document.querySelectorAll('li.nav-item.active')).forEach((el) => el.classList.remove('active'));
    element.parentElement && element.parentElement.classList.add('active');
  }
}
