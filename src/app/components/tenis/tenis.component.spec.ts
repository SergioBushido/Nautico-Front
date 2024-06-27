import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisComponent } from './tenis.component';

describe('TenisComponent', () => {
  let component: TenisComponent;
  let fixture: ComponentFixture<TenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
