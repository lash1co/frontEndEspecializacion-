import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-services/base-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import FilterModel from '../../models/filter.model'

@Injectable({
  providedIn: 'root'
})
export class ValidatorService extends BaseServiceService {

  constructor(public http: HttpClient) {
    super(http);
   }

   validatorBack() {
		const endpoint = '/validator/filter';
		try {
			return this.consumeAPI(endpoint);
		} catch (e) {
			console.log(`An error has occurred validating the user: ${e}`);
		}
	}


}
