import { Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { MealsListingPageComponent } from './pages/meals-listing-page/meals-listing-page.component';
import { MealPageComponent } from './pages/meal-page/meal-page.component';

export const routes: Routes = [
  { path: '', component: CategoriesPageComponent },
  { path: 'mealsList/:categoryName', component: MealsListingPageComponent },
  { path: 'meal/:mealId', component: MealPageComponent },
];
