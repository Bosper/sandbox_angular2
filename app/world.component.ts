import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs/Rx';
//import { GridLayout } from "ui/layouts/grid-layout";
import { HeroesService } from './heroes.service';
@Component({
    selector: 'world',
    styles : ['app/world.component.css'], 
    templateUrl : `app/world.component.html`
})

export class OperWorld {
    constructor( public heroService: HeroesService ) {
    }


}