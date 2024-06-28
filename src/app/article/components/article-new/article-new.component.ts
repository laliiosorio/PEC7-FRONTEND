import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { NameArticleValidator } from '../../validators/name-article-validator';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  articleForm!: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      name: ["", [Validators.required, NameArticleValidator.nameArticleValidator]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://[^\\s/$.?#].[^\\s]*\\.(jpg|jpeg|png|gif)')]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.articleService.create(this.articleForm.value).subscribe(() => {
        console.log('Artículo creado:', this.articleForm.value);
        this.articleForm.reset();
      });
    } else {
      console.log('Formulario no válido');
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    this.articleForm.markAllAsTouched();
  }
}
