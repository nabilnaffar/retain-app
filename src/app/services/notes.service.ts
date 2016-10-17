import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService{
    path:string = '/notes';
    constructor(private apiService: ApiService){

    }
    createNote(note){
        return this.apiService.post(this.path, note);
    }
    getNotes(){
        return this.apiService.get(this.path)
    }
    completeNote(note) {
        return this.apiService.remove(`${this.path}/${note.id}`);
    }
}