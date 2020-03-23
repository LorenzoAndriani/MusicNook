import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: './tabsnav/tabsnav.module#TabsnavPageModule'
  },
  { path: 'tabsnav',
    loadChildren: () => import('./tabsnav/tabsnav.module').then( m => m.TabsnavPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popover/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'uscite',
    loadChildren: () => import('./uscite/uscite.module').then( m => m.UscitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
