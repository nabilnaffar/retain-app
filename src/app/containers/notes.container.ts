import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../services';

@Component({
    selector: 'notes-container',
    styleUrls: ['app/containers/notes.container.css'],
    templateUrl: '/app/containers/notes.container.html'
})
export class NotesContainer implements OnDestroy, OnInit{
    public notes: any[] = [];

    constructor(private notesService: NotesService){
    }

    ngOnInit(){
        console.log('Component Initiated!');
        this.notesService
            .getNotes()
            .subscribe(res => {
                this.notes = res.data

            });
    }

    ngOnDestroy(){
        console.log('Component Destroyed!');
    }

    removeNote(note: any, index: number):void{
        this.notesService.completeNote(note)
            .subscribe(res => this.notes.splice(index, 1))
    }

    onCreateNote(newNote){
        this.notesService.createNote(newNote)
            .subscribe(res => this.notes.push(res))
    }
}