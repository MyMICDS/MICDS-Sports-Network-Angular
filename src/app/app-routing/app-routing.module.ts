import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewArticleComponent} from '../new-article/new-article.component';
import { ArticleComponent } from '../article/article.component';
import { FeedComponent } from '../feed/feed.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'feed',
		component: FeedComponent
	},
	{
		path: 'new',
		component: NewArticleComponent
	},
	{
		path: 'article/:id',
		component: ArticleComponent
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
