import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsListingPageComponent } from './meals-listing-page.component';

describe('MealsListingPageComponent', () => {
  let component: MealsListingPageComponent;
  let fixture: ComponentFixture<MealsListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsListingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealsListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
