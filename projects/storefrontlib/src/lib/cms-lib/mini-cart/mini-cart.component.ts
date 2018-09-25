import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../cms/store';
import * as fromCartStore from '../../cart/store';
import { CartService } from '../../cart/services/cart.service';

import { CmsModuleConfig } from '../../cms/cms-module-config';
import { AbstractCmsComponent } from '../../cms/components/abstract-cms-component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'y-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCartComponent extends AbstractCmsComponent {
  cart$: Observable<any>;
  entries$: Observable<any>;

  showProductCount: number;
  banner: any;

  constructor(
    protected cd: ChangeDetectorRef,
    protected store: Store<fromStore.CmsState>,
    protected config: CmsModuleConfig,
    protected dialog: MatDialog,
    protected cartService: CartService
  ) {
    super(cd, store, config);
  }

  protected fetchData() {
    this.showProductCount = +this.component.shownProductCount;
    this.banner = this.component.lightboxBannerComponent;

    this.cart$ = this.store.select(fromCartStore.getActiveCart);
    this.entries$ = this.store.select(fromCartStore.getEntries);

    super.fetchData();
  }
}
