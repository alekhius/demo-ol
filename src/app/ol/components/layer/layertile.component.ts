import {
    Component, OnDestroy, OnInit, Input, Optional, OnChanges,
    SimpleChanges
  } from '@angular/core';
  //import { source } from 'openlayers';
  import source from 'ol/source/Source';
  import layer from 'ol/layer/Layer';
  import TileSource from 'ol/source/Tile';
  import { MapComponent } from '../map.component';
  import { LayerComponent } from './layer.component';
  import { LayerGroupComponent } from './layergroup.component';
  import TileLayer from 'ol/layer/Tile';
  
  @Component({
    selector: 'aol-layer-tile',
    template: `<ng-content></ng-content>`
  })
  export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    public source:TileSource;
  
    @Input() preload?: number;
    @Input() useInterimTilesOnError?: boolean;
  
    constructor(map: MapComponent,
                @Optional() group?: LayerGroupComponent) {
      super(group || map);
    }
  
    ngOnInit() {
      // console.log('creating ol.layer.Tile instance with:', this);
      this.instance = new TileLayer(this);
      super.ngOnInit();
    }
  
    ngOnChanges(changes: SimpleChanges) {
      super.ngOnChanges(changes);
    }
  }