import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMenuComponent } from './crear/crearmenu.component';
import { EditarMenuComponent } from './editar/editarmenu.component';
import { MenusComponent } from './menus.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Menus'
    },    
    children: [
      {
        path: '',
        redirectTo:'lista'
      },
      {
        path: 'lista',
        component: MenusComponent,
        data: {
          title: 'Lista menus'
        }
      },
      {
        path: 'crearmenu',
        component: CrearMenuComponent,
        data: {
          title: 'Crear menus'
        }
      },
      {
        path: 'editar/:menu',
        component: EditarMenuComponent,
        data: {
          title: 'Editar menu'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
