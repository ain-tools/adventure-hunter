import { Component, OnInit } from '@angular/core';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  receiveMessageV($event) {
    if(this.levelOneCompletedV && !$event){
      this.lvl1V = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelOneCompletedV = $event
      this.checkWinOrLoseV();
    }
  }
  receiveMessage1V($event) {
    if(this.levelTwoCompletedV && !$event){
      this.lvl2V = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelTwoCompletedV = $event
      this.checkWinOrLose1V();
    }
  }
  receiveMessage2V($event) {
    if(this.levelThreeCompletedV && !$event){
      this.lvl3V = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelThreeCompletedV = $event
      this.checkWinOrLose2V();
    }
  }
  receiveMessage3V($event) {
    if(this.levelFourCompletedV && !$event){
      this.lvl4V = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelFourCompletedV = $event
      this.checkWinOrLose3V();
    }
  }
  receiveMessage4V($event) {
    if(this.levelFiveCompletedV && !$event){
      this.lvl5V = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelFiveCompletedV = $event
      this.checkWinOrLose4V();
    }
  }

  receiveMessageN($event) {
    if(this.levelOneCompletedN && !$event){
      this.lvl1N = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelOneCompletedN = $event
      this.checkWinOrLoseN();
    }
  }
  receiveMessage1N($event) {
    if(this.levelTwoCompletedN && !$event){
      this.lvl2N = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelTwoCompletedN = $event
      this.checkWinOrLose1N();
    }
  }
  receiveMessage2N($event) {
    if(this.levelThreeCompletedN && !$event){
      this.lvl3N = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelThreeCompletedN = $event
      this.checkWinOrLose2N();
    }
  }
  receiveMessage3N($event) {
    if(this.levelFourCompletedN && !$event){
      this.lvl4N = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelFourCompletedN = $event
      this.checkWinOrLose3N();
    }
  }
  receiveMessage4N($event) {
    if(this.levelFiveCompletedN && !$event){
      this.lvl5N = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelFiveCompletedN = $event
      this.checkWinOrLose4N();
    }
  }

  receiveMessageD($event) {
    if(this.levelOneCompletedD && !$event){
      this.lvl1D = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelOneCompletedD = $event
      this.checkWinOrLoseD();
    }
  }
  receiveMessage1D($event) {
    if(this.levelTwoCompletedD && !$event){
      this.lvl2D = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelTwoCompletedD = $event
      this.checkWinOrLose1D();
    }
  }
  receiveMessage2D($event) {
    if(this.levelThreeCompletedD && !$event){
      this.lvl3D = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelThreeCompletedD = $event
      this.checkWinOrLose2D();
    }
  }
  receiveMessage3D($event) {
    if(this.levelFourCompletedD && !$event){
      this.lvl4D = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelFourCompletedD = $event
      this.checkWinOrLose3D();
    }
  }
  receiveMessage4D($event) {
    if(this.levelFiveCompletedD && !$event){
      this.lvl5D = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
    this.levelFiveCompletedD = $event
    this.checkWinOrLose4D();
    }
  }

  receiveMessage($event) {
    if(this.levelOneCompletedF && !$event){
      this.lvl1F = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
      this.levelOneCompletedF = $event
      this.checkWinOrLose();
    }
  }
  receiveMessage1($event) {
    if(this.levelTwoCompletedF && !$event){
      this.lvl2F = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
    this.levelTwoCompletedF = $event
    this.checkWinOrLose1();
    }
  }
  receiveMessage2($event) {
    if(this.levelThreeCompletedF && !$event){
      this.lvl3F = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
    this.levelThreeCompletedF = $event
    this.checkWinOrLose2();
    }
  }

  receiveMessage3($event) {
    if(this.levelFourCompletedF && !$event){
      this.lvl4F = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
    this.levelFourCompletedF = $event
    this.checkWinOrLose3();
    }
  }
  receiveMessage4($event) {
    if(this.levelFiveCompletedF && !$event){
      this.lvl5F = false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }else{
    this.levelFiveCompletedF = $event
    this.checkWinOrLose4();
    }
  }

  ////////////////////////////////

  ngOnInit() {
    this.levelOneCompletedF = this.stringToBoolean(localStorage.getItem("levelOneCompletedF")); 
    this.levelTwoCompletedF = this.stringToBoolean(localStorage.getItem("levelTwoCompletedF"));
    this.levelThreeCompletedF = this.stringToBoolean(localStorage.getItem("levelThreeCompletedF"));
    this.levelFourCompletedF = this.stringToBoolean(localStorage.getItem("levelFourCompletedF"));
    this.firstDungeonCompleted = this.stringToBoolean(localStorage.getItem("firstDungeonCompleted"));

    this.levelOneCompletedV = this.stringToBoolean(localStorage.getItem("levelOneCompletedV")); 
    this.levelTwoCompletedV = this.stringToBoolean(localStorage.getItem("levelTwoCompletedV"));
    this.levelThreeCompletedV = this.stringToBoolean(localStorage.getItem("levelThreeCompletedV"));
    this.levelFourCompletedV = this.stringToBoolean(localStorage.getItem("levelFourCompletedV"));
    this.secondDungeonCompleted = this.stringToBoolean(localStorage.getItem("secondDungeonCompleted"));

    this.levelOneCompletedN = this.stringToBoolean(localStorage.getItem("levelOneCompletedN")); 
    this.levelTwoCompletedN = this.stringToBoolean(localStorage.getItem("levelTwoCompletedN"));
    this.levelThreeCompletedN = this.stringToBoolean(localStorage.getItem("levelThreeCompletedN"));
    this.levelFourCompletedN = this.stringToBoolean(localStorage.getItem("levelFourCompletedN"));
    this.thirdDungeonCompleted = this.stringToBoolean(localStorage.getItem("thirdDungeonCompleted"));

    this.levelOneCompletedD = this.stringToBoolean(localStorage.getItem("levelOneCompletedD")); 
    this.levelTwoCompletedD = this.stringToBoolean(localStorage.getItem("levelTwoCompletedD"));
    this.levelThreeCompletedD = this.stringToBoolean(localStorage.getItem("levelThreeCompletedD"));
    this.levelFourCompletedD = this.stringToBoolean(localStorage.getItem("levelFourCompletedD"));
    this.fourthDungeonCompleted = this.stringToBoolean(localStorage.getItem("fourthDungeonCompleted"));

  }

  stringToBoolean(string){
    if(string == "true"){
      return true;
    }else{
      return false;
    }
  }
  backgroundMusic = new Audio('./assets/backgroundmusic.mp3');
  playBackgroundMusic(){
    
    if(!this.backgroundMusic.onplaying){
      this.backgroundMusic.loop = true;
      this.backgroundMusic.play();
    }

  }

  checkWinOrLoseV(){
    if(this.levelOneCompletedV == true){
      this.lvl1V = false;
      this.levelOneCompletedV = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showVillage = true;
    this.victoryAlert = true;
    localStorage.setItem("levelOneCompletedV", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeatedV();
    }
  }
  checkWinOrLose1V(){
    if(this.levelTwoCompletedV == true){
      this.lvl2V = false;
      this.levelTwoCompletedV = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showVillage = true;
    this.victoryAlert = true;
    localStorage.setItem("levelTwoCompletedV", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated1V();
    }
  }
  checkWinOrLose2V(){
    if(this.levelThreeCompletedV == true){
      this.lvl3V = false;
      this.levelThreeCompletedV = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showVillage = true;
    this.victoryAlert = true;
    localStorage.setItem("levelThreeCompletedV", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated2V();
    }
  }
  checkWinOrLose3V(){
    if(this.levelFourCompletedV == true){
      this.lvl4V = false;
      this.levelFourCompletedV = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showVillage = true;
    this.victoryAlert = true;
    localStorage.setItem("levelFourCompletedV", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated3V();
    }
  }
  checkWinOrLose4V(){
    if(this.levelFiveCompletedV == true){
      this.lvl5V = false;
      this.levelFiveCompletedV = true;
      this.secondDungeonCompleted = true;
      this.openGameMenu = false;
      this.openMenu= true;
    this.showVillage = false;
    this.victoryDungeonAlert = true;
    localStorage.setItem("levelFiveCompletedV", "true");
    localStorage.setItem("secondDungeonCompleted", "true");
    setTimeout(()=>{
      this.victoryDungeonAlert = false;
    },2000);
    }else{
      this.checkIfDefeated4V();
    }
  }

  checkWinOrLoseN(){
    if(this.levelOneCompletedN == true){
      this.lvl1N = false;
      this.levelOneCompletedN = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showWar = true;
    this.victoryAlert = true;
    localStorage.setItem("levelOneCompletedN", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeatedN();
    }
  }
  checkWinOrLose1N(){
    if(this.levelTwoCompletedN == true){
      this.lvl2N = false;
      this.levelTwoCompletedN = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showWar = true;
    this.victoryAlert = true;
    localStorage.setItem("levelTwoCompletedN", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated1N();
    }
  }
  checkWinOrLose2N(){
    if(this.levelThreeCompletedN == true){
      this.lvl3N = false;
      this.levelThreeCompletedN = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showWar = true;
    this.victoryAlert = true;
    localStorage.setItem("levelThreeCompletedN", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated2N();
    }
  }
  checkWinOrLose3N(){
    if(this.levelFourCompletedN == true){
      this.lvl4N = false;
      this.levelFourCompletedN = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showWar = true;
    this.victoryAlert = true;
    localStorage.setItem("levelFourCompletedN", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated3N();
    }
  }
  checkWinOrLose4N(){
    if(this.levelFiveCompletedN == true){
      this.lvl5N = false;
      this.levelFiveCompletedN = true;
      this.thirdDungeonCompleted = true;
      this.openGameMenu = false;
      this.openMenu= true;
    this.showWar = false;
    this.victoryDungeonAlert = true;
    localStorage.setItem("levelFiveCompletedN", "true");
    localStorage.setItem("thirdDungeonCompleted", "true");
    setTimeout(()=>{
      this.victoryDungeonAlert = false;
    },2000);
    }else{
      this.checkIfDefeated4N();
    }
  }

  checkWinOrLoseD(){
    if(this.levelOneCompletedD == true){
      this.lvl1D = false;
      this.levelOneCompletedD = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showDragon = true;
    this.victoryAlert = true;
    localStorage.setItem("levelOneCompletedD", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeatedD();
    }
  }
  checkWinOrLose1D(){
    if(this.levelTwoCompletedD == true){
      this.lvl2D = false;
      this.levelTwoCompletedD = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showDragon = true;
    this.victoryAlert = true;
    localStorage.setItem("levelTwoCompletedD", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated1D();
    }
  }
  checkWinOrLose2D(){
    if(this.levelThreeCompletedD == true){
      this.lvl3D = false;
      this.levelThreeCompletedD = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showDragon = true;
    this.victoryAlert = true;
    localStorage.setItem("levelThreeCompletedD", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated2D();
    }
  }
  checkWinOrLose3D(){
    if(this.levelFourCompletedD == true){
      this.lvl4D = false;
      this.levelFourCompletedD = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showDragon = true;
    this.victoryAlert = true;
    localStorage.setItem("levelFourCompletedD", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated3D();
    }
  }
  checkWinOrLose4D(){
    if(this.levelFiveCompletedD == true){
      this.levelFiveCompletedD = true;
      this.fourthDungeonCompleted = true;
      this.lvl5D =false;
      this.openGameMenu = false;
    this.showForest = false;   
     this.victoryDungeonAlert = true;
     this.openMenu= true;
     localStorage.setItem("levelFiveCompletedD", "true");
     localStorage.setItem("fourthDungeonCompleted", "true");
    setTimeout(()=>{
      this.victoryDungeonAlert = false;
    },2000);
    }else{
      this.checkIfDefeated4D();
    }
  }

  checkWinOrLose(){
    if(this.levelOneCompletedF == true){
      this.lvl1F = false;
      this.levelOneCompletedF = true;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showForest = true;
    this.victoryAlert = true;
    localStorage.setItem("levelOneCompletedF", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated();
    }
  }

  checkWinOrLose1(){
    if(this.levelTwoCompletedF == true){
      this.levelTwoCompletedF = true;
      this.lvl2F =false;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showForest = true;
    this.victoryAlert = true;
    localStorage.setItem("levelTwoCompletedF", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated1();
    }
  }
  checkWinOrLose2(){
    if(this.levelThreeCompletedF == true){
      this.levelThreeCompletedF = true;
      this.lvl3F =false;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showForest = true;
    this.victoryAlert = true;
    localStorage.setItem("levelThreeCompletedF", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated2();
    }
  }
  checkWinOrLose3(){
    if(this.levelFourCompletedF == true){
      this.levelFourCompletedF = true;
      this.lvl4F =false;
      this.openGameMenu = false;
      this.openMenu= false;
    this.showForest = true;
    this.victoryAlert = true;
    localStorage.setItem("levelFourCompletedF", "true");
    setTimeout(()=>{
      this.victoryAlert = false;
    },2000);
    }else{
      this.checkIfDefeated3();
    }
  }
  checkWinOrLose4(){
    if(this.levelFiveCompletedF == true){
      this.levelFiveCompletedF = true;
      this.firstDungeonCompleted = true;
      this.lvl5F =false;
      this.openGameMenu = false;
    this.showForest = false;   
     this.victoryDungeonAlert = true;
     this.openMenu= true;
     localStorage.setItem("levelFiveCompletedF", "true");
     localStorage.setItem("firstDungeonCompleted", "true");
    setTimeout(()=>{
      this.victoryDungeonAlert = false;
    },2000);
    }else{
      this.checkIfDefeated4();
    }
  }

  /////////////////////////

  checkIfDefeatedV(){
    if(!this.levelOneCompletedV){
      this.lvl1V =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }

  checkIfDefeated1V(){
    if(!this.levelTwoCompletedV){
      this.lvl2V =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated2V(){
    if(!this.levelThreeCompletedV){
      this.lvl3V =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated3V(){
    if(!this.levelFourCompletedV){
      this.lvl4V =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated4V(){
    if(!this.levelFiveCompletedV){
      this.lvl5V =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showVillage = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  
  checkIfDefeatedN(){
    if(!this.levelOneCompletedN){
      this.lvl1N =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated1N(){
    if(!this.levelTwoCompletedN){
      this.lvl2N =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated2N(){
    if(!this.levelThreeCompletedN){
      this.lvl3N =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated3N(){
    if(!this.levelFourCompletedN){
      this.lvl4N =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated4N(){
    if(!this.levelFiveCompletedN){
      this.lvl5N =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showWar = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }

  checkIfDefeatedD(){
    if(!this.levelOneCompletedD){
      this.lvl1D =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated1D(){
    if(!this.levelTwoCompletedD){
      this.lvl2D =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated2D(){
    if(!this.levelThreeCompletedD){
      this.lvl3D =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated3D(){
    if(!this.levelFourCompletedD){
      this.lvl4D =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }
  checkIfDefeated4D(){
    if(!this.levelFiveCompletedD){
      this.lvl5D =false;
      this.openGameMenu = false;
      this.openMenu= false;
  this.showDragon = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
  }


  checkIfDefeated(){
    if(!this.levelOneCompletedF){
      this.lvl1F =false;   
      this.openGameMenu = false;
      this.openMenu= false;
  this.showForest = true;
  this.defeatAlert = true;
  setTimeout(()=>{
    this.defeatAlert = false;
  },4000);
    }
}
  checkIfDefeated1(){
  if(!this.levelTwoCompletedF){
    this.lvl2F =false;
    this.openGameMenu = false;
    this.openMenu= false;
this.showForest = true;
this.defeatAlert = true;
setTimeout(()=>{
  this.defeatAlert = false;
},4000);
  }
}
checkIfDefeated2(){
  if(!this.levelThreeCompletedF){
    this.lvl3F =false;
    this.openGameMenu = false;
    this.openMenu= false;
this.showForest = true;
this.defeatAlert = true;
setTimeout(()=>{
  this.defeatAlert = false;
},4000);
  }
}
checkIfDefeated3(){
  if(!this.levelFourCompletedF){
    this.lvl4F =false;
    this.openGameMenu = false;
    this.openMenu= false;
this.showForest = true;
this.defeatAlert = true;
setTimeout(()=>{
  this.defeatAlert = false;
},4000);
  }
}

checkIfDefeated4(){
  if(!this.levelFiveCompletedF){
    this.lvl5F =false;
    this.openGameMenu = false;
    this.openMenu= false;
this.showForest = true;
this.defeatAlert = true;
setTimeout(()=>{
  this.defeatAlert = false;
},4000);
  }
}
  //backarrows and start game
  backArrow(){
    this.showForest = false;
    this.showVillage = false;
    this.showWar = false;
    this.showDragon = false;
    this.openMenu = true;
  }
  startGameFunc(){
    this.startGame = true;
  }
 startGame = false;

 openCredits(){
   this.credits = !this.credits;
 }
 credits = false ;
  //VICTORY
  defeatAlert= false;

victoryAlert = false;
victoryDungeonAlert = false;

  //Level system (ng Ifs for HTML5)
  //menu
  openMenu : boolean = true;
  openGameMenu : boolean = false;

  showLevels(dungeon){
  if(dungeon == 'forest'){
    this.openMenu= false;
    this.showForest = true;
  }else if(dungeon == 'village' && localStorage.getItem("firstDungeonCompleted")=="true"){
    this.openMenu= false;
    this.showVillage = true;
  }else if(dungeon == 'war' && localStorage.getItem("secondDungeonCompleted")=="true"){
    this.openMenu= false;
    this.showWar = true;
  }else if(dungeon == 'dragon' && localStorage.getItem("thirdDungeonCompleted")=="true"){
    this.openMenu= false;
    this.showDragon = true;
  }
  }

  selectGame(level){
    this.openMenu = false;
    this.showGame(level);
  }
  showGame(level){
    if(level == 'levelOneF'){
      this.showForest = false;
      this.lvl1F = true;
      this.openGameMenu = true;
    }else if(level == 'levelTwoF' && localStorage.getItem("levelOneCompletedF")=="true"){
      this.showForest = false;
      this.lvl2F = true;
      this.openGameMenu = true;
    }else if(level == 'levelThreeF' && localStorage.getItem("levelTwoCompletedF")=="true"){
      this.showForest = false;
      this.lvl3F = true;
      this.openGameMenu = true;
    }else if(level == 'levelFourF' && localStorage.getItem("levelThreeCompletedF")=="true"){
      this.showForest = false;
      this.lvl4F = true;
      this.openGameMenu = true;
    }else if(level == 'levelFiveF' && localStorage.getItem("levelFourCompletedF")=="true"){
      this.showForest = false;
      this.lvl5F = true;
      this.openGameMenu = true;
    }else if(level == 'levelOneV'){
      this.showVillage = false;
      this.lvl1V = true;
      this.openGameMenu = true;
    }else if(level == 'levelTwoV' && localStorage.getItem("levelOneCompletedV")=="true"){
      this.showVillage = false;
      this.lvl2V = true;
      this.openGameMenu = true;
    }else if(level == 'levelThreeV' && localStorage.getItem("levelTwoCompletedV")=="true"){
      this.showVillage = false;
      this.lvl3V = true;
      this.openGameMenu = true;
    }else if(level == 'levelFourV' && localStorage.getItem("levelThreeCompletedV")=="true"){
      this.showVillage = false;
      this.lvl4V = true;
      this.openGameMenu = true;
    }else if(level == 'levelFiveV' && localStorage.getItem("levelFourCompletedV")=="true"){
      this.showVillage = false;
      this.lvl5V = true;
      this.openGameMenu = true;
    }else if(level == 'levelOneN'){
      this.showWar = false;
      this.lvl1N = true;
      this.openGameMenu = true;
    }else if(level == 'levelTwoN' && localStorage.getItem("levelOneCompletedN")=="true"){
      this.showWar = false;
      this.lvl2N = true;
      this.openGameMenu = true;
    }else if(level == 'levelThreeN' && localStorage.getItem("levelTwoCompletedN")=="true"){
      this.showWar = false;
      this.lvl3N = true;
      this.openGameMenu = true;
    }else if(level == 'levelFourN' && localStorage.getItem("levelThreeCompletedN")=="true"){
      this.showWar = false;
      this.lvl4N = true;
      this.openGameMenu = true;
    }else if(level == 'levelFiveN' && localStorage.getItem("levelFourCompletedN")=="true"){
      this.showWar = false;
      this.lvl5N = true;
      this.openGameMenu = true;
    }else if(level == 'levelOneD'){
      this.showDragon = false;
      this.lvl1D = true;
      this.openGameMenu = true;
    }else if(level == 'levelTwoD' && localStorage.getItem("levelOneCompletedD")=="true"){
      this.showDragon = false;
      this.lvl2D = true;
      this.openGameMenu = true;
    }else if(level == 'levelThreeD' && localStorage.getItem("levelTwoCompletedD")=="true"){
      this.showDragon = false;
      this.lvl3D = true;
      this.openGameMenu = true;
    }else if(level == 'levelFourD' && localStorage.getItem("levelThreeCompletedD")=="true"){
      this.showDragon = false;
      this.lvl4D = true;
      this.openGameMenu = true;
    }else if(level == 'levelFiveD' && localStorage.getItem("levelFourCompletedD")=="true"){
      this.showDragon = false;
      this.lvl5D = true;
      this.openGameMenu = true;
    }
  }
  //dungeons completed
  firstDungeonCompleted : boolean = false;
  secondDungeonCompleted : boolean = false;
  thirdDungeonCompleted : boolean = false;
  fourthDungeonCompleted : boolean = false;

  showForest : boolean = false;
  showVillage : boolean = false;
  showWar : boolean = false;
  showDragon : boolean = false;
  
  //forest dungeon
  levelOneCompletedF : boolean = false;
  levelTwoCompletedF : boolean = false;
  levelThreeCompletedF : boolean = false;
  levelFourCompletedF : boolean = false;
  levelFiveCompletedF : boolean = false;
  //village dungeon
  levelOneCompletedV : boolean = false;
  levelTwoCompletedV : boolean = false;
  levelThreeCompletedV : boolean = false;
  levelFourCompletedV : boolean = false;
  levelFiveCompletedV : boolean = false;
  //no man's land
  levelOneCompletedN : boolean = false;
  levelTwoCompletedN : boolean = false;
  levelThreeCompletedN : boolean = false;
  levelFourCompletedN : boolean = false;
  levelFiveCompletedN : boolean = false;
  //Dragon's Lair
  levelOneCompletedD : boolean = false;
  levelTwoCompletedD : boolean = false;
  levelThreeCompletedD : boolean = false;
  levelFourCompletedD : boolean = false;
  levelFiveCompletedD : boolean = false;

  //forest dungeon levels
  lvl1F = false;
  lvl2F = false;
  lvl3F = false;
  lvl4F = false;
  lvl5F = false;
  //village dungeon levels
  lvl1V = false;
  lvl2V = false;
  lvl3V = false;
  lvl4V = false;
  lvl5V = false;
  //no man's land dungeon levels
  lvl1N = false;
  lvl2N = false;
  lvl3N = false;
  lvl4N = false;
  lvl5N = false;
  //dragon's lair
  lvl1D = false;
  lvl2D = false;
  lvl3D = false;
  lvl4D = false;
  lvl5D = false;

}
