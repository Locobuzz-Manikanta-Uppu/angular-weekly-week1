import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbovefooterComponent } from './abovefooter.component';

describe('AbovefooterComponent', () => {
  let component: AbovefooterComponent;
  let fixture: ComponentFixture<AbovefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbovefooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbovefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
