import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';
import { LevelFourComponent } from './level-four/level-four.component';
import { LevelFiveComponent } from './level-five/level-five.component';
import { LevelOneVComponent } from './level-one-v/level-one-v.component';
import { LevelTwoVComponent } from './level-two-v/level-two-v.component';
import { LevelThreeVComponent } from './level-three-v/level-three-v.component';
import { LevelFourVComponent } from './level-four-v/level-four-v.component';
import { LevelFiveVComponent } from './level-five-v/level-five-v.component';
import { LevelOneNComponent } from './level-one-n/level-one-n.component';
import { LevelTwoNComponent } from './level-two-n/level-two-n.component';
import { LevelThreeNComponent } from './level-three-n/level-three-n.component';
import { LevelFourNComponent } from './level-four-n/level-four-n.component';
import { LevelFiveNComponent } from './level-five-n/level-five-n.component';
import { LevelOneDComponent } from './level-one-d/level-one-d.component';
import { LevelTwoDComponent } from './level-two-d/level-two-d.component';
import { LevelThreeDComponent } from './level-three-d/level-three-d.component';
import { LevelFourDComponent } from './level-four-d/level-four-d.component';
import { LevelFiveDComponent } from './level-five-d/level-five-d.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NoSanitizePipe,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    LevelFourComponent,
    LevelFiveComponent,
    LevelOneVComponent,
    LevelTwoVComponent,
    LevelThreeVComponent,
    LevelFourVComponent,
    LevelFiveVComponent,
    LevelOneNComponent,
    LevelTwoNComponent,
    LevelThreeNComponent,
    LevelFourNComponent,
    LevelFiveNComponent,
    LevelOneDComponent,
    LevelTwoDComponent,
    LevelThreeDComponent,
    LevelFourDComponent,
    LevelFiveDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
