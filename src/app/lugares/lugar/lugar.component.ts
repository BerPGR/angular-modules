import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from "@angular/forms"
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.css',
})
export class LugarComponent implements OnInit {

  camposForm: FormGroup
  categorias: Categoria[] = []

  constructor(
    private categoriaService: CategoriaService,
    private service: LugarService,
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: categorias => this.categorias = categorias
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched()
    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log("Cadastrado com sucesso: ", lugar)
          this.camposForm.reset()
        },
        error: (erro) => console.error("Erros: ", erro)
      })
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const campo = this.camposForm.get(fieldName)
    return (campo?.invalid && campo?.touched && campo?.errors?.['required']) || false;
  }
}
