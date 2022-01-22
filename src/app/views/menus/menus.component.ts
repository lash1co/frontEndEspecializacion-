import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MenuModel from '../../models/menu.model';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  templateUrl: 'menus.component.html',
  styleUrls:['menus.component.css']
})
export class MenusComponent {
  public menus:any;
  id:number;
  constructor(private menuService: MenuService, private router: Router){
    this.menuService.getMenuAll().subscribe(response => {
      this.menus = response;
    });    
  }

  async delete(id:number){
    let response = await this.menuService.deleteMenu(id);           
    this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
