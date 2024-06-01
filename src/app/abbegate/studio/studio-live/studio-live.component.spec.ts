import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLiveComponent } from './studio-live.component';

describe('StudioLiveComponent', () => {
  let component: StudioLiveComponent;
  let fixture: ComponentFixture<StudioLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudioLiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
