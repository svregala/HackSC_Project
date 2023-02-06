import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ReferencesComponent } from './references/references.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { ExpenseButtonComponent } from './expense-button/expense-button.component';
import { HttpClientModule } from '@angular/common/http';
//import { AccumulationChartModule } from '@syncfusion/ej2-ng-charts';
//import { PieSeriesService} from '@syncfusion/ej2-ng-charts';
//import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import { ResultComponentComponent } from './result-component/result-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailComponent,
    UserLoginComponent,
    HomeComponent,
    RegisterComponent,
    NewsFeedComponent,
    ReferencesComponent,
    ShowExpenseComponent,
    ExpenseButtonComponent,
    FriendProfileComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    HttpClientModule
    //AccumulationChartModule
  ],
  providers: [],//[PieSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
