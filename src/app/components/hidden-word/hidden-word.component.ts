import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-word',
  standalone: true,
  imports: [],
  templateUrl: './hidden-word.component.html',
  styleUrl: './hidden-word.component.scss'
})
export class HiddenWordComponent implements OnInit {
  @Input() word: string = '';
  @Input() guessedLetters: string[] = [];
  
  hiddenLetters: string[] = [];

  ngOnInit(): void {
    this.hiddenLetters = this.word.split('').map(() => '_');
  }

  updateHiddenWord() {
    this.word.split('').map((letter) => {
      if (this.guessedLetters.includes(letter)) {
        return letter
      }

      return '_'
    });
  }
}
