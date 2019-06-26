import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoVComponent } from './level-two-v.component';

describe('LevelTwoVComponent', () => {
  let component: LevelTwoVComponent;
  let fixture: ComponentFixture<LevelTwoVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTwoVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
