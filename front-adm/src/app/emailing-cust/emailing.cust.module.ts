import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EmailingCoreModule } from '../emailing/emailing.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    EmailingCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class EmailingCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 11:29:23 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EmailingCoreModule } from '../emailing/emailing.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    EmailingCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class EmailingCustModule { }
**** End of recent updates.<<<*/
