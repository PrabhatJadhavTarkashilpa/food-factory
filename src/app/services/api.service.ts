import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  }

  getAllFoodCategories() {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }

  getFoodByCategory(categoryName: string) {
    return this.http.get(`${this.baseUrl}/filter.php?c=${categoryName}`);
  }

  getSingleMeal(id: string) {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getMealBySearch(searchString: string) {
    return this.http.get(`${this.baseUrl}/search.php?s=${searchString}`);
  }
}
