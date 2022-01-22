/**
 * Componente para la creación de menús
 * @author Gildardo Patiño Trillos, Breiner barreto, Hector Vallejo
 * @date 18-07-2021
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import MenuModel from '../../../models/menu.model';
import { ToastService } from '../../../services/base-services/toast.service';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  templateUrl: 'crearmenu.component.html',
  styleUrls: ['crearmenu.component.css']
})
export class CrearMenuComponent implements OnInit {
  item: MenuModel;
  frmMenu: FormGroup;
  submitted = false;
  respuesta = null;
  menusPadres: any = [];
  constructor(private router: Router, private toast: ToastService, private formBuilder: FormBuilder, private _menuService: MenuService) {
    _menuService.getMenuPadres().subscribe((response:any) => {
        this.menusPadres = response;
    })
  }

  /**
   * [ngOnInit description]
   * Asignamos las validaciones de los campos del formulario
   * @return  {void}    [return description]
   */
  ngOnInit(): void {
    this.frmMenu = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      url: ['', []],
      icon: ['', []],
      badge_variant: ['', []],
      badge_text: ['', []],
      children_of: ['', []],
      es_titulo: ['', []],
      orden: ['', []],
    });
  }

  /**
   * Metodo para guardar la info del menu
   */
  async onSubmit() {
    this.submitted = true;
    if (this.frmMenu.invalid) { // Validamos el formulario
      return;
    }    
    let response = await this._menuService.storeMenu(JSON.stringify(this.frmMenu.value));    
    console.log(response);    
    this.reloadComponent();
    this.toast.showMessage('Menu guardado!!', 'success');
  }

  onReset() {
    this.submitted = false;
    this.frmMenu.reset();
  }

  /**
   * Metodo para obtener los controles mas rapidamente
   *
   * @var {[type]}
   */
  get f() { return this.frmMenu.controls; }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
