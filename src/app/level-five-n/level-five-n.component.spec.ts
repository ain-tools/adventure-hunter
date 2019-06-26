import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFiveNComponent } from './level-five-n.component';

describe('LevelFiveNComponent', () => {
  let component: LevelFiveNComponent;
  let fixture: ComponentFixture<LevelFiveNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFiveNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFiveNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
