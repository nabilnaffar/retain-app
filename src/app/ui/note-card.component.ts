import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'note-card',
    styleUrls: ['app/ui/note-card.component.css'],
    templateUrl: '/app/ui/note-card.component.html'
})
export class NoteCardComponent{
    @Input()
    note: any;

    @Output()
    checked = new EventEmitter();

    public showMe: boolean = false;

    constructor(){
    }

    private onChecked(){
        this.checked.next(this.note)
    }

}