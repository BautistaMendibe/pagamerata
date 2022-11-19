import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartirComponentComponent } from './repartir-component.component';

describe('RepartirComponentComponent', () => {
  let component: RepartirComponentComponent;
  let fixture: ComponentFixture<RepartirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartirComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
