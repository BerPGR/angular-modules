import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { GaleiraModule } from '../galeira/galeira-module';

const routes: Routes = [
  {
    path: '', component: Layout, children: [
      { path: 'categorias', loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule), pathMatch: 'full' },
      { path: 'lugares', loadChildren: () => import ('../lugares/lugares-module').then(m => m.LugaresModule), pathMatch: 'full' },
      { path: 'galeria', loadChildren: () => import('../galeira/galeira-module').then(m => m.GaleiraModule), pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule { }
