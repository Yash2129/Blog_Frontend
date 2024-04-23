import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPostComponent } from './view-my-post.component';

describe('ViewMyPostComponent', () => {
  let component: ViewMyPostComponent;
  let fixture: ComponentFixture<ViewMyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
