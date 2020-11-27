import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  private baseurl = `http://localhost:8090/event`;

  constructor(private http: HttpClient) { }
  getMessage(): Observable<any> {
    return this.http.get(`http://localhost:8090/event`);
  }

}
