import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseServiceService } from '../base-services/base-service.service';

@Injectable({
	providedIn: 'root'
})
export class SubirExcelService extends BaseServiceService {

	constructor(public http: HttpClient) {
		super(http);
	}

	enviarExcelBack(excelBase: any) {
		const endpoint = '/grupoUno/subirExcel';
		try {
			return this.consumeAPI(endpoint, {excelBase}, 'post', false);
		} catch (e) {
			console.log(`An error has occurred validating the user: ${e}`);
		}
	}
}
