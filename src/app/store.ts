import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

export interface Note {
    color: string;
    title: string;
    value: string;
    id?: string | number;
    createdAt?: string;
    updatedAt?: string;
    userId?: string;
}

export interface AppState {
    notes: Note[];
}

const defaultState = {
    notes: []
};

const _store = new BehaviorSubject<AppState>(defaultState);

@Injectable()
export class Store{
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged();

    setState(state:AppState){
        console.debug('state set: ', state);
        this._store.next(state);
    }
    getState():AppState{
        return this._store.value;
    }
    purge(){
        this._store.next(defaultState)
    }
}