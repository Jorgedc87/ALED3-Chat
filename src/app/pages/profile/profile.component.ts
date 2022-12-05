import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { AgePipe } from 'src/app/pipes/age.pipe';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserI
  age: any
  flag: boolean = true
  form: FormGroup

  constructor(public userService: UsersService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    this.userService.getData().subscribe( resp =>{
      this.user = resp
      console.log(resp)
      this.age = new AgePipe().transform(this.user.birthday)
    })
  }

  toggleFlag(){

    if(this.flag){
      this.form = new FormGroup({
        name: new FormControl(this.user.name, [Validators.required, Validators.minLength(4)]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        bio: new FormControl(this.user.bio),
        birthday: new FormControl(this.user.birthday, [Validators.required])
      });
  
    }

    this.flag = !this.flag
  }

  saveData(){
    Swal.fire({
      title: '¿Quieres guardar tu perfil?',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('¡Tu perfil fue guardado!', '', 'success')
        this.userService.editUser(this.form.value).subscribe( () => {
          this.getData();
        })
        this.userService.updateName(this.form.value['name'])
        this.toggleFlag()
      } else if (result.isDenied) {
        Swal.fire('No se guardaron los cambios', '', 'info')
      }
    })
  }

  changePassword(){
    Swal.fire({
      title: 'Ingrese su nueva contraseña',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Cambiar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`https://hostinjor.com/aledapi/v1/users/`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })    
  }

}
