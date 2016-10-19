import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ApiService} from './api.service'
import { StoreHelper} from './store-helper'
import {Store} from '../store';

@Injectable()
export class AuthService implements CanActivate{
    JWT_KEY:string = 'retain_token';

    constructor(private router:Router,
                private apiService: ApiService,
                private storeHelper: StoreHelper,
                private store: Store
    ){
        window.localStorage.getItem(this.JWT_KEY)&&this.setJwt(window.localStorage.getItem(this.JWT_KEY))
    }

    isAuthorized():boolean{
      return Boolean(window.localStorage.getItem(this.JWT_KEY));
    }

    setJwt(jwt){
        window.localStorage.setItem(this.JWT_KEY, jwt);
        this.apiService.setHeaders({'Authorization': `Bearer ${jwt}`});

    }

    authenticate(path, credentials){
        return this.apiService.post(`/${path}`, credentials)
            .do(res => this.setJwt(res['token']))
            .do(res => this.storeHelper.update('user', res['data']))
            .map(res => res['data']);
    }

    signout(){
        window.localStorage.removeItem(this.JWT_KEY);
        this.store.purge();
        this.router.navigate(['auth']);
    }

    canActivate():boolean{
        const isAuth = this.isAuthorized();
        
        if(!isAuth){
            this.router.navigate(['auth']);
        }
        return isAuth;
    }
}