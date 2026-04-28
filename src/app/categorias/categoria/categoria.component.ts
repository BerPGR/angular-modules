import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.css',
})
export class CategoriaComponent {

  camposForm: FormGroup;

  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched()
    if (this.camposForm.valid) {
      this.service.save(this.camposForm.value).subscribe({
        next: (categoria) => {
          this.camposForm.reset()
        },
        error: erro => console.log("deu ruim", erro)
      })
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const campo = this.camposForm.get(fieldName)
    return (campo?.invalid && campo?.touched && campo?.errors?.['required']) || false;
  }
}
