import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOneNComponent } from './level-one-n.component';

describe('LevelOneNComponent', () => {
  let component: LevelOneNComponent;
  let fixture: ComponentFixture<LevelOneNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOneNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOneNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
