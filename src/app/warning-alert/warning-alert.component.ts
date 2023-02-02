import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl : './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  showSecret = false;
  log = [];
  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length+1);
  }
}
