import { Component , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() interval_fired = new EventEmitter<number>();
  interval ;
  last_number=0;
  onStartGame(){
    this.interval = setInterval(() =>{
      this.interval_fired.emit(this.last_number + 1);
      this.last_number++;
    },1000);
  }

  onPauseGame(){
      clearInterval(this.interval);
  }
}
