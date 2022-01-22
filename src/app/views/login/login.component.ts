import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import PeopleModel from '../../models/people.model';
import { ToastService } from '../../services/base-services/toast.service';
import { LoginService } from '../../services/login/login.service'
import { AlertsComponent } from '../notifications/alerts.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  people: PeopleModel;

  constructor(private router: Router,
    private toast: ToastService,
    private loginService: LoginService) {
  }

  ngOnInit() {
    this.people = new PeopleModel();
    this.people.id = '';
    this.people.apppassword = '';
    this.people.name = '';
  }

  async onSubmit(form: NgForm) {
    let err: boolean = false;
    try {
      if (form.invalid) {
        return;
      }
      let value = await this.loginService.val(this.people)
      console.log(value);
      if (value == null) {
        err = true;
        this.toast.showMessage('Al parecer no te encuentras registrado!!', 'success');
        console.log('Al parecer no te encuentras registrado!!');
      } else {
        this.router.navigateByUrl('/dashboard');
        this.toast.showMessage('Disfruta!!', 'success');
        console.log('Disfruta!!');
        localStorage.setItem("r", value['user'].id);
        
      }
    } catch (error) {
      this.toast.showMessage('Al parecer no te encuentras registrado!!', 'error');
    }

  }

}
