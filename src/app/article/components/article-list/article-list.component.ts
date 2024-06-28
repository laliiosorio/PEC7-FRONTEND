import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { ArticleQuantityChange } from '../../models/article-quantity-change.model';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'] // Corregido el atributo a styleUrls
})
export class ArticleListComponent implements OnInit {

  articles!: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.searchTerms.pipe(
      startWith(''), 
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.getArticles(term))
    );
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerms.next(inputElement.value);
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id, change.quantity).subscribe();
  }

}
