import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbegateHeaderComponent } from './abbegate-header.component';

describe('AbbegateHeaderComponent', () => {
  let component: AbbegateHeaderComponent;
  let fixture: ComponentFixture<AbbegateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbbegateHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbbegateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
