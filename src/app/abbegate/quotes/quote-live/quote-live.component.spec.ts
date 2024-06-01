import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLiveComponent } from './quote-live.component';

describe('QuoteLiveComponent', () => {
  let component: QuoteLiveComponent;
  let fixture: ComponentFixture<QuoteLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteLiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuoteLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
