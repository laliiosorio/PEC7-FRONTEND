import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleItemComponent,
    ArticleNewComponent,
    ArticleDetailComponent   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule,
    SharedModule
  ],
  providers: [
    ArticleService
  ],
})
export class ArticleModule { }
