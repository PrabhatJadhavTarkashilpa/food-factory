import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meals-listing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals-listing-page.component.html',
  styleUrl: './meals-listing-page.component.scss',
})
export class MealsListingPageComponent {
  mealsList: any[] = [];
  constructor(
    private masterService: ApiService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.active.params.subscribe((res: any) => {
      if (res.categoryName) {
        this.loadAllMealsByCategory(res.categoryName);
      } else {
        this.loadAllMealsBySearch(res.searchString);
      }
    });
  }

  loadAllMealsByCategory(category: string) {
    this.masterService.getFoodByCategory(category).subscribe((res: any) => {
      this.mealsList = res.meals;
    });
  }

  loadAllMealsBySearch(searchStr: string) {
    this.masterService.getMealBySearch(searchStr).subscribe((res: any) => {
      this.mealsList = res.meals;
    });
  }

  navigate(mealId: string) {
    this.router.navigate(['/meal', mealId]);
  }
}
