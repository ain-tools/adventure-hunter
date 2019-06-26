import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.dialogText = false;
    },6000)

  }
  dialogText = true;


  druid:boolean=false;
  mage:boolean=false;
  mercenary:boolean=false;
  necromancer:boolean=false;
  peasant:boolean=false;
  priestess:boolean=false;
  warrior:boolean=false;
  monster:boolean=false;

  openOptions(characterClass){
      
    if(characterClass === 'druid'){
      this.characterClass = 'druid';
      this.druid = true;
      this.monster = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.warrior=false;

    }else if(characterClass === 'mage'){
      this.characterClass = 'mage';
      this.mage = true;
      this.monster = false;
      this.druid=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.warrior=false;
    }else if(characterClass === 'mercenary'){
      this.characterClass = 'mercenary';
      this.mercenary = true;
      this.monster = false;
      this.mage=false;
      this.druid=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.warrior=false;
    }else if(characterClass === 'necromancer'){
      this.characterClass = 'necromancer';
      this.necromancer = true;
      this.monster = false;
      this.mage=false;
      this.mercenary=false;
      this.druid=false;
      this.peasant=false;
      this.priestess=false;
      this.warrior=false;
    }else if(characterClass === 'peasant'){
      this.characterClass = 'peasant';
      this.peasant = true;
      this.monster = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.druid=false;
      this.priestess=false;
      this.warrior=false;
    }else if(characterClass === 'priestess'){
      this.characterClass = 'priestess';
      this.priestess = true;
      this.monster = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.druid=false;
      this.warrior=false;
    }else if(characterClass === 'warrior'){
      this.characterClass = 'warrior';
      this.warrior = true;
      this.monster = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.druid=false;
    }else if(characterClass == 'monster1'){
      this.characterClass = 'monster1';
      this.monster = true;
      this.warrior = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.druid=false;
      setTimeout(()=>{
        let enemyName = document.getElementsByClassName('enemyName')[0] as HTMLElement;
        if(document.getElementsByClassName('enemyName')[0]){
          enemyName.innerHTML = "Corrupted Owlman";
          let enemyDescription = document.getElementsByClassName('enemyDescription')[0] as HTMLElement;
          enemyDescription.innerHTML = "Corrupted guardian of the forest, once part of a beautiful race of owl men. The war between dark elves and dwarves left them near extinction, the remnants of this race are now mostly hopeless and genocidal.";
          let enemyPortrait = document.getElementsByClassName('enemyPortrait')[0] as HTMLElement;
          enemyPortrait.setAttribute('src','./assets/testennemy.png');
        }
      },100)

    }else if(characterClass == 'monster2'){
      this.characterClass = 'monster2';
      this.monster = true;
      this.warrior = false;
      this.mage=false;
      this.mercenary=false;
      this.necromancer=false;
      this.peasant=false;
      this.priestess=false;
      this.druid=false;
      setTimeout(()=>{
        let enemyName = document.getElementsByClassName('enemyName')[0] as HTMLElement;
        if(enemyName){
          enemyName.innerHTML = "Ankheg";
          let enemyDescription = document.getElementsByClassName('enemyDescription')[0] as HTMLElement;
          enemyDescription.innerHTML = "You do not want to know where these things come from,trust me.";
          let enemyPortrait = document.getElementsByClassName('enemyPortrait')[0] as HTMLElement;
          enemyPortrait.setAttribute('src','./assets/monster2.png');
        }
      },100)
    }
    let energyPercentage = this.energy * 100 / this.incrementCounter;
    let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
    energyBarPercentage.style.width = `${energyPercentage}%`;
  }

 
  characterClass;

        //HP SYSTEM
  //druid HP
  fullDruidLife : number = 130;
  druidLife : number = 130;
  //mage HP
  fullMageLife : number = 110;
  mageLife : number = 110;
  //mercenary HP
  fullMercenaryLife : number = 180;
  mercenaryLife : number = 180;
  //necromancer HP
  fullNecromancerLife : number = 80;
  necromancerLife : number = 80;
  //peasant HP
  fullPeasantLife : number = 100;
  peasantLife : number = 100;
  //priestess HP
  fullPriestessLife : number = 115;
  priestessLife : number = 115;
  //warrior HP
  fullWarriorLife : number = 200;
  warriorLife : number = 200;  
  //monster1
  fullMonster1Life : number = 35;
  monster1Life : number = 35;
  //monster2
  fullMonster2Life : number = 30;
  monster2Life : number = 30;

  addHP(){
//HP DISPLAY SYSTEM
  //druid HP
  let fullDruidLife = this.fullDruidLife;
  let druidLife = this.druidLife;
  let druidPercentageLife : number = this.druidLife * 100 / this.fullDruidLife;;
  //mage HP
  let fullMageLife = this.fullMageLife;
  let mageLife = this.mageLife;
  let magePercentageLife : number = this.mageLife * 100 / this.fullMageLife;
  //mercenary HP
  let fullMercenaryLife = this.fullMercenaryLife ;
  let mercenaryLife = this.mercenaryLife ;
  let mercenaryPercentageLife : number = this.mercenaryLife * 100 / this.fullMercenaryLife;
  //necromancer HP
  let fullNecromancerLife = this.fullNecromancerLife ;
  let necromancerLife = this.necromancerLife;
  let necromancerPercentageLife : number = this.necromancerLife * 100 / this.fullNecromancerLife;
  //peasant HP
  let fullPeasantLife = this.fullPeasantLife;
  let peasantLife = this.peasantLife;
  let peasantPercentageLife : number = this.peasantLife * 100 / this.fullPeasantLife;
  //priestess HP
  let fullPriestessLife = this.fullPriestessLife;
  let priestessLife = this.priestessLife;
  let priestessPercentageLife : number = this.priestessLife * 100 / this.fullPriestessLife;
  //warrior HP
  let fullWarriorLife = this.fullWarriorLife;
  let warriorLife = this.warriorLife ;
  let warriorPercentageLife : number = this.warriorLife * 100 / this.fullWarriorLife;
  //monster1 HP
  let fullMonster1Life = this.fullMonster1Life;
  let monster1Life = this.monster1Life ;
  let monster1PercentageLife : number = this.monster1Life * 100 / this.fullMonster1Life;
  //monster2 HP
  let fullMonster2Life = this.fullMonster2Life;
  let monster2Life = this.monster2Life ;
  let monster2PercentageLife : number = this.monster2Life * 100 / this.fullMonster2Life;

      let warHP = document.getElementsByClassName('warHPBar')[0] as HTMLElement;
      let warHPChild = warHP.childNodes[0] as HTMLElement;
      warHPChild.style.width = `${warriorPercentageLife}%`;

      if(document.getElementsByClassName('monster1HPBar')[0]){
        let monsterHP = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
        let monsterHPChild = monsterHP.childNodes[0] as HTMLElement;
        monsterHPChild.style.width = `${monster1PercentageLife}%`;
      }

      if(document.getElementsByClassName('monster2HPBar')[0]){
        let monster2HP = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
        let monster2HPChild = monster2HP.childNodes[0] as HTMLElement;
        monster2HPChild.style.width = `${monster2PercentageLife}%`;
      }
  }
  
  //ENERGY SYSTEM (the rest of it is in the movement system)
    energy = 10;

  //SPELL SYSTEM
  castRight;
  castRight2;
  castRight3;
  castLeft;
  castLeft2;
  castLeft3;
  castDown;
  castDown2;
  castDown3;
  castUp;
  castUp2;
  castUp3;
  castDiagonalUpRight;
  castDiagonalDownRight;
  castDiagonalUpLeft;
  castDiagonalDownLeft;

  h1;
  h2;
  h3;
  h4;
  h5;
  h6;
  h7;
  h8;
  h9;
  h10;
  h11;
  h12;
  h13;
  h14;
  h15;
  h16;
  h17;
  h18;
  h19;
  h20;
  h21;
  h22;
  h23;
  h24;

  hArray = [this.h1,
    this.h2,
    this.h3,
    this.h4,
    this.h5,
    this.h6,
    this.h7,
    this.h8,
    this.h9,
    this.h10,
    this.h11,
    this.h12,
    this.h13,
    this.h14,
    this.h15,
    this.h16,
    this.h17,
    this.h18,
    this.h19,
    this.h20,
    this.h21,
    this.h22,
    this.h23,
    this.h24
  ]

    healLocked : boolean = true;

    coordinatesArray;

    currentResetTileCharacter;

  resetTiles(){
    if(this.currentResetTileCharacter == 'druid'){
      for(let i=0;i<17;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'mage'){
      for(let i=0;i<24;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'mercenary'){
      for(let i=0;i<8;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'necromancer'){
      for(let i=0;i<4;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'peasant'){
      for(let i=0;i<16;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'priestess'){
      for(let i=0;i<24;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }else if(this.currentResetTileCharacter == 'warrior'){
      for(let i=0;i<8;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
    }
  }

  xPos;
  yPos;
  moveRight;
  moveRight2;
  moveRight3;
  moveRight4;
  moveLeft;
  moveLeft2;
  moveLeft3;
  moveLeft4;
  moveDown;
  moveDown2;
  moveDown3;
  moveDown4;
  moveUp;
  moveUp2;
  moveUp3;
  moveUp4;

  heal(position){
    if(this.energy >= 10 && this.healLocked == false){
      let healingTarget = position.childNodes[0].className.replace(/ .*/,'') + 'Life';
      let fullHealingTarget = 'full' + position.childNodes[0].className.replace(/ .*/,'').charAt(0).toUpperCase() + position.childNodes[0].className.replace(/ .*/,'').slice(1) +'Life';       

      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("HEALED 10!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      position.style.color = "Green";      
      position.appendChild(willAppendToTarget);      
      setTimeout(()=>{
        position.removeChild(willAppendToTarget);
      },500);   

        let maxOutHP = this[healingTarget];
        let maxOutHP2 = maxOutHP += 10;
          let healNumber = maxOutHP2 - this[fullHealingTarget];
          if(maxOutHP2 > this[fullHealingTarget] && this[healingTarget] != 0){
            let specificHealValue = 10 - healNumber;
            this[healingTarget] += specificHealValue;
          }else if(this[healingTarget] != 0){
            this[healingTarget] += 10;
          }

      for(let i=0;i<17;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('healed');
        this.energy -= 10;
        let healSound = new Audio("./assets/druidHealEffect.mp3");
        healSound.play();
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  castHeal(element){
    if(this.energy >= 10 && this.druidLife != 0){
    this.currentResetTileCharacter = 'druid';
    this.healLocked = false;

    let currentPosition = element.parentElement.className;
    let currentElement = element.className.replace(/ .*/,'');
    this.xPos = currentPosition.charAt(0);
    this.yPos = currentPosition.charAt(2);
    this.xPos = Number(this.xPos);
    this.yPos = Number(this.yPos);

    this.moveRight = this.xPos + 1;
    this.moveRight2 = this.xPos + 2;
    this.moveRight3 = this.xPos + 3;
    this.moveLeft = this.xPos - 1;
    this.moveLeft2 = this.xPos - 2;
    this.moveLeft3 = this.xPos - 3;
    this.moveDown = this.yPos + 1;
    this.moveDown2 = this.yPos + 2;
    this.moveDown3 = this.yPos + 3;
    this.moveUp = this.yPos - 1;
    this.moveUp2 = this.yPos - 2;
    this.moveUp3 = this.yPos - 3;

    this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
    `${this.moveRight2}_${this.yPos}`,
    `${this.moveRight3}_${this.yPos}`,

    `${this.moveLeft}_${this.yPos}`,
    `${this.moveLeft2}_${this.yPos}`,
    `${this.moveLeft3}_${this.yPos}`,

    `${this.xPos}_${this.moveDown}`,
    `${this.xPos}_${this.moveDown2}`,
    `${this.xPos}_${this.moveDown3}`,

    `${this.xPos}_${this.moveUp}`,
    `${this.xPos}_${this.moveUp2}`,
    `${this.xPos}_${this.moveUp3}`,

    `${this.moveRight}_${this.moveDown}`,
    `${this.moveLeft}_${this.moveDown}`,
    `${this.moveLeft}_${this.moveUp}`,
    `${this.moveRight}_${this.moveUp}`]

    for(let i=0; i < 17; i++){
      if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
        this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
        this.hArray[i].style.backgroundColor = "green";
        if(this.characterClass == 'druid' && this.energy >= 10){
        if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
          this.hArray[i].childNodes[0].onclick = () =>{
            if(currentElement == 'druid'){
            if(this.energy >= 10){
            this.heal(this.hArray[i]);
            currentElement = 'resetted';
            }
          }
          }
        }else{
          this.hArray[i].onclick = () => {
            if(this.energy >= 10){
              if(this.characterClass == 'druid' && this.healLocked == false){
            console.log("please select a character"); // WORK ON LATER!!!!
              }                                
            }
          }
      }
      }
      }
    }
  }

  }

  fireLocked:boolean=false;

  fireball(position){
    if(this.energy >= 15 && this.fireLocked == false){
      let fireTarget = position.childNodes[0].className.replace(/ .*/,'')+'Life';  
      
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("20 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      position.style.color = "red";      
      position.appendChild(willAppendToTarget);      
      setTimeout(()=>{
        position.removeChild(willAppendToTarget);
      },500);   
               
      let maxOutHP = this[fireTarget];
        let maxOutHP2 = maxOutHP -= 20;
          if(maxOutHP2 <= 0 ){
            this[fireTarget] = 0 ;
            position.removeChild(position.childNodes[0]);
          }else{
            this[fireTarget] -= 20;
          }

      for(let i=0;i<17;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Fireblasted!');
        this.energy -=15;
        this.getMonstersAtStartOfGame();
        this.checkIfWon();
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  castFireball(element){
    if(this.energy >= 15 && this.mageLife != 0){
      this.currentResetTileCharacter = 'mage';
      this.fireLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveRight2 = this.xPos + 2;
      this.moveRight3 = this.xPos + 3;
      this.moveLeft = this.xPos - 1;
      this.moveLeft2 = this.xPos - 2;
      this.moveLeft3 = this.xPos - 3;
      this.moveDown = this.yPos + 1;
      this.moveDown2 = this.yPos + 2;
      this.moveDown3 = this.yPos + 3;
      this.moveUp = this.yPos - 1;
      this.moveUp2 = this.yPos - 2;
      this.moveUp3 = this.yPos - 3;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
      `${this.moveRight2}_${this.yPos}`,
      `${this.moveRight3}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
      `${this.moveLeft2}_${this.yPos}`,
      `${this.moveLeft3}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
      `${this.xPos}_${this.moveDown2}`,
      `${this.xPos}_${this.moveDown3}`,
  
      `${this.xPos}_${this.moveUp}`,
      `${this.xPos}_${this.moveUp2}`,
      `${this.xPos}_${this.moveUp3}`,
  
      `${this.moveRight}_${this.moveDown}`,
      `${this.moveRight2}_${this.moveDown}`,
      `${this.moveRight}_${this.moveDown2}`,
      `${this.moveLeft}_${this.moveDown}`,
      `${this.moveLeft2}_${this.moveDown}`,
      `${this.moveLeft}_${this.moveDown2}`,
      `${this.moveLeft}_${this.moveUp}`,
      `${this.moveLeft2}_${this.moveUp}`,
      `${this.moveLeft}_${this.moveUp2}`,
      `${this.moveRight}_${this.moveUp}`,
      `${this.moveRight2}_${this.moveUp}`,
      `${this.moveRight}_${this.moveUp2}`
    ]
  
      for(let i=0; i < 24; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(219, 51, 17)";
          if(this.characterClass == 'mage' && this.energy >= 15){
          if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].childNodes[0].onclick = () =>{
              if(currentElement == 'mage'){
              if(this.energy >= 15){
              this.fireball(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].onclick = () => {
              if(this.energy >= 15){
                if(this.characterClass == 'mage' && this.fireLocked == false){
              console.log("please select a character"); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }

  slashLocked:boolean=false;

  slash(position){
    if(this.energy >= 5 && this.slashLocked == false){
      let slashTarget = position.childNodes[0].className.replace(/ .*/,'')+'Life';  

      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("6 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      position.style.color = "red";      
      position.appendChild(willAppendToTarget);      
      setTimeout(()=>{
        position.removeChild(willAppendToTarget);
      },500);   
                  
      let maxOutHP = this[slashTarget];
        let maxOutHP2 = maxOutHP -= 6;
          if(maxOutHP2 <= 0 ){
            this[slashTarget] = 0;
            position.removeChild(position.childNodes[0]);
          }else{
            this[slashTarget] -= 6;
          }

      for(let i=0;i<8;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Slashed!');
        this.energy -= 5;
        this.getMonstersAtStartOfGame();
        this.checkIfWon();
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  castSlash(element){
    if(this.energy >= 5 && this.mercenaryLife != 0){
      this.currentResetTileCharacter = 'mercenary';
      this.slashLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveLeft = this.xPos - 1;
      this.moveDown = this.yPos + 1;
      this.moveUp = this.yPos - 1;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
  
      `${this.xPos}_${this.moveUp}`,
  
      `${this.moveRight}_${this.moveDown}`,
      `${this.moveLeft}_${this.moveDown}`,
      `${this.moveLeft}_${this.moveUp}`,
      `${this.moveRight}_${this.moveUp}`,
    ]
  
      for(let i=0; i < 8; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(241, 244, 53)";
          if(this.characterClass == 'mercenary' && this.energy >= 5){
          if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].childNodes[0].onclick = () =>{
              if(currentElement == 'mercenary'){
              if(this.energy >= 5){
              this.slash(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].onclick = () => {
              if(this.energy >= 5){
                if(this.characterClass == 'mercenary' && this.slashLocked == false){
              console.log("please select a character"); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }

  summonLocked:boolean=false;
  
  skeleton(position){
    if(this.energy >= 20 && this.summonLocked == false){
      //let healingTarget = position.childNodes[0].className.replace(/ .*/,'');         // NEED TO WORK ON WHEN LIFE SYSTEM INTEGRATED
                                                                                        //COMING SOON
      for(let i=0;i<4;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Summoned skeleton!');
        this.energy -= 20;
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  castSummonSkeleton(element){
    if(this.energy >= 20 && this.necromancerLife != 0){
      this.currentResetTileCharacter = 'necromancer';
      this.summonLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveLeft = this.xPos - 1;
      this.moveDown = this.yPos + 1;
      this.moveUp = this.yPos - 1;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
  
      `${this.xPos}_${this.moveUp}`,
      ]
  
      for(let i=0; i < 4; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(145, 8, 136)";
          if(this.characterClass == 'necromancer' && this.energy >= 15){
          if(!this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].onclick = () =>{
              if(currentElement == 'necromancer'){
              if(this.energy >= 20){
              this.skeleton(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].childNodes[0].onclick = () => {
              if(this.energy >= 20){
                if(this.characterClass == 'necromancer' && this.summonLocked == false){
              console.log("Cannot summon skeleton on top of a character."); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }

  rock(position){
    if(this.energy >= 5 && this.rockLocked == false){
      let rockTarget = position.childNodes[0].className.replace(/ .*/,'')+'Life';      
      
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("5 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      position.style.color = "red";      
      position.appendChild(willAppendToTarget);      
      setTimeout(()=>{
        position.removeChild(willAppendToTarget);
      },500);   
                        
      let maxOutHP = this[rockTarget];
        let maxOutHP2 = maxOutHP -= 5;
          if(maxOutHP2 <= 0 ){
            this[rockTarget] = 0;
            position.removeChild(position.childNodes[0]);
          }else{
            this[rockTarget] -= 5;
          }

      for(let i=0;i<16;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Threw Rock!');
        this.energy -= 5;
        this.getMonstersAtStartOfGame();
        this.checkIfWon();   
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
      }
  }

  rockLocked:boolean = false;
  castThrowRock(element){
    if(this.energy >= 5 && this.peasantLife != 0){
      this.currentResetTileCharacter = 'peasant';
      this.rockLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveRight2 = this.xPos + 2;
      this.moveRight3 = this.xPos + 3;
      this.moveRight4 = this.xPos + 4;
      this.moveLeft = this.xPos - 1;
      this.moveLeft2 = this.xPos - 2;
      this.moveLeft3 = this.xPos - 3;
      this.moveLeft4 = this.xPos - 4;
      this.moveDown = this.yPos + 1;
      this.moveDown2 = this.yPos + 2;
      this.moveDown3 = this.yPos + 3;
      this.moveDown4 = this.yPos + 4;
      this.moveUp = this.yPos - 1;
      this.moveUp2 = this.yPos - 2;
      this.moveUp3 = this.yPos - 3;
      this.moveUp4 = this.yPos - 4;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
      `${this.moveRight2}_${this.yPos}`,
      `${this.moveRight3}_${this.yPos}`,
      `${this.moveRight4}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
      `${this.moveLeft2}_${this.yPos}`,
      `${this.moveLeft3}_${this.yPos}`,
      `${this.moveLeft4}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
      `${this.xPos}_${this.moveDown2}`,
      `${this.xPos}_${this.moveDown3}`,
      `${this.xPos}_${this.moveDown4}`,
  
      `${this.xPos}_${this.moveUp}`,
      `${this.xPos}_${this.moveUp2}`,
      `${this.xPos}_${this.moveUp3}`,
      `${this.xPos}_${this.moveUp4}`,
      ]
  
      for(let i=0; i < 16; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(119, 78, 53)";
          if(this.characterClass == 'peasant' && this.energy >= 5){
          if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].onclick = () =>{
              if(currentElement == 'peasant'){
              if(this.energy >= 5){
              this.rock(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].onclick = () => {
              if(this.energy >= 5){
                if(this.characterClass == 'peasant' && this.rockLocked == false){
              console.log("Select an enemy you'd like to throw a rock on."); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }

  divineShield(position){
    if(this.energy >= 5 && this.shieldLocked == false){                                 //COMING SOON!

      for(let i=0;i<24;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Shielded!');
        this.energy -= 5;
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  shieldLocked:boolean=false;

  castDivineShield(element){
    if(this.energy >= 5 && this.priestessLife != 0){
      this.currentResetTileCharacter = 'priestess';
      this.shieldLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveRight2 = this.xPos + 2;
      this.moveRight3 = this.xPos + 3;
      this.moveLeft = this.xPos - 1;
      this.moveLeft2 = this.xPos - 2;
      this.moveLeft3 = this.xPos - 3;
      this.moveDown = this.yPos + 1;
      this.moveDown2 = this.yPos + 2;
      this.moveDown3 = this.yPos + 3;
      this.moveUp = this.yPos - 1;
      this.moveUp2 = this.yPos - 2;
      this.moveUp3 = this.yPos - 3;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
      `${this.moveRight2}_${this.yPos}`,
      `${this.moveRight3}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
      `${this.moveLeft2}_${this.yPos}`,
      `${this.moveLeft3}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
      `${this.xPos}_${this.moveDown2}`,
      `${this.xPos}_${this.moveDown3}`,
  
      `${this.xPos}_${this.moveUp}`,
      `${this.xPos}_${this.moveUp2}`,
      `${this.xPos}_${this.moveUp3}`,
  
      `${this.moveRight}_${this.moveDown}`,
      `${this.moveRight2}_${this.moveDown}`,
      `${this.moveRight}_${this.moveDown2}`,
      `${this.moveLeft}_${this.moveDown}`,
      `${this.moveLeft2}_${this.moveDown}`,
      `${this.moveLeft}_${this.moveDown2}`,
      `${this.moveLeft}_${this.moveUp}`,
      `${this.moveLeft2}_${this.moveUp}`,
      `${this.moveLeft}_${this.moveUp2}`,
      `${this.moveRight}_${this.moveUp}`,
      `${this.moveRight2}_${this.moveUp}`,
      `${this.moveRight}_${this.moveUp2}`
    ]
  
      for(let i=0; i < 24; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(252, 255, 188)";
          if(this.characterClass == 'priestess' && this.energy >= 5){
          if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].childNodes[0].onclick = () =>{
              if(currentElement == 'priestess'){
              if(this.energy >= 15){
              this.divineShield(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].onclick = () => {
              if(this.energy >= 5){
                if(this.characterClass == 'priestess' && this.shieldLocked == false){
              console.log("please select a character"); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }
  spear(position){
    if(this.energy >= 5 && this.spearLocked == false){
      let spearTarget = position.childNodes[0].className.replace(/ .*/,'')+'Life';   
      
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("8 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      position.style.color = "red";      
      position.appendChild(willAppendToTarget);      
      setTimeout(()=>{
        position.removeChild(willAppendToTarget);
      },500);   
                           
      let maxOutHP = this[spearTarget];
        let maxOutHP2 = maxOutHP -= 8;
          if(maxOutHP2 <= 0 ){
            this[spearTarget] = 0;
            position.removeChild(position.childNodes[0]);
          }else{
            this[spearTarget] -= 8;
          }
      for(let i=0;i<8;i++){
        if(this.hArray[i]){
        this.hArray[i].style.backgroundColor = 'transparent';
        }
      }
        console.log('Stabbed!');
        this.energy -= 5;
        let stabSound = new Audio("./assets/warriorSlashEffect.mp3");
        stabSound.play();
        this.getMonstersAtStartOfGame();
        this.checkIfWon();
        let energyPercentage = this.energy * 100 / this.incrementCounter;
        let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
        energyBarPercentage.style.width = `${energyPercentage}%`;
        if(document.getElementsByClassName('monster1')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }else if(document.getElementsByClassName('monster1HPBar')[0]){
          let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
        if(document.getElementsByClassName('monster2')[0]){
          this.addHP();
          let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
          console.log('works')
        }else if(document.getElementsByClassName('monster2HPBar')[0]){
          let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
          newNode.parentElement.removeChild(newNode);
        }
    }
  }

  spearLocked:boolean=false;

  castSpearStab(element){
    if(this.energy >= 5  && this.warriorLife != 0){
      this.currentResetTileCharacter = 'warrior';
      this.spearLocked = false;
  
      let currentPosition = element.parentElement.className;
      let currentElement = element.className.replace(/ .*/,'');
      this.xPos = currentPosition.charAt(0);
      this.yPos = currentPosition.charAt(2);
      this.xPos = Number(this.xPos);
      this.yPos = Number(this.yPos);
  
      this.moveRight = this.xPos + 1;
      this.moveRight2 = this.xPos + 2;
      this.moveLeft = this.xPos - 1;
      this.moveLeft2 = this.xPos - 2;
      this.moveDown = this.yPos + 1;
      this.moveDown2 = this.yPos + 2;
      this.moveUp = this.yPos - 1;
      this.moveUp2 = this.yPos - 2;
  
      this.coordinatesArray = [`${this.moveRight}_${this.yPos}`,
      `${this.moveRight2}_${this.yPos}`,
  
      `${this.moveLeft}_${this.yPos}`,
      `${this.moveLeft2}_${this.yPos}`,
  
      `${this.xPos}_${this.moveDown}`,
      `${this.xPos}_${this.moveDown2}`,
  
      `${this.xPos}_${this.moveUp}`,
      `${this.xPos}_${this.moveUp2}`,
      ]
  
      for(let i=0; i < 8; i++){
        if(document.getElementsByClassName(this.coordinatesArray[i]).length > 0){
          this.hArray[i] = document.getElementsByClassName(this.coordinatesArray[i])[0] as HTMLElement;
          this.hArray[i].style.backgroundColor = "rgb(209, 43, 52)";
          if(this.characterClass == 'warrior' && this.energy >= 5){
          if(this.hArray[i].hasChildNodes() && element.parentElement.className == currentPosition){
            this.hArray[i].onclick = () =>{
              if(currentElement == 'warrior'){
              if(this.energy >= 5){
              this.spear(this.hArray[i]);
              currentElement = 'resetted';
              }
            }
            }
          }else{
            this.hArray[i].onclick = () => {
              if(this.energy >= 5){
                if(this.characterClass == 'warrior' && this.spearLocked == false){
              console.log("Select an enemy."); // WORK ON LATER!!!!
                }                                
              }
            }
        }
        }
        }
      }
    }
  }

  //VICTORY
  defeatAlert= false;
  checkIfDefeated(){
    if(this.arrayOfClasses.length == 0){
      if(document.getElementsByClassName('levelOneF')){
        this.messageEvent.emit(this.levelOneCompletedF);
    this.defeatAlert = true;
    }
  }
}
victoryAlert = false;
victoryDungeonAlert = false;
  checkIfWon(){
    if(this.arrayOfMonsters.length == 0){

    if(document.getElementsByClassName('levelOneF')){
      this.levelOneCompletedF = true;
      this.messageEvent.emit(this.levelOneCompletedF);
    this.victoryAlert = true;
  }
  }
}
  //Level system (ng Ifs for HTML5)

  //forest dungeon
  levelOneCompletedF : boolean = false;

  //AI SYSTEM FOR TEST LEVEL
  globalTarget;
  elementOfTarget;
  positionOfTarget;
  positionOfMonster;
  targetX;
  targetY;
  monsterX;
  monsterY;
  moveY1;
  moveY2;
  moveY3;
  moveY4;
  moveX1;
  moveX2;
  moveX3;
  moveX4;
  monsterCoor1;
  monsterCoor2;
  monsterCoor3;
  monsterCoor4;
  monsterMovementHistory;
  toggle:boolean=true;
  distancesX = [];
  distancesY = [];
  distances = [];
  index;
  positionString;
  globalTarget1;
  arrayOfClasses = [];
  arrayOfMonsters = [];
  toggle1:boolean = false;

  getClassesAtStartOfGame(){
    this.arrayOfClasses = [];
    for(let i=0; i < 7;i++){
      if(document.getElementsByClassName('target')[i]){
        this.arrayOfClasses.push(document.getElementsByClassName('target')[i].className.replace(/ .*/,'') );
      }
  }
}
  getMonstersAtStartOfGame(){
    this.arrayOfMonsters = [];
    for(let i=0; i < 7;i++){
      if(document.getElementsByClassName('monster')[i]){
        this.arrayOfMonsters.push(document.getElementsByClassName('monster')[i].className.replace(/ .*/,'') );
      }
    }
  }

  selectTarget(monster1,monster2){
    let monster1Select = document.getElementsByClassName('monster1')[0] as HTMLElement;
    let monster2Select = document.getElementsByClassName('monster2')[0] as HTMLElement;
    if(monster1Select && monster1Select.style.display != "none"){
    this.positionOfMonster = monster1.parentElement.className;
    this.monsterX = Number(this.positionOfMonster.charAt(0));
    this.monsterY = Number(this.positionOfMonster.charAt(2));
    this.distancesX = [];
    this.distancesY = [];
    this.distances = [];
      
      for(let i=0; i < 7; i++){
        if(document.getElementsByClassName(this.arrayOfClasses[i])[0]){
        this.distancesX.push(Number(document.getElementsByClassName(this.arrayOfClasses[i])[0].parentElement.className.charAt(0)));
        this.distancesY.push(Number(document.getElementsByClassName(this.arrayOfClasses[i])[0].parentElement.className.charAt(2)));
        this.distances.push(Math.sqrt( ( (this.monsterX - this.distancesX[i])*(this.monsterX - this.distancesX[i]) ) + ( (this.monsterY - this.distancesY[i])*(this.monsterY - this.distancesY[i]) ) ) );
        }
      }
      this.index = this.distances.indexOf(Math.min(...this.distances));
      this.positionString = `${this.distancesX[this.index]}_${this.distancesY[this.index]}`;
      this.globalTarget1 = document.getElementsByClassName(this.positionString)[0].childNodes[0];
      this.globalTarget = this.globalTarget1.className.replace(/ .*/,'');

      console.log(this.globalTarget);
    this.elementOfTarget = document.getElementsByClassName(this.globalTarget)[0] as HTMLElement;
    this.positionOfTarget = this.elementOfTarget.parentElement.className;

    this.targetX = this.positionOfTarget.charAt(0);
    this.targetY = this.positionOfTarget.charAt(2);


    this.moveX1 = this.monsterX;
    this.moveY1 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(2)) + 1;

    this.moveX2 = this.monsterX;
    this.moveY2 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(2)) - 1;

    this.moveY3 = this.monsterY;
    this.moveX3 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(0)) + 1;

    this.moveY4 = this.monsterY;
    this.moveX4 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(0)) - 1;

    this.monsterCoor1 = `${this.moveX1}_${this.moveY1}`;
    this.monsterCoor2 = `${this.moveX2}_${this.moveY2}`;
    this.monsterCoor3 = `${this.moveX3}_${this.moveY3}`;
    this.monsterCoor4 = `${this.moveX4}_${this.moveY4}`;

    if(document.getElementsByClassName(this.monsterCoor1)[0] && this.targetY > this.monsterY && !document.getElementsByClassName(this.monsterCoor1)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor1){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor1)[0].appendChild(monster1);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor1;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor2)[0] && this.targetY < this.monsterY && !document.getElementsByClassName(this.monsterCoor2)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor2){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor2)[0].appendChild(monster1);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor2;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor3)[0] && this.targetX > this.monsterX && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor3){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster1);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor3;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor4)[0] && this.targetX < this.monsterX && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor4){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster1);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor4;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(!document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor3)[0] && (!document.getElementsByClassName(this.monsterCoor4)[0] || (document.getElementsByClassName(this.monsterCoor4)[0] && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes()){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster1);
    }else if(!document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor4)[0] && (!document.getElementsByClassName(this.monsterCoor3)[0] || (document.getElementsByClassName(this.monsterCoor3)[0] && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes()){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster1);
    }else if(!document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor3)[0] && (!document.getElementsByClassName(this.monsterCoor4)[0] || (document.getElementsByClassName(this.monsterCoor4)[0] && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes()){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster1);
    }else if(!document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor4)[0] && (!document.getElementsByClassName(this.monsterCoor3)[0] || (document.getElementsByClassName(this.monsterCoor3)[0] && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes()){
      document.getElementsByClassName('monster1')[0].parentElement.removeChild(document.getElementsByClassName('monster1')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster1);
    }
    this.positionOfMonster = monster1.parentElement.className;
    this.monsterX = Number(this.positionOfMonster.charAt(0));
    this.monsterY = Number(this.positionOfMonster.charAt(2));
    
    this.elementOfTarget = document.getElementsByClassName(this.globalTarget)[0] as HTMLElement;
    this.positionOfTarget = this.elementOfTarget.parentElement.className;

    this.targetX = this.positionOfTarget.charAt(0);
    this.targetY = this.positionOfTarget.charAt(2);


    this.moveX1 = this.monsterX;
    this.moveY1 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(2)) + 1;

    this.moveX2 = this.monsterX;
    this.moveY2 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(2)) - 1;

    this.moveY3 = this.monsterY;
    this.moveX3 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(0)) + 1;

    this.moveY4 = this.monsterY;
    this.moveX4 = Number(document.getElementsByClassName('monster1')[0].parentElement.className.charAt(0)) - 1;

    this.monsterCoor1 = `${this.moveX1}_${this.moveY1}`;
    this.monsterCoor2 = `${this.moveX2}_${this.moveY2}`;
    this.monsterCoor3 = `${this.moveX3}_${this.moveY3}`;
    this.monsterCoor4 = `${this.moveX4}_${this.moveY4}`;
    
    let checkEnemyOrAlly1;
    let checkEnemyOrAlly2;
    let checkEnemyOrAlly3;
    let checkEnemyOrAlly4;

    if(document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0]){
      checkEnemyOrAlly1 = document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0]){
      checkEnemyOrAlly2 = document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor3)[0] && document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0]){
      checkEnemyOrAlly3 = document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor4)[0] && document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0]){
      checkEnemyOrAlly4 = document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0] as HTMLElement;
    }

    if(document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor1)[0].hasChildNodes() && checkEnemyOrAlly1.className.slice(12,18) == "target" ){
      let monsterTarget1 = document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0] as HTMLElement;
      let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life'; 
      let DMGwarning = document.getElementsByClassName(this.monsterCoor1)[0] as HTMLElement;  
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("15 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      DMGwarning.style.color = "red";      
      DMGwarning.appendChild(willAppendToTarget);  
      let roarSound = new Audio("./assets/monsterRoar.mp3");
        roarSound.play();    
      setTimeout(()=>{
        DMGwarning.removeChild(willAppendToTarget);
        if(!monsterTarget1){
          DMGwarning.removeChild(willAppendToTarget);
        }
      },500);   
      let maxOutHP = this[monsterTarget];
        let maxOutHP2 = maxOutHP -= 15;
          if(maxOutHP2 < 0 ){
            this[monsterTarget] = 0;
            monsterTarget1.parentElement.removeChild(monsterTarget1);
          }else{
            this[monsterTarget] -= 15;
          }
      this.getClassesAtStartOfGame();
      this.checkIfDefeated();
    }else if(document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor2)[0].hasChildNodes() && checkEnemyOrAlly2.className.slice(12,18) == "target" ){
      let monsterTarget1 = document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0] as HTMLElement;
      let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';    
      let DMGwarning = document.getElementsByClassName(this.monsterCoor2)[0] as HTMLElement;  
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("15 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      DMGwarning.style.color = "red";      
      DMGwarning.appendChild(willAppendToTarget);  
      let roarSound = new Audio("./assets/monsterRoar.mp3");
        roarSound.play();    
      setTimeout(()=>{
        DMGwarning.removeChild(willAppendToTarget);
        if(!monsterTarget1){
        DMGwarning.removeChild(willAppendToTarget);
        }
      },500);              
      let maxOutHP = this[monsterTarget];
        let maxOutHP2 = maxOutHP -= 15;
          if(maxOutHP2 < 0 ){
            this[monsterTarget] = 0;
            monsterTarget1.parentElement.removeChild(monsterTarget1);
          }else{
            this[monsterTarget] -= 15;
          }
          this.getClassesAtStartOfGame();
          this.checkIfDefeated();
        }else if(document.getElementsByClassName(this.monsterCoor3)[0] && document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes() && checkEnemyOrAlly3.className.slice(12,18) == "target" ){
          let monsterTarget1 = document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0] as HTMLElement;
          let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';      
          let DMGwarning = document.getElementsByClassName(this.monsterCoor3)[0] as HTMLElement;  
          let node = document.createElement("B");                 // Create a <b> node
          let textnode = document.createTextNode("15 DMG!");         // Create a text node
          let willAppendToTarget = node.appendChild(textnode);
          DMGwarning.style.color = "red";      
          DMGwarning.appendChild(willAppendToTarget); 
          let roarSound = new Audio("./assets/monsterRoar.mp3");
        roarSound.play();     
          setTimeout(()=>{
            DMGwarning.removeChild(willAppendToTarget);
            if(!monsterTarget1){
              DMGwarning.removeChild(willAppendToTarget);
            }
          },500);          
          let maxOutHP = this[monsterTarget];
            let maxOutHP2 = maxOutHP -= 15;
              if(maxOutHP2 < 0 ){
                this[monsterTarget] = 0;
                monsterTarget1.parentElement.removeChild(monsterTarget1);
              }else{
                this[monsterTarget] -= 15;
              }
              this.getClassesAtStartOfGame();
              this.checkIfDefeated();
            }else if(document.getElementsByClassName(this.monsterCoor4)[0] && document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes() && checkEnemyOrAlly4.className.slice(12,18) == "target" ){
              let monsterTarget1 = document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0] as HTMLElement;
              let DMGwarning = document.getElementsByClassName(this.monsterCoor4)[0] as HTMLElement;
              let node = document.createElement("B");                 // Create a <b> node
              let textnode = document.createTextNode("15 DMG!");         // Create a text node
              let willAppendToTarget = node.appendChild(textnode);
              DMGwarning.style.color = "red";      
              DMGwarning.appendChild(willAppendToTarget); 
              let roarSound = new Audio("./assets/monsterRoar.mp3");
        roarSound.play(); 
              setTimeout(()=>{
                DMGwarning.removeChild(willAppendToTarget);
                if(!monsterTarget1){
                DMGwarning.removeChild(willAppendToTarget);
                }
              },500); 
              let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';                 
              let maxOutHP = this[monsterTarget];
                let maxOutHP2 = maxOutHP -= 15;
                  if(maxOutHP2 < 0 ){
                    this[monsterTarget] = 0;
                    monsterTarget1.parentElement.removeChild(monsterTarget1);
                  }else{
                    this[monsterTarget] -= 15;
                  }
                  this.getClassesAtStartOfGame();
                  this.checkIfDefeated();
                }

  }
  if(monster2Select && monster2Select.style.display != "none"){
    this.positionOfMonster = monster2.parentElement.className;
    this.monsterX = Number(this.positionOfMonster.charAt(0));
    this.monsterY = Number(this.positionOfMonster.charAt(2));
    this.distancesX = [];
    this.distancesY = [];
    this.distances = [];
      
      for(let i=0; i < 7; i++){
        if(document.getElementsByClassName(this.arrayOfClasses[i])[0]){
        this.distancesX.push(Number(document.getElementsByClassName(this.arrayOfClasses[i])[0].parentElement.className.charAt(0)));
        this.distancesY.push(Number(document.getElementsByClassName(this.arrayOfClasses[i])[0].parentElement.className.charAt(2)));
        this.distances.push(Math.sqrt( ( (this.monsterX - this.distancesX[i])*(this.monsterX - this.distancesX[i]) ) + ( (this.monsterY - this.distancesY[i])*(this.monsterY - this.distancesY[i]) ) ) );
        }
      }
      this.index = this.distances.indexOf(Math.min(...this.distances));
      this.positionString = `${this.distancesX[this.index]}_${this.distancesY[this.index]}`;
      this.globalTarget1 = document.getElementsByClassName(this.positionString)[0].childNodes[0];
      this.globalTarget = this.globalTarget1.className.replace(/ .*/,'');

      console.log(this.globalTarget);
    this.elementOfTarget = document.getElementsByClassName(this.globalTarget)[0] as HTMLElement;
    this.positionOfTarget = this.elementOfTarget.parentElement.className;

    this.targetX = this.positionOfTarget.charAt(0);
    this.targetY = this.positionOfTarget.charAt(2);


    this.moveX1 = this.monsterX;
    this.moveY1 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(2)) + 1;

    this.moveX2 = this.monsterX;
    this.moveY2 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(2)) - 1;

    this.moveY3 = this.monsterY;
    this.moveX3 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(0)) + 1;

    this.moveY4 = this.monsterY;
    this.moveX4 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(0)) - 1;

    this.monsterCoor1 = `${this.moveX1}_${this.moveY1}`;
    this.monsterCoor2 = `${this.moveX2}_${this.moveY2}`;
    this.monsterCoor3 = `${this.moveX3}_${this.moveY3}`;
    this.monsterCoor4 = `${this.moveX4}_${this.moveY4}`;

    if(document.getElementsByClassName(this.monsterCoor1)[0] && this.targetY > this.monsterY && !document.getElementsByClassName(this.monsterCoor1)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor1){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor1)[0].appendChild(monster2);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor1;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor2)[0] && this.targetY < this.monsterY && !document.getElementsByClassName(this.monsterCoor2)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor2){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor2)[0].appendChild(monster2);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor2;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor3)[0] && this.targetX > this.monsterX && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor3){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster2);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor3;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(document.getElementsByClassName(this.monsterCoor4)[0] && this.targetX < this.monsterX && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes() && this.monsterMovementHistory != this.monsterCoor4){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster2);
      if(this.toggle){
      this.monsterMovementHistory = this.monsterCoor4;
      this.toggle = false;
      }else{
        this.toggle = true;
      }
    }else if(!document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor3)[0] && (!document.getElementsByClassName(this.monsterCoor4)[0] || (document.getElementsByClassName(this.monsterCoor4)[0] && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes()){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster2);
    }else if(!document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor4)[0] && (!document.getElementsByClassName(this.monsterCoor3)[0] || (document.getElementsByClassName(this.monsterCoor3)[0] && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes()){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster2);
    }else if(!document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor3)[0] && (!document.getElementsByClassName(this.monsterCoor4)[0] || (document.getElementsByClassName(this.monsterCoor4)[0] && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes()){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor3)[0].appendChild(monster2);
    }else if(!document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor4)[0] && (!document.getElementsByClassName(this.monsterCoor3)[0] || (document.getElementsByClassName(this.monsterCoor3)[0] && !document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes())) && !document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes()){
      document.getElementsByClassName('monster2')[0].parentElement.removeChild(document.getElementsByClassName('monster2')[0]);
      document.getElementsByClassName(this.monsterCoor4)[0].appendChild(monster2);
    }
    this.positionOfMonster = monster2.parentElement.className;
    this.monsterX = Number(this.positionOfMonster.charAt(0));
    this.monsterY = Number(this.positionOfMonster.charAt(2));
    
    this.elementOfTarget = document.getElementsByClassName(this.globalTarget)[0] as HTMLElement;
    this.positionOfTarget = this.elementOfTarget.parentElement.className;

    this.targetX = this.positionOfTarget.charAt(0);
    this.targetY = this.positionOfTarget.charAt(2);


    this.moveX1 = this.monsterX;
    this.moveY1 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(2)) + 1;

    this.moveX2 = this.monsterX;
    this.moveY2 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(2)) - 1;

    this.moveY3 = this.monsterY;
    this.moveX3 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(0)) + 1;

    this.moveY4 = this.monsterY;
    this.moveX4 = Number(document.getElementsByClassName('monster2')[0].parentElement.className.charAt(0)) - 1;

    this.monsterCoor1 = `${this.moveX1}_${this.moveY1}`;
    this.monsterCoor2 = `${this.moveX2}_${this.moveY2}`;
    this.monsterCoor3 = `${this.moveX3}_${this.moveY3}`;
    this.monsterCoor4 = `${this.moveX4}_${this.moveY4}`;

    let checkEnemyOrAlly1;
    let checkEnemyOrAlly2;
    let checkEnemyOrAlly3;
    let checkEnemyOrAlly4;

    if(document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0]){
      checkEnemyOrAlly1 = document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0]){
      checkEnemyOrAlly2 = document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor3)[0] && document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0]){
      checkEnemyOrAlly3 = document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0] as HTMLElement;
    }
    if(document.getElementsByClassName(this.monsterCoor4)[0] && document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0]){
      checkEnemyOrAlly4 = document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0] as HTMLElement;
    }


    if(document.getElementsByClassName(this.monsterCoor1)[0] && document.getElementsByClassName(this.monsterCoor1)[0].hasChildNodes() && checkEnemyOrAlly1.className.slice(12,18) == "target" ){
      let monsterTarget1 = document.getElementsByClassName(this.monsterCoor1)[0].childNodes[0] as HTMLElement;
      console.log(monsterTarget1);
      let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life'; 
      let DMGwarning = document.getElementsByClassName(this.monsterCoor1)[0] as HTMLElement;  
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("15 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      DMGwarning.style.color = "red";      
      DMGwarning.appendChild(willAppendToTarget);  
      let spiderSound = new Audio("./assets/monsterSpider.mp3");
              spiderSound.play();       
      setTimeout(()=>{
        DMGwarning.removeChild(willAppendToTarget);
        if(!monsterTarget1){
        DMGwarning.removeChild(willAppendToTarget);
        }
      },500);   
      let maxOutHP = this[monsterTarget];
        let maxOutHP2 = maxOutHP -= 15;
          if(maxOutHP2 < 0 ){
            this[monsterTarget] = 0;
            monsterTarget1.parentElement.removeChild(monsterTarget1);
          }else{
            this[monsterTarget] -= 15;
          }
      this.getClassesAtStartOfGame();
      this.checkIfDefeated();
    }else if(document.getElementsByClassName(this.monsterCoor2)[0] && document.getElementsByClassName(this.monsterCoor2)[0].hasChildNodes() && checkEnemyOrAlly2.className.slice(12,18) == "target" ){
      let monsterTarget1 = document.getElementsByClassName(this.monsterCoor2)[0].childNodes[0] as HTMLElement;
      console.log(monsterTarget1);

      let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';    
      let DMGwarning = document.getElementsByClassName(this.monsterCoor2)[0] as HTMLElement;  
      let node = document.createElement("B");                 // Create a <b> node
      let textnode = document.createTextNode("15 DMG!");         // Create a text node
      let willAppendToTarget = node.appendChild(textnode);
      DMGwarning.style.color = "red";      
      DMGwarning.appendChild(willAppendToTarget); 
      let spiderSound = new Audio("./assets/monsterSpider.mp3");
              spiderSound.play();        
      setTimeout(()=>{
        DMGwarning.removeChild(willAppendToTarget);
        if(!monsterTarget1){
        DMGwarning.removeChild(willAppendToTarget);
        }
      },500);              
      let maxOutHP = this[monsterTarget];
        let maxOutHP2 = maxOutHP -= 15;
          if(maxOutHP2 < 0 ){
            this[monsterTarget] = 0;
            monsterTarget1.parentElement.removeChild(monsterTarget1);
          }else{
            this[monsterTarget] -= 15;
          }
          this.getClassesAtStartOfGame();
          this.checkIfDefeated();
        }else if(document.getElementsByClassName(this.monsterCoor3)[0] && document.getElementsByClassName(this.monsterCoor3)[0].hasChildNodes() && checkEnemyOrAlly3.className.slice(12,18) == "target" ){
          let monsterTarget1 = document.getElementsByClassName(this.monsterCoor3)[0].childNodes[0] as HTMLElement;
          console.log(monsterTarget1);

          let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';      
          let DMGwarning = document.getElementsByClassName(this.monsterCoor3)[0] as HTMLElement;  
          let node = document.createElement("B");                 // Create a <b> node
          let textnode = document.createTextNode("15 DMG!");         // Create a text node
          let willAppendToTarget = node.appendChild(textnode);
          DMGwarning.style.color = "red";      
          DMGwarning.appendChild(willAppendToTarget);  
          let spiderSound = new Audio("./assets/monsterSpider.mp3");
              spiderSound.play();       
          setTimeout(()=>{
            DMGwarning.removeChild(willAppendToTarget);
            if(!monsterTarget1){
            DMGwarning.removeChild(willAppendToTarget);
            }
          },500);          
          let maxOutHP = this[monsterTarget];
            let maxOutHP2 = maxOutHP -= 15;
              if(maxOutHP2 < 0 ){
                this[monsterTarget] = 0;
                monsterTarget1.parentElement.removeChild(monsterTarget1);
              }else{
                this[monsterTarget] -= 15;
              }
              this.getClassesAtStartOfGame();
              this.checkIfDefeated();
            }else if(document.getElementsByClassName(this.monsterCoor4)[0] && document.getElementsByClassName(this.monsterCoor4)[0].hasChildNodes() && checkEnemyOrAlly4.className.slice(12,18) == "target" ){
              let monsterTarget1 = document.getElementsByClassName(this.monsterCoor4)[0].childNodes[0] as HTMLElement;
              console.log(monsterTarget1);

              let DMGwarning = document.getElementsByClassName(this.monsterCoor4)[0] as HTMLElement;
              let node = document.createElement("B");                 // Create a <b> node
              let textnode = document.createTextNode("15 DMG!");         // Create a text node
              let willAppendToTarget = node.appendChild(textnode);
              DMGwarning.style.color = "red";      
              DMGwarning.appendChild(willAppendToTarget);   
              let spiderSound = new Audio("./assets/monsterSpider.mp3");
              spiderSound.play();      
              setTimeout(()=>{
                DMGwarning.removeChild(willAppendToTarget);
                if(!monsterTarget1){
                DMGwarning.removeChild(willAppendToTarget);
                }
              },500); 
              let monsterTarget = monsterTarget1.className.replace(/ .*/,'')+'Life';                 
              let maxOutHP = this[monsterTarget];
                let maxOutHP2 = maxOutHP -= 15;
                  if(maxOutHP2 < 0 ){
                    this[monsterTarget] = 0;
                    monsterTarget1.parentElement.removeChild(monsterTarget1);
                  }else{
                    this[monsterTarget] -= 15;
                  }
                  this.getClassesAtStartOfGame();
                  this.checkIfDefeated();
                }

  }
  if(document.getElementsByClassName('monster1')[0]){
    this.addHP();
    let referenceNode = document.getElementsByClassName('monster1')[0] as HTMLElement;
    let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }else if(document.getElementsByClassName('monster1HPBar')[0]){
    let newNode = document.getElementsByClassName('monster1HPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
  }
  if(document.getElementsByClassName('monster2')[0]){
    let referenceNode = document.getElementsByClassName('monster2')[0] as HTMLElement;
    let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }else if(document.getElementsByClassName('monster2HPBar')[0]){
    let newNode = document.getElementsByClassName('monster2HPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
  }
}

  DMGwarning;

  //MOVEMENT SYSTEM
  moved:boolean=false;

  incrementCounter:number = 10;

  endTurn(){
    this.moved = false;
    if(this.incrementCounter < 25){
    this.incrementCounter +=2.5;
    }
    this.energy = this.incrementCounter;
    let energyPercentage = this.energy * 100 / this.incrementCounter;
    let energyBarPercentage = document.getElementsByClassName('energyBar')[0].childNodes[0] as HTMLElement;
    energyBarPercentage.style.width = `${energyPercentage}%`;
  }
  movePlayed(){
    this.moved = true;
  }

  highlightedUpTile1;
  highlightedUpTile2;
  highlightedUpTile3;
  highlightedUpTile4;

  position ;

  resetMovement(position){
    if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
        this.highlightedUpTile1.style.backgroundColor = ""; 
        this.highlightedUpTile1 = 0;
      }
      this.moveDownCoordinates = 0;
      this.moveUpCoordinates = 0;
      this.moveLeftCoordinates = 0;
      this.moveRightCoordinates = 0;
    
    if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
        this.highlightedUpTile2.style.backgroundColor = ""; 
        this.highlightedUpTile2 = 0;
      }
      this.moveDownCoordinates = 0;
      this.moveUpCoordinates = 0;
      this.moveLeftCoordinates = 0;
      this.moveRightCoordinates = 0;
    
    if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined){
        this.highlightedUpTile3.style.backgroundColor = "";
        this.highlightedUpTile3 = 0;
      }
      this.moveDownCoordinates = 0;
      this.moveUpCoordinates = 0;
      this.moveLeftCoordinates = 0;
      this.moveRightCoordinates = 0;
    if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined){
        this.highlightedUpTile4.style.backgroundColor = "";
        this.highlightedUpTile4 = 0;
      }
      this.moveDownCoordinates = 0;
      this.moveUpCoordinates = 0;
      this.moveLeftCoordinates = 0;
      this.moveRightCoordinates = 0;
  }


  clicker1(position){
    if(!this.moved){
    this.movePlayed();
    position.parentElement.removeChild(position.parentElement.childNodes[0]);
    this.highlightedUpTile1.appendChild(position);
    this.resetMovement(position);
    let referenceNode = document.getElementsByClassName('warrior')[0] as HTMLElement;
    let newNode = document.getElementsByClassName('warHPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }
  clicker2(position){
    if(!this.moved){
    this.movePlayed();
    position.parentElement.removeChild(position.parentElement.childNodes[0]);
    this.highlightedUpTile2.appendChild(position);
    this.resetMovement(position);
    let referenceNode = document.getElementsByClassName('warrior')[0] as HTMLElement;
    let newNode = document.getElementsByClassName('warHPBar')[0] as HTMLElement;
    newNode.parentElement.removeChild(newNode);
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }
  clicker3(position){
    if(!this.moved){
      this.movePlayed();
      position.parentElement.removeChild(position.parentElement.childNodes[0]);
      this.highlightedUpTile3.appendChild(position);
      this.resetMovement(position);
      let referenceNode = document.getElementsByClassName('warrior')[0] as HTMLElement;
      let newNode = document.getElementsByClassName('warHPBar')[0] as HTMLElement;
      newNode.parentElement.removeChild(newNode);
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
  }
  clicker4(position){
    if(!this.moved){
      this.movePlayed();
      position.parentElement.removeChild(position.parentElement.childNodes[0]);
      this.highlightedUpTile4.appendChild(position);
      this.resetMovement(position);
      let referenceNode = document.getElementsByClassName('warrior')[0] as HTMLElement;
      let newNode = document.getElementsByClassName('warHPBar')[0] as HTMLElement;
      newNode.parentElement.removeChild(newNode);
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
  }

  moveUpCoordinates;
  moveDownCoordinates;
  moveLeftCoordinates;
  moveRightCoordinates;


  move(ignore,position){
    if(!this.moved){
      this.position= position;
    if(this.characterClass === 'druid'  && this.druidLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "druid" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "druid" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "druid" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "druid" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'mage' && this.mageLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mage" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mage" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mage" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mage" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'mercenary' && this.mercenaryLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mercenary" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mercenary" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mercenary" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "mercenary" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'necromancer' && this.necromancerLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "necromancer" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "necromancer" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "necromancer" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "necromancer" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'peasant' && this.peasantLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "peasant" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "peasant" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "peasant" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "peasant" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'priestess' && this.priestessLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "priestess" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "priestess" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "priestess" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "priestess" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }else if(this.characterClass === 'warrior' && this.warriorLife != 0){
      let currentPosition = position.parentElement.className;
      let xPos = currentPosition.charAt(0);
      let yPos = currentPosition.charAt(2);
      xPos = Number(xPos);
      yPos = Number(yPos);
      let moveRight = xPos + 1;
      let moveLeft = xPos - 1;
      let moveDown = yPos + 1;
      let moveUp = yPos - 1;
      this.moveUpCoordinates = `${xPos}_${moveUp}`;
      this.moveDownCoordinates = `${xPos}_${moveDown}`;
      this.moveLeftCoordinates = `${moveLeft}_${yPos}`;
      this.moveRightCoordinates = `${moveRight}_${yPos}`; 

      if(document.getElementsByClassName(this.moveUpCoordinates).length > 0 && !document.getElementsByClassName(this.moveUpCoordinates)[0].hasChildNodes() && !this.moved){
        this.highlightedUpTile1 = document.getElementsByClassName(this.moveUpCoordinates)[0] as HTMLElement;
        this.highlightedUpTile1.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile1.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "warrior" && this.position.parentElement.className == currentPosition){
          this.clicker1(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        }
      }
      if(document.getElementsByClassName(this.moveDownCoordinates).length > 0 && !document.getElementsByClassName(this.moveDownCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile2 = document.getElementsByClassName(this.moveDownCoordinates)[0] as HTMLElement;
        this.highlightedUpTile2.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile2.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "warrior" && this.position.parentElement.className == currentPosition){
          this.clicker2(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveLeftCoordinates).length > 0 && !document.getElementsByClassName(this.moveLeftCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile3 = document.getElementsByClassName(this.moveLeftCoordinates)[0] as HTMLElement;
        this.highlightedUpTile3.style.backgroundColor = "rgb(109, 105, 105)"; 
        this.highlightedUpTile3.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "warrior" && this.position.parentElement.className == currentPosition){
          this.clicker3(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
      if(document.getElementsByClassName(this.moveRightCoordinates).length > 0 && !document.getElementsByClassName(this.moveRightCoordinates)[0].hasChildNodes()){
        this.highlightedUpTile4 = document.getElementsByClassName(this.moveRightCoordinates)[0] as HTMLElement;
        this.highlightedUpTile4.style.backgroundColor = "rgb(109, 105, 105)";
        this.highlightedUpTile4.onclick = () =>{
          if(this.position.className.replace(/ .*/,'') == "warrior" && this.position.parentElement.className == currentPosition){
          this.clicker4(position);
          if(this.highlightedUpTile1 != undefined && this.highlightedUpTile1.style != undefined && this.highlightedUpTile1.style.backgroundColor != undefined ){
            this.highlightedUpTile1.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile2 != undefined && this.highlightedUpTile2.style != undefined && this.highlightedUpTile2.style.backgroundColor != undefined ){
            this.highlightedUpTile2.style.backgroundColor = ""; 
          }
          if(this.highlightedUpTile3 != undefined && this.highlightedUpTile3.style != undefined && this.highlightedUpTile3.style.backgroundColor != undefined ){
            this.highlightedUpTile3.style.backgroundColor = "";
          }
          if(this.highlightedUpTile4 != undefined && this.highlightedUpTile4.style != undefined && this.highlightedUpTile4.style.backgroundColor != undefined ){
            this.highlightedUpTile4.style.backgroundColor = "";
      
          }
        }
        };
      }
    }
  }
  }


}