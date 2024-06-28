import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/components/article-list/article-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: ArticleListComponent, 
    pathMatch: 'full' 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'article', 
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
