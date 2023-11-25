import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-page.component.html',
  styleUrl: './meal-page.component.scss',
})
export class MealPageComponent {
  mealDetails: any = {};
  constructor(
    private masterService: ApiService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.active.params.subscribe((res: any) => {
      this.loadAllMeals(res.mealId);
    });
  }

  loadAllMeals(id: string) {
    this.masterService.getSingleMeal(id).subscribe((res: any) => {
      console.log('meal', res.meals[0]);
      this.mealDetails = res.meals[0];
    });
  }

  navigate(categoryName: string) {
    this.router.navigate(['/mealsList', categoryName]);
  }
}
