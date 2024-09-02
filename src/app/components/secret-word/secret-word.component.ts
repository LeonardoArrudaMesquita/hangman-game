import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-secret-word',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './secret-word.component.html',
  styleUrl: './secret-word.component.scss'
})
export class SecretWordComponent {
  @Input() control = new FormControl<string>('');
  @Output() play = new EventEmitter<string>();  

  onPlay() {
    this.play.emit()
  }
}
