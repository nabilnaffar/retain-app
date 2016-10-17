import { Component } from '@angular/core';
import { NotesService } from '../services';

@Component({
    selector: 'notes-container',
    styleUrls: ['app/containers/notes.container.css'],
    templateUrl: '/app/containers/notes.container.html'
})
export class NotesContainer{
    public notes: any[] = [];

    constructor(private notesService: NotesService){
        this.notesService
            .getNotes()
            .subscribe(res => {
                console.log('here!', res);
                this.notes = res.data

            });

    }

    removeNote(note: any, index: number):void{
        console.log('removing...' , note);
        this.notesService.completeNote(note)
            .subscribe(res => this.notes.splice(index, 1))
    }

    onCreateNote(newNote){
        this.notesService.createNote(newNote)
            .subscribe(res => this.notes.push(res))
    }
}