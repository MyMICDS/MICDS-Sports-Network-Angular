import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialComponentsModule } from './material-components/material-components.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './user/user.component';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ArticleComponent,
    UserComponent,
    NewArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialComponentsModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
