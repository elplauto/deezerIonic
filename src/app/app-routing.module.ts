import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-albums/:id',
    loadChildren: () => import('./list-albums/list-albums.module').then( m => m.ListAlbumsPageModule)
  },
  {
    path: 'list-tracks/:id',
    loadChildren: () => import('./list-tracks/list-tracks.module').then( m => m.ListTracksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
