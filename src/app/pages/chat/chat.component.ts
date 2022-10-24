import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensajes: any[]
  mensaje: string
  userId = localStorage.getItem('idALED')

  constructor(public chatServ: ChatService) { }

  ngOnInit(): void {
    this.chatServ.traeMensajes()
      .subscribe( (mensajes:any[]) => {
        this.mensajes =  mensajes
      })
  }

  

}
