import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './view/home-view/home-view.component';
import { JournalListViewComponent } from './view/journal-list-view/journal-list-view.component';
import { ArticleViewComponent } from './view/article-view/article-view.component';


export const Router: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeViewComponent},
	{path: 'journal', component: JournalListViewComponent},
	{path: 'article/:ID', component: ArticleViewComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(Router);
