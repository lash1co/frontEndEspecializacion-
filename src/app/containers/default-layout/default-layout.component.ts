import {Component, OnInit} from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { navItems } from '../../_nav';
import { INavData } from '@coreui/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit  {
  public sidebarMinimized = false;
  public navItems:INavData[] = [];  

  constructor(private menu: MenuService){}

  /**
   * [ngOnInit description]
   * Se trabaja el ngOnInit de forma asyncrona para esperar el llamado del menu
   * @author Gildardo Patiño Trillos, Breiner Barreto, Hector Vallejo
   * @return  {[type]}  [return description]
   */
  async ngOnInit() {
    this.navItems = await this.cargarMenu();
  }

  /**
   * [cargarMenu description]
   * Metodo que permita obtener los menus de forma dinamica en la base de datos
   * @author Gildardo Patiño Trillos, Breiner Barreto, Hector Vallejo
   * @return  {[type]}  [return description]
   */
   async cargarMenu(){
    const res:any = await this.menu.getMenu();
    return res;
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
