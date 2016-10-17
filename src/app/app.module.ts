import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {routes} from './routes';
import { AppComponent } from './app.component';
import { MainContainer, NotesContainer, AboutContainer } from './containers';
import { AppBar, NoteCardComponent, NoteCreator, ColorPicker } from './ui';
import { ApiService, NotesService } from './services'
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        MainContainer,
        NotesContainer,
        AboutContainer,
        AppBar,
        NoteCardComponent,
        NoteCreator,
        ColorPicker
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ApiService,
        NotesService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}//use hash urls instead of html5 routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
