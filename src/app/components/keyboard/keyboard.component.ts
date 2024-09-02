import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {
  @Input() getCorrectnessStyle!: (letter: string) => string;
  @Output() guessLetter: EventEmitter<string> = new EventEmitter<string>();

  letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  onGuessLetter(letter: string) {
    this.guessLetter.emit(letter);
  }
}
