import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article.model'; // Asegúrate de tener un modelo Article
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
    private apiUrl = 'http://localhost:3000/api/articles';

    constructor(private http: HttpClient) {}
  
    getArticles(query?: string): Observable<Article[]> {
      let params = new HttpParams();
      if (query) {
        params = params.set('q', query);
      }
      return this.http.get<Article[]>(this.apiUrl, { params });
    }
  
    changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
      return this.http.patch<Article>(`${this.apiUrl}/${articleID}`, { changeInQuantity });
    }
  
    create(article: Article): Observable<any> {
      return this.http.post(this.apiUrl, article);
    }

}
