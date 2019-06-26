import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOneVComponent } from './level-one-v.component';

describe('LevelOneVComponent', () => {
  let component: LevelOneVComponent;
  let fixture: ComponentFixture<LevelOneVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOneVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOneVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
