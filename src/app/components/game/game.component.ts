import { Component } from '@angular/core';
import { GallowComponent } from "../gallow/gallow.component";
import { AppComponent } from "../../app.component";
import { KeyboardComponent } from "../keyboard/keyboard.component";
import { SecretWordComponent } from "../secret-word/secret-word.component";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HiddenWordComponent } from "../hidden-word/hidden-word.component";
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GallowComponent, AppComponent, KeyboardComponent, SecretWordComponent, ReactiveFormsModule, HiddenWordComponent, BodyComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  guessedLetters: string[] = [];
  secretWordControl: FormControl<string | null>;
  hiddenWord: string = '';
  hasGameStarted: boolean = false;
  remainingAttempts: number = 9;
  gameOver: boolean = false;
  hasWinner: boolean = false;

  constructor() {
    this.secretWordControl = new FormControl<string>('', [Validators.required]);
  }

  handlePlay() {
    if (this.secretWordControl.valid) {
      this.hasGameStarted = true;
      this.buildHiddenWord()
    }
  }

  resetGame() {
    this.hasGameStarted = false;
    this.secretWordControl.setValue('');
    this.guessedLetters = [];
    this.hasWinner = false;
    this.gameOver = false;
    this.remainingAttempts = 9;
  }

  guessLetter(letter: string) {
    if (!this.gameOver && !this.hasWinner) {
      this.guessedLetters.push(letter);
      this.updateHiddenWord();      
      this.updateGame(letter);      
    }
  }

  private buildHiddenWord() {
    if (this.hasGameStarted && this.secretWordControl.value) {
      this.hiddenWord = this.secretWordControl.value.split('').map(() => '_').join('');
    }
  }

  private updateGame(letter: string) {
    if (!this.secretWordControl.value?.includes(letter)) {
      this.remainingAttempts--;
    }

    if (!this.remainingAttempts) {
      this.gameOver = true;
    }

    if (!this.hiddenWord.includes('_')) {
      this.hasWinner = true;
    }
  }

  private updateHiddenWord() {
    if (this.secretWordControl.value) {
      this.hiddenWord = this.secretWordControl.value.split('').map((letter: string) => this.guessedLetters.includes(letter) ? letter : '_').join('');
    }
  }  
  
  getKeyboardStyle(letter: string) {
    if (!this.guessedLetters.includes(letter)) {
      return '';
    }

    return this.secretWordControl.value?.includes(letter) ? 'correct' : 'incorrect';
  }
}
