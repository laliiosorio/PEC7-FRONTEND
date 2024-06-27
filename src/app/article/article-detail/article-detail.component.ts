import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/api/articles/${articleId}`).subscribe(
      data => {
        this.article = data;
      },
      error => {
        console.error('Error fetching article details', error);
      }
    );
  }
}
