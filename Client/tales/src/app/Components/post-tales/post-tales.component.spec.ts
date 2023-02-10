import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTalesComponent } from './post-tales.component';

describe('PostTalesComponent', () => {
  let component: PostTalesComponent;
  let fixture: ComponentFixture<PostTalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
