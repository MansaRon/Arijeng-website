import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptComponent } from './opt.component';

const routes: Routes = [{ path: '', component: OptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptRoutingModule { }
