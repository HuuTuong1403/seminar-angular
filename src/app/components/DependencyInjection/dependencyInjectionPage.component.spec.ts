import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionPage } from './dependencyInjectionPage.component';

describe('DependencyInjectionComponent', () => {
  let component: DependencyInjectionPage;
  let fixture: ComponentFixture<DependencyInjectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
