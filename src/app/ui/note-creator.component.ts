import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'note-creator',
    styleUrls: ['app/ui/note-creator.component.css'],
    templateUrl: '/app/ui/note-creator.component.html'
})
export class NoteCreator{
    @Output()
    createNote = new EventEmitter();

    public newNote: any;
    public fullForm: boolean = false;

    colors = ['#FFCC00', '#4CD964', '#34AADC', '#D1EEFC', '#E0F8D8', '#FF4981', '#C7C7CC', 'white', '#FF3B30', '#FF9500'];

    constructor(){
        this._reset();
    }

    public onAddNote(){
        const {title, value, color} = this.newNote;
        if(!title || !value){
            return
        }
        this.createNote.next({title, value, color});
        this._reset()
    }

    public toggle(val){
        this.fullForm = val;
    }

    public onColorSelected(color){
        this.newNote.color = color;
    }

    private _reset(){
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }
}