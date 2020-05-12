import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CiberHealthFakeApplicationSharedModule } from 'app/shared/shared.module';
import { CiberHealthFakeApplicationCoreModule } from 'app/core/core.module';
import { CiberHealthFakeApplicationAppRoutingModule } from './app-routing.module';
import { CiberHealthFakeApplicationHomeModule } from './home/home.module';
import { CiberHealthFakeApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CiberHealthFakeApplicationSharedModule,
    CiberHealthFakeApplicationCoreModule,
    CiberHealthFakeApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CiberHealthFakeApplicationEntityModule,
    CiberHealthFakeApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class CiberHealthFakeApplicationAppModule {}
