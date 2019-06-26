import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFourDComponent } from './level-four-d.component';

describe('LevelFourDComponent', () => {
  let component: LevelFourDComponent;
  let fixture: ComponentFixture<LevelFourDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelFourDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelFourDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
