import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html',
  // styleUrls: ['./app.component.css']
  styleUrls :['./app.component.css']
})
export class AppComponent {
  title = 'Project-1';
//   serverElements = [{type : 'server' , name: "test-server" , content :'test'}];
//   onServerAdded(serverData: {serverName : string , serverContent : string}) {
//  this.serverElements.push({
//          type: 'server',
//          name: serverData.serverName,
//          content: serverData.serverContent
//        });
//     }

//      onBlueprintAdded(blueprintData: {serverName : string , serverContent : string}) {
//         this.serverElements.push({
//          type: 'blueprint',
//          name: blueprintData.serverName,
//          content: blueprintData.serverContent
//        });
//      }

// oddNumbers : number [] = [];
// evenNumbers : number [] = [];


// onIntervalFired(firedNumber : number) {
//     if(firedNumber%2 === 0 ){
//       this.evenNumbers.push(firedNumber);
//     }
//     else{
//       this.oddNumbers.push(firedNumber);
//     }


// }



//MAIN CODE
// loadedFeature = 'recipe';
// onNavigate(feature) {
//   this.loadedFeature = feature;
// }

accounts = [
  {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
];

onAccountAdded(newAccount: {name: string, status: string}) {
  this.accounts.push(newAccount);
}

onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  this.accounts[updateInfo.id].status = updateInfo.newStatus;
}


}
