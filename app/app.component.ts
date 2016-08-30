import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'app',
    template: `
    <nav>
        <a [routerLink]="['dashboard']">Dashboard</a>
        <a [routerLink]="['heroes']">Heroes</a>
        <a [routerLink]="['home']">Home</a>
        <a [routerLink]="['world']">World</a>
    </nav>
    <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ HeroesService ]
})

export class AppComponent {
    title = 'app.component'
}