import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from '../notifications/alerts.component';
import { CrearMenuComponent } from './crear/crearmenu.component';
import { EditarMenuComponent } from './editar/editarmenu.component';
import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';

@NgModule({
  imports: [
    MenusRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, AlertModule.forRoot(), ],
  declarations: [ MenusComponent, CrearMenuComponent, AlertsComponent, EditarMenuComponent ]
})
export class MenusModule { }
