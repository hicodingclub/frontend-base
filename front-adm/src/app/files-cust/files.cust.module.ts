import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FilesCoreModule } from '../files/files.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    FilesCoreModule,
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
export class FilesCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Aug 03 2020 15:28:31 GMT-0700 (Pacific Daylight Time)

import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import {
  FilesCoreModule
} from '../files/files.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FilesCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class FilesCustModule {}**** End of recent updates.<<<*/
