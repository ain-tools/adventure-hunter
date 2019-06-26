import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeDComponent } from './level-three-d.component';

describe('LevelThreeDComponent', () => {
  let component: LevelThreeDComponent;
  let fixture: ComponentFixture<LevelThreeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
