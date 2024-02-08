import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { AgentListComponent } from './components/agent/agent-list/agent-list.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDirective } from './services/directive.directive';



@NgModule({
  declarations: [
    AgentListComponent,
    AddAgentComponent,
    DirectiveDirective
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MasterModule { }
