import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFormComponent } from './newForm.component';

const appRoutes: Routes = [
    {
//        path: 'newForm/:id',
        path: 'newForm',
        component: NewFormComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
