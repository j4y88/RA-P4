import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './view/home-view/home-view.component';
import { BlogViewComponent } from './view/blog-view/blog-view.component';
import { ArticleViewComponent } from './view/article-view/article-view.component';


export const Router: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeViewComponent},
	{path: 'blog', component: BlogViewComponent},
	{path: 'article', component: ArticleViewComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(Router);
