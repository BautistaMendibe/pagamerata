import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuantoPusoComponentComponent } from './cuanto-puso-component.component';

describe('CuantoPusoComponentComponent', () => {
  let component: CuantoPusoComponentComponent;
  let fixture: ComponentFixture<CuantoPusoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuantoPusoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuantoPusoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
