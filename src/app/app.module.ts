import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainContainer, NotesContainer } from './containers';
import { AppBar, NoteCardComponent } from './ui';

@NgModule({
    declarations: [
        AppComponent,
        MainContainer,
        NotesContainer,
        AppBar,
        NoteCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
