import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../services';
import {Store} from '../store';
import 'rxjs/Rx';

@Component({
    selector: 'notes-container',
    styleUrls: ['app/containers/notes.container.css'],
    templateUrl: '/app/containers/notes.container.html'
})
export class NotesContainer implements OnDestroy, OnInit{
    public notes: any[] = [];

    constructor(private notesService: NotesService, private store: Store){
    }

    ngOnInit(){
        console.log('Component Initiated!');

        //register to changes in the store
        this.store.changes.pluck('notes')
            .subscribe((notes:any) => this.notes = notes);

        //fire get from BE
        this.notesService.getNotes()
            .subscribe();
    }

    ngOnDestroy(){
        console.log('Component Destroyed!');
    }

    removeNote(note: any, index: number):void{
        this.notesService.completeNote(note)
            .subscribe()
    }

    onCreateNote(newNote){
        this.notesService.createNote(newNote)
            .subscribe()
    }
}