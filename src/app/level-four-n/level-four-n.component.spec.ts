import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFourNComponent } from './level-four-n.component';

describe('LevelFourNComponent', () => {
  let component: LevelFourNComponent;
  let fixture: ComponentFixture<LevelFourNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFourNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFourNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
