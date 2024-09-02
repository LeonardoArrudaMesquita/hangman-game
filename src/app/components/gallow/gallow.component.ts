import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallow',
  standalone: true,
  imports: [],
  templateUrl: './gallow.component.html',
  styleUrl: './gallow.component.scss'
})
export class GallowComponent {
  @Input() remainingAttempts: number = 8;
  
  shouldDisplay(partIndex: number): boolean {
    return this.remainingAttempts <= partIndex;
  }

  bodyParts = [
    { type: 'circle', r: "45", cx: "246", cy: "85", fill: "white", stroke: "black", strokeWidth: "7", strokeColor:"black", threshold: 8 }, // Head
    { type: 'line', x1: "221.5", x2: "241.5", y1: "60", y2: "80", stroke: "black", strokeWidth: "5", threshold: 7 }, // Left Eye
    { type: 'line', x1: "221.5", x2: "241.5", y1: "80", y2: "60", stroke: "black", strokeWidth: "5", threshold: 7 }, // Left Eye
    { type: 'line', x1: "250.5", x2: "270.5", y1: "60", y2: "80", stroke: "black", strokeWidth: "5", threshold: 6 }, // Right Eye
    { type: 'line', x1: "250.5", x2: "270.5", y1: "80", y2: "60", stroke: "black", strokeWidth: "5", threshold: 6 }, // Right Eye    
    { type: 'path', d: "M 231 110 C 231 90, 261 90, 261 110", strokeWidth: "5", stroke: "black", fill: "transparent", threshold: 5 }, // Mouth
    { type: 'line', x1: "246", x2: "246", y1: "127.5", y2: "300", stroke: "black", strokeWidth: "7", threshold: 4 }, // Shape
    { type: 'line', x1: "186", x2: "246", y1: "205", y2: "160", stroke: "black", strokeWidth: "7", threshold: 3 }, // Left Arm
    { type: 'line', x1:"246", x2: "306", y1: "160", y2: "205", stroke: "black", strokeWidth: "7", threshold: 2 },  // Right Arm    
    { type: 'line', x1: "186", x2: "246", y1: "350", y2: "295", stroke: "black", strokeWidth: "7", threshold: 1 }, // Left Leg
    { type: 'line', x1: "246", x2: "306", y1: "295", y2: "350", stroke: "black", strokeWidth: "7", threshold: 0 }, // Right Leg
  ];
}
