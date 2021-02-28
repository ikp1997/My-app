import {Component, OnInit} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'

})

export class ServerComponent implements OnInit{
serverId: number=10;
serverStatus: string  = 'offline';
constructor(){
    setTimeout(()=>{
        this.alloeNewServer=true;
    },2000);
}
alloeNewServer=false;
getServerStatus() {
      return this.serverStatus;
    }
    ngOnInit(){}
}