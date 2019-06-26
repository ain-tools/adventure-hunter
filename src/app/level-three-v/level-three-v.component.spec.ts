import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeVComponent } from './level-three-v.component';

describe('LevelThreeVComponent', () => {
  let component: LevelThreeVComponent;
  let fixture: ComponentFixture<LevelThreeVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreeVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelThreeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
