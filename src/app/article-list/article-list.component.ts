import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  articles!: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.searchTerms.pipe(
      startWith(''), // Emit a default search term to load all articles initially
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.getArticles(term))
    );

  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerms.next(inputElement.value);
  }

  onQuantityChange(change: { article: Article, quantity: number }) {
    this.articleService.changeQuantity(change.article.id, change.quantity).subscribe();
  }

}


export interface ArticleQuantityChange {
  article: Article;
  quantity: number;
}