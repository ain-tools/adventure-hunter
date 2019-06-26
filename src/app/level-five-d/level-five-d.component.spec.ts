import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFiveDComponent } from './level-five-d.component';

describe('LevelFiveDComponent', () => {
  let component: LevelFiveDComponent;
  let fixture: ComponentFixture<LevelFiveDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFiveDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFiveDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
