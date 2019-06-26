import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoDComponent } from './level-two-d.component';

describe('LevelTwoDComponent', () => {
  let component: LevelTwoDComponent;
  let fixture: ComponentFixture<LevelTwoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTwoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
