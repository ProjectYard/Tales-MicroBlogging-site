import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTalesComponent } from './grid-tales.component';

describe('GridTalesComponent', () => {
  let component: GridTalesComponent;
  let fixture: ComponentFixture<GridTalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
