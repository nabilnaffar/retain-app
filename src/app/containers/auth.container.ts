import {Component} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../services'

@Component({
    selector: 'app-auth',
    templateUrl: '/app/containers/auth.container.html',
    styleUrls: ['app/containers/auth.container.css']
})
export class AuthContainer{
    constructor(private router: Router, private authService: AuthService){}
    user: Object = {
        email: '',
        password: ''
    }
    mode: string = 'signin';
    linkText: string = 'Dont have an account?';
    changeMode(){
        if(this.mode === 'signin'){
            this.mode = 'signup';
            this.linkText = 'Already have an account?'
        }else{
            this.mode = 'signin';
            this.linkText = 'Dont have an account?'
        }
    }
    authenticate(){
        this.authService.authenticate(this.mode, this.user).subscribe(()=>this.router.navigate(['']));
    }
}