import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialComponentsModule } from './material-components/material-components.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './user/user.component';
import { NewArticleComponent } from './new-article/new-article.component';

import { ArticleService } from './services/article.service';
import { AuthService } from './services/auth.service';

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
    HttpClientModule,
    MaterialComponentsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    ArticleService,
    AuthService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
