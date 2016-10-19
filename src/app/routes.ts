import { Routes } from '@angular/router';
import {MainContainer, NotesContainer, AboutContainer, AuthContainer} from './containers';
import {AuthService} from './services';

export const routes:Routes = [
    {
        path: '',
        component: MainContainer,
        canActivate: [AuthService],
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
    { path: 'auth', component: AuthContainer},
    {path: '**', redirectTo: ''}
]