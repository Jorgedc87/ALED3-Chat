import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      'password-confirm': ['', [Validators.required, Validators.minLength(6)]],
      'name': ['', [Validators.required]],
    });
  }

  register(){
    let error = 0;
    this.userServ.register(this.forma.value).subscribe({
      next(log){

      },
      error(log){
        error = 1;
      }
    })
    if(error==0){
      this.router.navigate(['/login'])
    }
  }

}
