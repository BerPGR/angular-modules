import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleiraRoutingModule } from './galeira-routing-module';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [GaleriaComponent],
  imports: [CommonModule, GaleiraRoutingModule],
})
export class GaleiraModule {}
