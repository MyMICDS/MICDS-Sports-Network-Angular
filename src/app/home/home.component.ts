import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleListOptions } from '../article';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articleList$: Observable<ArticleListOptions[]>;
  articleList: ArticleListOptions[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleList$ = this.articleService.getList();
    this.articleList$.subscribe(list => this.articleList = list);
  }

}
