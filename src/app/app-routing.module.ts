import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  // {
  //   path:'sidebar',
  //   component:SidebarComponent
  // }
  {
    path:'',
    pathMatch:'full',
    redirectTo:'master'

  },
  {
    path:'master',
    loadChildren:()=>import('./modules/master/master.module').then(m=>m.MasterModule)
  },
  {
    path:'setting',
    loadChildren:()=>import('./setting/setting.module').then(m=>m.SettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
