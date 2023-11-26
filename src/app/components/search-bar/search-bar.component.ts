import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  constructor(private router: Router) {}
  searchStr: string = '';
  navigate(event: any, categoryName: string) {
    if (event.key == 'Enter') {
      this.router.navigate(['/mealsList/search', categoryName]);
    }
  }
}
