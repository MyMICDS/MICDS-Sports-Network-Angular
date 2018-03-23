import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../article';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  bodyText = '';
  titleText = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

  }

  submit() {
    const article = new Article({
      author: 'jcai',
      dateCreated: new Date().toString(),
      title: this.titleText,
      content: this.bodyText,
      tags: ['test']
    });
    console.log(article);
    this.articleService.post(article);
  }

}
