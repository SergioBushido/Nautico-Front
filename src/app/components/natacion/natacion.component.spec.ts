import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatacionComponent } from './natacion.component';

describe('NatacionComponent', () => {
  let component: NatacionComponent;
  let fixture: ComponentFixture<NatacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
