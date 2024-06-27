import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleNewComponent } from './article/article-new/article-new.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'article/list',
    component: ArticleListComponent,
  },
  {
    path: 'article/create',
    component: ArticleNewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
