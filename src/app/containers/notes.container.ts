import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styleUrls: ['app/containers/notes.container.css'],
    templateUrl: '/app/containers/notes.container.html'
})
export class NotesContainer{
    constructor(){
        this.notes = []

    }
    public notes: any[];
    removeNote(event: any, index: number):void{
        console.log(event, index);
        this.notes.splice(index, 1);
    }
    onCreateNote(newNote){
        this.notes.push(newNote)
    }
}