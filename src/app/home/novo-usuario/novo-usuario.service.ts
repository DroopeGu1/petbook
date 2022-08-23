import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpCliente: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httpCliente.post(
      'http://localhost:3000/user/signup',
      novoUsuario
    );
  }

  verifificaUsuarioExistente(nomeUsuario: string) {
    return this.httpCliente.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
