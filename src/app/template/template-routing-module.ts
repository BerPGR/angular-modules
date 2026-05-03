import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { GaleiraModule } from '../galeira/galeira-module';

const routes: Routes = [
  {
    path: '', component: Layout, children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule),
        pathMatch: 'full',
        data: {
          titulo: "Categorias",
          subtitulo: "Realizar o cadastro de novas categorias"
        }
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares-module').then(m => m.LugaresModule),
        pathMatch: 'full',
        data: {
          titulo: "Lugares",
          subtitulo: "Realizar o cadastro de novos lugares"
        }
      },
      {
        path: 'galeria',
        loadChildren: () => import('../galeira/galeira-module').then(m => m.GaleiraModule),
        pathMatch: 'full',
        data: {
          titulo: "Galeria",
          subtitulo: "Lista de lugares legais"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule { }
