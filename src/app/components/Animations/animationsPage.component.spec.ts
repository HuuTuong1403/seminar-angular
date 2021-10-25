import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsPage } from './animationsPage.component';

describe('AnimationsComponent', () => {
  let component: AnimationsPage;
  let fixture: ComponentFixture<AnimationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
