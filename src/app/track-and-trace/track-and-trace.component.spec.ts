import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAndTraceComponent } from './track-and-trace.component';

describe('TrackAndTraceComponent', () => {
  let component: TrackAndTraceComponent;
  let fixture: ComponentFixture<TrackAndTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackAndTraceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackAndTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
