import {Component} from '@angular/core';
import {AuthService} from '../services';

@Component({
    selector: 'app-bar',
    templateUrl: '/app/ui/app-bar.component.html',
    styleUrls: ['app/ui/app-bar.component.css']
})
export class AppBar {

    constructor(private authService: AuthService){}

    signout(){
     this.authService.signout();
    }
}