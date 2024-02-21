import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearhComponent } from './hero-search.component';

describe('HeroSearhComponent', () => {
  let component: HeroSearhComponent;
  let fixture: ComponentFixture<HeroSearhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSearhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
