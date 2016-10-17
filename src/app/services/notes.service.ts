import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import {StoreHelper} from './store-helper';

@Injectable()
export class NotesService{
    path:string = '/notes';
    constructor(private apiService: ApiService, private storeHelper: StoreHelper){

    }
    createNote(note){
        return this.apiService.post(this.path, note)
            .do(savedNotes => this.storeHelper.add('notes', savedNotes));
    }
    getNotes(){
        return this.apiService.get(this.path)
            .do(res => this.storeHelper.update('notes', res['data']));
    }
    completeNote(note) {
        return this.apiService.remove(`${this.path}/${note.id}`)
            .do(res => this.storeHelper.findAndDelete('notes', res['id']));
    }
}