import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article, ArticleOptions, ArticleListOptions } from '../article';
import { Observable } from 'rxjs/Observable';
import { httpOptions } from '../common/httpHelpers';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  post(article: Article) {
    return this.http.post(environment.backendUrl + '/new', article, httpOptions);
  }

  getById(id: string): Observable<Article> {
    return this.http.get(environment.backendUrl + '/get/' + id, httpOptions)
      .pipe()
      .map((data: ArticleOptions) => new Article(data));
  }

  getList(): Observable<ArticleListOptions[]> {
    return this.http.get(environment.backendUrl + '/get', httpOptions)
      .map((data: ArticleListOptions[]) => data);
  }

}
