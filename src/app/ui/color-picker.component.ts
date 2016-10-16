import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-picker',
    templateUrl: '/app/ui/color-picker.component.html',
    styleUrls: ['app/ui/color-picker.component.css']
})
export class ColorPicker{
    @Input() colors:String[] = [];
    @Output() selected = new EventEmitter();

    isPickerVisible: boolean = false;
    showSelector(val: boolean){
        this.isPickerVisible = val
    }
    selectColor(color: String){
        this.selected.next(color);
        this.showSelector(false);
    }

}