import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../interfaces/mensaje';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(msj: any, arg: any): Mensaje[] {
    const resultChat = [];
    for(const chat of msj){
      if(chat.mensaje.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultChat.push(chat)
      }
    }

    return resultChat;
  }

}


