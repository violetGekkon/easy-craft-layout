import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCraftLayoutComponent } from './easy-craft-layout.component';

describe('EasyCraftLayoutComponent', () => {
  let component: EasyCraftLayoutComponent;
  let fixture: ComponentFixture<EasyCraftLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyCraftLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyCraftLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
