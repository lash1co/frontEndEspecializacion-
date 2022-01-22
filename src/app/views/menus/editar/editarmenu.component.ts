/**
 * Componente para la creación de menús
 * @author Gildardo Patiño Trillos, Breiner barreto, Hector Vallejo
 * @date 18-07-2021
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import MenuModel from '../../../models/menu.model';
import { ToastService } from '../../../services/base-services/toast.service';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  templateUrl: 'editarmenu.component.html',
  styleUrls: ['editarmenu.component.css']
})
export class EditarMenuComponent implements OnInit {
  item: MenuModel;
  frmMenu: FormGroup;
  submitted = false;
  respuesta = null;
  menusPadres: any = [];
  id:number;
  constructor(private router: Router, private toast: ToastService, 
    private formBuilder: FormBuilder, private _menuService: MenuService,
    private rutaActiva: ActivatedRoute) {
    _menuService.getMenuPadres().subscribe((response:any) => {
        this.menusPadres = response;
    });    
    // Capturamos el parametro de la ruta
    this.rutaActiva.params.subscribe((response : Params)=> {
      this.id  = response.menu;
      this._menuService.getDataMenu(this.id).subscribe((response:any) => {                  
        this.frmMenu.setValue(response[0]);
      });
    });
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
    let response = await this._menuService.updateMenu(JSON.stringify(this.frmMenu.value), this.id);           
    this.reloadComponent();        
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
