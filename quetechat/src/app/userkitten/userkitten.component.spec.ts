import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserkittenComponent } from './userkitten.component';

describe('UserkittenComponent', () => {
  let component: UserkittenComponent;
  let fixture: ComponentFixture<UserkittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserkittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserkittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
