import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoNComponent } from './level-two-n.component';

describe('LevelTwoNComponent', () => {
  let component: LevelTwoNComponent;
  let fixture: ComponentFixture<LevelTwoNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTwoNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
