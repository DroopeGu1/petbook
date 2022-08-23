import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(user: any): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:3000/user/login', user, {
      observe: 'response',
    }).pipe(
      tap((res) => {
        const authToken = res.headers.get('z-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
