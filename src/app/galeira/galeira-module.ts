import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleiraRoutingModule } from './galeira-routing-module';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GaleriaComponent],
  imports: [CommonModule, GaleiraRoutingModule, FormsModule],
})
export class GaleiraModule {}
