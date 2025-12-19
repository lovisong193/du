import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { BtnLayoutComponent } from './btn-layout/btn-layout.component';
import { SubComponent } from './btn-layout/sub/sub.component';
import { YouLayoutComponent } from './btn-layout/you-layout/you-layout.component';
import { StuLayoutModule } from './stu/stu-layout/stu-layout.module';
import { AnotherLayoutComponent } from './stu/another-layout/another-layout.component';
import { DifHeaderComponent } from './my-share/dif-header/dif-header.component';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
    ],
  },
  {
    path: 'home',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
    ],
  },
  {
    path: 'shorts',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: BtnLayoutComponent,
      },
    ],
  },
  {
    path: 'sub',
    component: MainlayoutComponent,
    children: [{ path: '', component: SubComponent }],
  },

  {
    path: 'you',
    component: MainlayoutComponent,
    children: [{ path: '', component: YouLayoutComponent }],
  },

  {
    path: 'stu',
    component: AnotherLayoutComponent,
    children: [{ path: '', component: AnotherLayoutComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
