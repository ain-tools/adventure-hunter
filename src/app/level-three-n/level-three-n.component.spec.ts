import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeNComponent } from './level-three-n.component';

describe('LevelThreeNComponent', () => {
  let component: LevelThreeNComponent;
  let fixture: ComponentFixture<LevelThreeNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreeNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelThreeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
