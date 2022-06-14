import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { UpdateComponent } from './Components/update/update.component';
import { URLsComponent } from './Components/urls/urls.component';

const routes: Routes = [
  {path:'',component:BodyComponent },
  {path:'URls',component:URLsComponent },
 {path:'URls/:Uid',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
