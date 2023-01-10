import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL


@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpCliente: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httpCliente.post(
      `${API}/user/signup`,
      novoUsuario
    );
  }

  verifificaUsuarioExistente(nomeUsuario: string) {
    return this.httpCliente.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
