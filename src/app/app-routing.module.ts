import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { ListRepositoryComponent} from './components/list-repository/list-repository.component'
import { CvComponent } from './components/cv/cv.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repo/:type', component: ListRepositoryComponent},
  {path: 'cv', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
