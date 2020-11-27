import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../../Service/chat-bot.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor(private api: ChatBotService) { }
  answer = [];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  message(message: string){
    (document.getElementById('form_input') as HTMLInputElement).value = '';

    if (message === ''){
      alert('Please Enter Question');
    }

    this.api.getMessage()
    .subscribe(data => {
      console.log(data);
      this.answer = data,
      this.answer.forEach(e => {
        if (e.question === message)
        {
          const userinput = document.createElement('div');
          userinput.innerHTML = message;
          userinput.className = 'chatarea-inner user';
          document.getElementById('message').appendChild(userinput).style.color = 'black';

          const answer = document.createElement('div');
          answer.innerHTML = e.answer;
          answer.className = 'chatarea-inner chatbot';
          document.getElementById('message').appendChild(answer).style.color = 'black';
        }
      });
    }, error => console.log(error));

  }

}
