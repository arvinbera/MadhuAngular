import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './Page/User/user-edit/user-edit.component';
import { UserListComponent } from './Page/User/user-list/user-list.component';
import { UserLoginComponent } from './Page/User/user-login/user-login.component';
import { UserProfileComponent } from './Page/User/user-profile/user-profile.component';
import { UserComponent } from './Page/User/user/user.component';


const routes: Routes = [

  {
    path: "user", component: UserComponent,
  },

  {
    path: "user/list", component: UserListComponent
  },
  
  {
    path: "user/login", component: UserLoginComponent
  },
  
  {
    path: "user/profile", component: UserProfileComponent
  },
  {
    path: "user/edit",component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
