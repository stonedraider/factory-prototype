import { PropertiesComponent } from './properties/properties.component';
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import * as betriebspunkteConfig from './configs/Betriebspunkte.json';
import * as ereignismeldungenConfig from './configs/Ereignismeldungen.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  betriebspunkte: any = (betriebspunkteConfig as any).default;
  ereignismeldungen: any = (ereignismeldungenConfig as any).default;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(PropertiesComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges;
    ref.instance.config = this.betriebspunkte;
    // ref.instance.config = this.ereignismeldungen;
  }

}
