import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged = 0;
  toggle = 0;

  constructor(public userSer: UsersService) { }

  ngOnInit(){

  }

 logout(){
  this.userSer.logout()
 }

 toggleMenu()
 {
  if(this.toggle==1){
    this.toggle = 0
  }else{
    this.toggle = 1
  }
 }


}
