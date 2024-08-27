import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcLayoutComponent } from './ec-layout.component';

describe('EasyCraftLayoutComponent', () => {
  let component: EcLayoutComponent;
  let fixture: ComponentFixture<EcLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
