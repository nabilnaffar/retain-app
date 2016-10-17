import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainContainer, NotesContainer } from './containers';
import { AppBar, NoteCardComponent, NoteCreator, ColorPicker } from './ui';
import { ApiService, NotesService } from './services'

@NgModule({
    declarations: [
        AppComponent,
        MainContainer,
        NotesContainer,
        AppBar,
        NoteCardComponent,
        NoteCreator,
        ColorPicker
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ApiService, NotesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
