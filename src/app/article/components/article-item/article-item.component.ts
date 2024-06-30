import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleQuantityChange } from '../../models/article-quantity-change.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article: Article = {
    id: 0,
    name: 'Nombre del Artículo',
    imageUrl: 'assets/images/pato-1.png',
    price: 100,
    isOnSale: false,
    quantityInCart: 0
  };

  constructor(private router: Router) { }

  @Output() quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter<ArticleQuantityChange>();

  incrementQuantity() {
    this.article.quantityInCart++;
    this.emitQuantityChange();
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.emitQuantityChange();
    }
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/article', id]);
  }

  private emitQuantityChange() {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart
    };
    this.quantityChange.emit(change);
  }
}
