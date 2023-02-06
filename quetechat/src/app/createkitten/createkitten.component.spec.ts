import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatekittenComponent } from './createkitten.component';

describe('CreatekittenComponent', () => {
  let component: CreatekittenComponent;
  let fixture: ComponentFixture<CreatekittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatekittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatekittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
