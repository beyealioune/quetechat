import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListkittenComponent } from './listkitten.component';

describe('ListkittenComponent', () => {
  let component: ListkittenComponent;
  let fixture: ComponentFixture<ListkittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListkittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListkittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
