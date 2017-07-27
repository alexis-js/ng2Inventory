import {NgModule} from '@angular/core';
import {ProductDetailGuard} from './product-guard.service';
import {ProductDetailComponent} from './product-detail.component';
import {ProductListComponent} from './product-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
