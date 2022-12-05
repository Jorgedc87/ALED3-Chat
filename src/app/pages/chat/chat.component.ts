import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensajes: Mensaje[]
  chatArea: string = ''
  userId = localStorage.getItem('idALED')
  error = {active: false,mensaje: ""}
  filterChat = ''

  constructor(public chatServ: ChatService) { }

  ngOnInit(): void {
    this.chatServ.traeMensajes()
      .subscribe( (mensajes:Mensaje[]) => {
        this.mensajes =  mensajes
      })
  }

  enviaMensaje(){
    if(this.chatArea.length === 0){
      this.error.active = true;
      this.error.mensaje = "Inserte algun mensaje"
      return
    }else{
      let data = {
        mensaje: this.chatArea,
        id: this.userId,
        name: localStorage.getItem('nameALED'),
        timestamp: new Date()
      }

      this.chatServ.enviaMensaje(data)
        .then( () => console.log('Enviado'))
        .catch( (err) => console.error('Error al enviar', err) )

      this.chatArea = ''
      this.error.active = false;
      this.error.mensaje = ""
    }
  }

}
