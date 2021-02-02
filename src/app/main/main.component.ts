import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {FieldType, FieldArchService} from '';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  size = 6;
  steps = 0;
  weWantRender = false;
  win = false;

  tilesField: FieldType[][] = [];
  tile: FieldType[][] = [];

  rint(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  fieldFill(): void {
    this.steps = 0;
    for (let i = 0; i <= this.size; i++) {
      this.tilesField[i] = [];
      for (let j = 0; j <= this.size; j++) {
        const tf = this.rint(2);
        this.tilesField[i][j] = tf !== 0;
      }
    }
  }

  flipVal(x: number, y: number): void {
    this.steps++;
    if (x === 0 && y === 0) {
      /*▛*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
    } else if (x < this.size && x > 0 && y === 0) {
      /*╦*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
    } else if (x === this.size && y === 0) {
      /*▜*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
    } else if (x === this.size && y > 0 && y < this.size) {
      /*╣*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
    } else if (x === this.size && y === this.size) {
      /*▟*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
    } else if (y === this.size && x > 0 && x < this.size) {
      /*╩*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
    } else if (y === this.size && x === 0) {
      /*▙*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
    } else if (x === 0 && y > 0 && y < this.size) {
      /*╠*/
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
    } else {
      this.tilesField[y][x] = !this.tilesField[y][x];
      this.tilesField[y - 1][x] = !this.tilesField[y - 1][x];
      this.tilesField[y + 1][x] = !this.tilesField[y + 1][x];
      this.tilesField[y][x - 1] = !this.tilesField[y][x - 1];
      this.tilesField[y][x + 1] = !this.tilesField[y][x + 1];
    }
  }

  render(): void {
    this.weWantRender = true;
  }

  submit(): void {
    let fCheckT = 0;
    let fCheckF = 0;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.tilesField[i][j] === true) {
          fCheckT++;
        } else if (this.tilesField[i][j] === false) {
          fCheckF++;
        }
      }
    }
    if (fCheckF === this.size * this.size || fCheckT === this.size * this.size) {
      this.win = true;
    } else {
      console.log('fuck off');
    }
  }

}
