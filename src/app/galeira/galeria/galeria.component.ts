import { Component, OnInit } from '@angular/core';
import { LugarClass } from '../../lugares/lugar.class';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria.component',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent implements OnInit {

  lugares: LugarClass[] = []
  categoriasFiltro: Categoria[] = []

  constructor(
    private http: HttpClient,
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: cats => this.categoriasFiltro = cats
    })

    this.lugarService.obterTodos().subscribe({
      next: lugares => this.lugares = lugares
    })
  }

  getTotalEstrelas(lugar: LugarClass): string {
    return '&#9733;'.repeat(parseInt(lugar.avaliacao!) || 0)
  }
}
