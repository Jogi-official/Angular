import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponentt } from './shopping-list/shopping-list.component';
import {DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { ServersService } from './servers/server.service';
import { Routes , RouterModule } from '@angular/router';



// import { CockpitComponent } from './cockpit/cockpit.component';
// import { ServerElementComponent } from './server-element/server-element.component';
// import { GameControlComponent } from './game-control/game-control.component';
// import { OddComponent } from './odd/odd.component';
// import { EvenComponent } from './even/even.component';
// import { Sec7Component } from './sec7/sec7.component';
// import { BasicHighlightDirective } from './sec7/basic-highlight/basic-highlight.directive';
// import { BetterHighlightDirective } from './sec7/better-highlight/better-highlight.directive';
// import { UnlessDirective } from './sec7/unless.directive';

// import { CwhComponent } from './cwh/cwh.component';
// import { TodoComponent } from './cwh/todo/todo.component';
// import { TodoItemComponent } from './cwh/todo-item/todo-item.component';
// import { AddTodoComponent } from './cwh/add-todo/add-todo.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';

  // CwhComponent,
    // TodoComponent,
    // TodoItemComponent,
    // AddTodoComponent
    // ServersComponent,
    // ServerComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent,
     // CockpitComponent,
    // ServerElementComponent,
    // GameControlComponent,
    // OddComponent,
    // EvenComponent,
    // Sec7Component,
    // BasicHighlightDirective,
    // BetterHighlightDirective,
    // UnlessDirective,

const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'users' , component : UsersComponent},
  {path : 'servers' , component : ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    ShoppingListComponentt,
    DropdownDirective,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService , ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
