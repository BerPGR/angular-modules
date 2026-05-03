import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LugarClass } from './lugar.class';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class LugarService {

  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  salvar(lugar: LugarClass): Observable<LugarClass> {
    return this.http.post<LugarClass>(`${this.apiUrl}/lugares`, lugar)
  }

  obterTodos(): Observable<LugarClass[]> {
    return this.http.get<LugarClass[]>(`${this.apiUrl}/lugares`)
  }

  filtrar(nome: string, categoria: string): Observable<LugarClass[]> {
    let parametros = new HttpParams()

    if (nome) {
      parametros = parametros.set('nome_like', nome)
    }

    if (categoria && categoria !== '-1') {
      parametros = parametros.set('categoria', categoria)
    }

    return this.http.get<LugarClass[]>(`${this.apiUrl}/lugares`, {
      params: parametros
    })
  }
}
