import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;
  article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.article$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.articleService.getById(params.get('id'));
      });
    this.article$.subscribe(
      article => this.article = article,
      error => console.log(error)
    );
  }

}
