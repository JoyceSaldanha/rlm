import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbegateComponent } from './abbegate.component';

describe('AbbegateComponent', () => {
  let component: AbbegateComponent;
  let fixture: ComponentFixture<AbbegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbbegateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbbegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
