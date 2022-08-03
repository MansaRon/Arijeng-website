import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/login/login.module').then(m => m.LoginModule) },
  { path: 'orders', loadChildren: () => import('./admin/main-view/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'view-order', loadChildren: () => import('./admin/main-view/view-order/view-order.module').then(m => m.ViewOrderModule) },
  { path: 'sign-up', loadChildren: () => import('./home/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'reset-password', loadChildren: () => import('./home/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'sidebar', loadChildren: () => import('./admin/sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'main-view', loadChildren: () => import('./admin/main-view/main-view.module').then(m => m.MainViewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }