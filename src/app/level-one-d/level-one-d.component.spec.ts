import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOneDComponent } from './level-one-d.component';

describe('LevelOneDComponent', () => {
  let component: LevelOneDComponent;
  let fixture: ComponentFixture<LevelOneDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOneDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOneDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
