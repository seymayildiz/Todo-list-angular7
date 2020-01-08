import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }
  /*apiUrl yi app.module.ts klasöründe providerda tanımladık. Proje üzerinde api linki değişeceği zaman 
  providerda ki api adresini değiştirmemiz yeterli olacaktır. Böylece projede adresi her yerde ayrı ayrı değiştirmektense tek bir yerde değiştireceğiz*/

  addTodo(obj) {
    return this.http.post(this.apiUrl + '/todo', obj);
  }

  getAllTodos() {
    return this.http.get(this.apiUrl + '/todo');
  }

  updateTodo(obj) {
    return this.http.put(this.apiUrl + '/todo', obj);
  }

  removeTodo(id) {
    return this.http.delete(this.apiUrl + '/todo/' + id);
  }

}