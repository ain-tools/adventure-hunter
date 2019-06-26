import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFiveVComponent } from './level-five-v.component';

describe('LevelFiveVComponent', () => {
  let component: LevelFiveVComponent;
  let fixture: ComponentFixture<LevelFiveVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFiveVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFiveVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
