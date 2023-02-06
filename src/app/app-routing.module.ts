import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ReferencesComponent } from './references/references.component';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
const routes: Routes = [
{
  path:'login',
  component: UserLoginComponent
},
{
  path:'',
  redirectTo: 'login',
  pathMatch: 'full'
},

{
  path:'home',
  component: HomeComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'news-feed',
  component: NewsFeedComponent
},
{
  path:'profile',
  component: ProfileDetailComponent
},
{
  path:'references',
  component: ReferencesComponent
},
{
  path:'showexpense',
  component: ShowExpenseComponent
},
{ path: 'articles', component: ResultComponentComponent },

{path:'new-profile', component: FriendProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
