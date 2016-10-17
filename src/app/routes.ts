import { Routes } from '@angular/router';
import {MainContainer, NotesContainer, AboutContainer} from './containers';

export const routes:Routes = [
    {
        path: '',
        component: MainContainer,
        children: [
            {
                path: '',
                component: NotesContainer
            },
            {
                path: 'about',
                component: AboutContainer
            }
        ]
    },
    {path: '**', redirectTo: ''}
]