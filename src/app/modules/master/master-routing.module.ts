import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { AgentListComponent } from './components/agent/agent-list/agent-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'add-agent',
    pathMatch: 'full'
  },
  {
    path:'add-agent',
    component:AddAgentComponent
  },
  {
    path:'agent-list',
    component:AgentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
