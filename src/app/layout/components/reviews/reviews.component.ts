import { Component, OnInit } from '@angular/core';
import { ContentState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Review } from 'src/app/core/models/review';
import { Select } from '@ngxs/store';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Select(ContentState.getReview) review$: Observable<Review>;
  review: Review;
  currentReview: Post;
  currentIndex = 0;

  constructor() {
    this.review$
      .subscribe(review => {
        this.review = review;
        this.currentReview = this.review.posts[0];
      });
  }

  ngOnInit() {
  }

  changeCurrentReview(index: number) {
    this.currentReview = this.review.posts[index];
    this.currentIndex = index;
  }

}
