import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OperacaoComponent } from './operacao/operacao.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InclusaoPenhorComponent } from './inclusao-penhor/inclusao-penhor.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OperacaoComponent,
    GarantiaComponent,
    FormularioComponent,
    InclusaoPenhorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
