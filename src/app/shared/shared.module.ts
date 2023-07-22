import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { MaterialComponentsModule } from './material-components.module';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
