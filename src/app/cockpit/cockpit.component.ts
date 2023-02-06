import { Component, EventEmitter, OnInit, Output, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = ''
  // newServerContent = '';
 @ViewChild('serverContentInput' ,{static : true}) serverContentInput : ElementRef;
  @Output() serverCreated  = new EventEmitter<{serverName : string , serverContent : string}>();
  @Output('bpCreated') blueprintCreated  = new EventEmitter<{serverName : string , serverContent : string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(InputValue: HTMLInputElement) {
    this.serverCreated.emit({serverName :  InputValue.value , serverContent : this.serverContentInput.nativeElement.value });
    // console.log(InputValue.value);
    // console.log(this.serverContentInput)
  }

  onAddBlueprint(InputValue: HTMLInputElement) {
    this.blueprintCreated.emit({serverName :  InputValue.value , serverContent : this.serverContentInput.nativeElement.value });
  }
}
