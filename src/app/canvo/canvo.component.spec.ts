import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvoComponent } from './canvo.component';

describe('CanvoComponent', () => {
  let component: CanvoComponent;
  let fixture: ComponentFixture<CanvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
