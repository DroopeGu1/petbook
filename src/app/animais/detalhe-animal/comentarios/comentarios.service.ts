import { Comentario, Comentarios } from './comentarios';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  getComents(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  createComents(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
