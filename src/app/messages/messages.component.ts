import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  // Lista de conversaciones
  conversations = [
    {
      id: 1,
      name: 'Juan Pérez',
      profileImg: '../../assets/noPerfil.png',
      lastMessage: '¡Hola! ¿Cómo estás?',
      messages: [
        { sender: 'Juan Pérez', text: '¡Hola! ¿Cómo estás?' },
        { sender: 'Tú', text: 'Todo bien, ¿y tú?' }
      ]
    },
    {
      id: 2,
      name: 'Maria López',
      profileImg: '../../assets/noPerfil.png',
      lastMessage: '¿Nos vemos mañana?',
      messages: [
        { sender: 'Maria López', text: '¿Nos vemos mañana?' },
        { sender: 'Tú', text: '¡Sí! A qué hora?' }
      ]
    }
  ];

  // Conversación seleccionada
  selectedConversation: any = null;
  newMessage: string = '';

  // Función para seleccionar una conversación
  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
    this.newMessage = '';
  }

  // Función para enviar un nuevo mensaje
  sendMessage() {
    if (this.newMessage.trim()) {
      this.selectedConversation.messages.push({
        sender: 'Tú',
        text: this.newMessage
      });
      this.newMessage = '';
    }
  }

  height: string = '100vh'; // Inicialmente en 100% en pantallas grandes
  isMobile: boolean = false; // Para saber si estamos en una pantalla pequeña

  // Escucha cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = event.target.innerWidth <= 768;
    // Si estamos en pantalla pequeña, establecemos la altura en fit-content
    if (this.isMobile) {
      this.height = '90vh';
    } else {
      this.height = '100vh'; // Devolvemos a 100% cuando no es pantalla pequeña
    }
  }
}
