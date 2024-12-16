import { Component } from '@angular/core';

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
}
