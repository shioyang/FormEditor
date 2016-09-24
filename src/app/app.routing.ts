import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeInfoComponent } from './fe-info.component';
import { FeListComponent } from './fe-list.component';
import { NewFormComponent } from './new-form.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FeInfoComponent,
        pathMatch: 'full'
    },
    {
        path: 'feList',
        component: FeListComponent
    },
    {
//        path: 'newForm/:id',
        path: 'newForm',
        component: NewFormComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
