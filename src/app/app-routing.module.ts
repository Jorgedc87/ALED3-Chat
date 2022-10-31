import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ErrorComponent } from './pages/error/error.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: IndexComponent},
    {path: 'inicio', component: IndexComponent},
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    {path: 'sobre-mi', component: AboutmeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'mi-perfil', component: ProfileComponent},
    {path: '**', component: ErrorComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
