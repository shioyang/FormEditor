import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeInfoComponent } from './fe-info.component';
import { NewFormComponent } from './new-form.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FeInfoComponent,
        pathMatch: 'full'
    },
    {
//        path: 'newForm/:id',
        path: 'newForm',
        component: NewFormComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
