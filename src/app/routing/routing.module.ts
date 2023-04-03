import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Temporal duplicacion componentes
 */
import { ChildrenComponent } from '../children/children.component';
import { AddMessagesComponent } from '../add-messages/add-messages.component';
import { ListMessagesComponent } from '../list-messages/list-messages.component';

import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  { path: 'children' , component: ChildrenComponent},
  { path: 'add' , component: AddMessagesComponent},
  { path: 'list/:route' , component: ListMessagesComponent},
  {path: 'history',  loadChildren: ()=> import('../history/history.module').then(m=> m.HistoryModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
