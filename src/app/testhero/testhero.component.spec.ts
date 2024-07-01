import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestheroComponent } from './testhero.component';

describe('TestheroComponent', () => {
  let component: TestheroComponent;
  let fixture: ComponentFixture<TestheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
