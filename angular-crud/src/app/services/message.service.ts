import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  success(message: string) {}
  error(message: string) {}
}
