import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `<h3>{{ title }}</h3>`
})

export class DashboardComponent {
    title = 'dashboard.component'
}