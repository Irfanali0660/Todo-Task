import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonComponent } from './botton.component';

describe('BottonComponent', () => {
  let component: BottonComponent;
  let fixture: ComponentFixture<BottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
