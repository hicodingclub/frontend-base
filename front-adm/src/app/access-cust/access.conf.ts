import { Routes } from '@angular/router';

import { AccessComponent } from '../access/access.component';

//Import routing paths
import { 
  musergroupRoutingCorePath,
  mpubmoduleRoutingCorePath,
  mpubaccessRoutingCorePath,
} from '../access/access-routing.core.path';

export const AccessCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'access',

    component: AccessComponent,
    children: [
      {path: '',  redirectTo: 'musergroup', pathMatch: 'full'},

      { path: 'musergroup',
        children: musergroupRoutingCorePath,
        data: {mraLevel: 1, item: 'musergroup'}
      },
      { path: 'mpubmodule',
        children: mpubmoduleRoutingCorePath,
        data: {mraLevel: 1, item: 'mpubmodule'}
      },
      { path: 'mpubaccess',
        children: mpubaccessRoutingCorePath,
        data: {mraLevel: 1, item: 'mpubaccess'}
      },
    ]
  },
];

import { AccessRoutingCustPath } from './access-routing.cust.path';

export const AccessRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'access/cust',

    children: AccessRoutingCustPath,
  },
];/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 11:29:24 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AccessComponent } from '../access/access.component';

//Import routing paths
import { 
  musergroupRoutingCorePath,
  mpubmoduleRoutingCorePath,
  mpubaccessRoutingCorePath,
} from '../access/access-routing.core.path';

export const AccessCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'access',

    component: AccessComponent,
    children: [
      {path: '',  redirectTo: 'musergroup', pathMatch: 'full'},

      { path: 'musergroup',
        children: musergroupRoutingCorePath,
        data: {mraLevel: 1, item: 'musergroup'}
      },
      { path: 'mpubmodule',
        children: mpubmoduleRoutingCorePath,
        data: {mraLevel: 1, item: 'mpubmodule'}
      },
      { path: 'mpubaccess',
        children: mpubaccessRoutingCorePath,
        data: {mraLevel: 1, item: 'mpubaccess'}
      },
    ]
  },
];

import { AccessRoutingCustPath } from './access-routing.cust.path';

export const AccessRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'access/cust',

    children: AccessRoutingCustPath,
  },
];**** End of recent updates.<<<*/
