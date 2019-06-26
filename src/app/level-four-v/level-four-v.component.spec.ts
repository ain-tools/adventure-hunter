import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFourVComponent } from './level-four-v.component';

describe('LevelFourVComponent', () => {
  let component: LevelFourVComponent;
  let fixture: ComponentFixture<LevelFourVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFourVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFourVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
