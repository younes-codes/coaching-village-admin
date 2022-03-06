import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from './create-user/create-user.component';
import {UsersComponent} from "./users/users.component";
import {GroupsComponent} from './groups/groups.component';
import {PlanningsComponent} from './plannings/plannings.component';
import {GroupComponent} from './groups/group/group.component';
import {PlanningComponent} from './plannings/planning/planning.component';
import {OverviewComponent} from './overview/overview.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {SeeUserComponent} from "./see-user/see-user.component";
import {DailyProgramComponent} from './plannings/daily-program/daily-program.component';
import {LoaderComponent} from './loader/loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

const appRoutes: Routes = [
    {path: '', component: OverviewComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path: 'users', component: UsersComponent},
    {path: 'groups', component: GroupsComponent},
    {path: 'plannings', component: PlanningsComponent},
    {path: 'update-user/:userId', component: UpdateUserComponent},
    {path: 'see-user/:userId', component: SeeUserComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        UsersComponent,
        CreateUserComponent,
        GroupsComponent,
        PlanningsComponent,
        GroupComponent,
        PlanningComponent,
        OverviewComponent,
        UpdateUserComponent,
        SeeUserComponent,
        DailyProgramComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
