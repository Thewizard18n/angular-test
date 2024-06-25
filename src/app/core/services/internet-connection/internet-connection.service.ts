import { Injectable } from '@angular/core';
import { Observable, merge, fromEvent, mapTo, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {

  private online$: Observable<string>;

  constructor() {
    this.online$ = merge(
      fromEvent(window, 'online').pipe(map(() => 'Conectado novamente')),
      fromEvent(window, 'offline').pipe(map(() => 'Sem conexão com a internet')),
    ) ;
  }

  get isOnline$(): Observable<string> {
    return this.online$;
  }
}
