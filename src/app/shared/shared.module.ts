import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { MaterialComponentsModule } from './material-components.module';
import { PagePresentationComponent } from './components/page-presentation/page-presentation.component';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    PagePresentationComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    PagePresentationComponent
  ]
})
export class SharedModule { }
