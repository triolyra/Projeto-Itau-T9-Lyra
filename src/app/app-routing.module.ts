import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { InclusaoPenhorComponent } from './inclusao-penhor/inclusao-penhor.component';
import { OperacaoComponent } from './operacao/operacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'operacao', component: OperacaoComponent },
  { path: 'garantia', component: GarantiaComponent },
  { path: 'inclusao-penhor', component: InclusaoPenhorComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
