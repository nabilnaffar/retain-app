import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styleUrls: ['app/containers/notes.container.css'],
    templateUrl: '/app/containers/notes.container.html'
})
export class NotesContainer{
    constructor(){
        this.notes = [{
            title: 'im a title1',
            value: 'im a value12',
            color: 'violet'
        },{
            title: 'im a title2',
            value: 'im a value',
            color: 'seagreen'
        },{
            title: 'im a title3',
            value: 'im a value',
            color: 'lightblue'
        }]

    }
    public notes: any[];
    removeNote(event: any, index: number):void{
        console.log(event, index);
        this.notes.splice(index, 1);
    }
}