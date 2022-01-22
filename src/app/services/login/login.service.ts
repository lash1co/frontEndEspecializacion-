import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-services/base-service.service';
import { HttpClient } from '@angular/common/http';
import PeopleModel from '../../models/people.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseServiceService{

  constructor(public http: HttpClient) {
		super(http)
  }
  
  val(data: PeopleModel) {
    try {
      return this.consumeAPI('/user/val', { id: data.id, apppassword: data.apppassword });
    } catch (e) {
      console.log(`An error has occurred validating the user: ${this.val.name} ${e}`)
    }
  }
}
