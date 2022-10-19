import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public forma: FormGroup

  passwordRepeat!: string

  constructor(
    public userServ: UsersService,
    private fb: FormBuilder,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({ //se toma del constructor que tiene inyectado el servicio que esta importado
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(){
    let error = 0;
    let usuario: any
    this.userServ.login(this.forma.value).subscribe(resp => {
      usuario = resp
    })
    if(error==0){
      setTimeout(() => {
        this.userServ.saveData(usuario)
        this.router.navigate([''])
      }, 1000);
    }
  }

}
