import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-services/base-service.service';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseServiceService{
  private subjectMenu = new Subject<any>();
  constructor(public http: HttpClient) {
    super(http);
  }
  
  getMenu() {
    try {
      return this.consumeAPI('/menu/get', null, 'get');
    } catch (e) {
      console.log(`Ocurrio un error al obtener el menú`);
    }
  }

  getDataMenu(id:number) {
    try {
      return this.http.get(`${environment.url}:${environment.port}/menu/${id}/show`);
    } catch (e) {
      console.log(`Ocurrio un error al obtener el menú`);
    }
  }
 
  getMenuAll(){
    return this.http.get(`${environment.url}:${environment.port}/menu/getall`);
  }

  getMenuPadres(){
    return this.http.get(`${environment.url}:${environment.port}/menu/getpadres`);
  }

  storeMenu(data:any){
    return this.consumeAPI('/menu/store', data, 'post');
  }
  
  updateMenu(data:any, id:number){    
    return this.consumeAPI(`/menu/update/${id}`, data, 'post');
  }

  deleteMenu(id:number){
    return this.consumeAPI(`/menu/delete/${id}`, null ,'get');
  }
}
