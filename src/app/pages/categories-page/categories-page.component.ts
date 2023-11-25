import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
})
export class CategoriesPageComponent implements OnInit {
  categoriesList: any[] = [];
  constructor(private masterService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllFoodCategories();
  }

  loadAllFoodCategories() {
    this.masterService.getAllFoodCategories().subscribe((res: any) => {
      console.log('res', res);
      this.categoriesList = res.categories;
    });
  }

  navigate(categoryName: string) {
    this.router.navigate(['/mealsList', categoryName]);
  }
}
