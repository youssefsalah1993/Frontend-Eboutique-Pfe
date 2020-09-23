import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { UtilisateurService } from './services/utilisateur.service';
import { VilleListComponent } from './components/ville-list/ville-list.component';
import { VilleService } from './services/ville.service';
import { TypeUsersListComponent } from './components/type-users-list/type-users-list.component';
import { TypeUserService } from './services/type-user.service';
import { BoutiqueListComponent } from './components/boutique-list/boutique-list.component';
import { BoutiqueService } from './services/boutique.service';
import { VenteListComponent } from './components/vente-list/vente-list.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { ModeleListComponent } from './components/modele-list/modele-list.component';
import { CategorieService } from './services/categorie.service';
import { ModeleService } from './services/modele.service';
import { MarqueListComponent } from './components/marque-list/marque-list.component';
import { MarqueService } from './services/marque.service';
import { WelcomeCategoriePopulComponent } from './components/welcome-page/welcome-categorie-popul/welcome-categorie-popul.component';
import { WelcomeVillePopulComponent } from './components/welcome-page/welcome-ville-popul/welcome-ville-popul.component';
import {Routes, RouterModule} from '@angular/router'; 
import { ClientAuthFormComponent } from './components/client-auth-form/client-auth-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { VillesDropListComponent } from './components/welcome-page/villes-drop-list/villes-drop-list.component';
import { SearchItemsComponent } from './components/welcome-page/search-items/search-items.component';
import { AnnouncesComponent } from './components/announces/announces.component';
import { AnnouncesGridComponent } from './components/announces/announces-grid/announces-grid.component';
import { CategorieDropListComponent } from './components/welcome-page/categorie-drop-list/categorie-list.component';
import { AnnouncesDetailsComponent } from './components/announces/announces-details/announces-details.component';
import { AnnouncesDetailsBoutiquecardComponent } from './components/announces/announces-details/announces-details-boutiquecard/announces-details-boutiquecard.component';
import { AnnouncesDetailsVentecardComponent } from './components/announces/announces-details/announces-details-ventecard/announces-details-ventecard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BoutiquesComponent } from './components/boutiques/boutiques.component';
import { BoutiqueGridComponent } from './components/boutiques/boutique-grid/boutique-grid.component';
import { SearshbarBoutiqueComponent } from './components/boutiques/searchbar-boutique/searshbar-boutique.component';
import { BoutiquesDetailsComponent } from './components/boutiques/boutiques-details/boutiques-details.component';
import { BoutiquesDetailsCardComponent } from './components/boutiques/boutiques-details/boutiques-details-card/boutiques-details-card.component';
import { BoutiquesDetailsVentescardComponent } from './components/boutiques/boutiques-details/boutiques-details-ventescard/boutiques-details-ventescard.component';
import { VilleForBoutiqueDropListComponent } from './components/boutiques/ville-for-boutique-drop-list/ville-for-boutique-drop-list.component';
import { DeposeAnnonceComponent } from './components/announces/depose-annonce/depose-annonce.component';
import { FormsModule } from '@angular/forms';
// import {FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestsComponent } from './components/tests/tests.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CreateBoutiqueComponent } from './components/boutiques/create-boutique/create-boutique.component';
import { HttpInterceptorService } from './services/http-interceptor.service';







const routes : Routes = [
  {path : 'index',component: WelcomePageComponent },

  //routing for tests page
  {path : 'tests',component: TestsComponent },

  // routing to client login page canActivate: [ClientAuthFormComponent]
  {path : 'connection',component: ClientAuthFormComponent, },

  // routing from inscri to client login page 
  {path : 'connection/:msg',component: ClientAuthFormComponent },

  // routing to client login page 
  {path : 'inscription',component: InscriptionComponent },

  // routing to  list of ventes 
  {path : 'announces',component: AnnouncesComponent},

  // routing to  list of boutiques 
  {path : 'boutiques',component: BoutiquesComponent},

  // routing to  list of boutiques 
  {path : 'boutiques/add',component: CreateBoutiqueComponent},

  // routing to  list of ventes annonce detils 
  {path : 'announces/details/:id',component: AnnouncesDetailsComponent}, 

  // routing to  list of boutiques annonce detils 
  {path : 'boutiques/details/:id',component: BoutiquesDetailsComponent},
  
  // routing  to depose  annonces  
  {path : 'announces/depose',component: DeposeAnnonceComponent},

  //{path : '#carousel-example-1z',component: null}, 

  // routing to searsh of ventes 
  {path : 'announces/search/:keyword',component: AnnouncesComponent },

  // routing to search of boutiques 
  {path : 'boutiques/search/:keyword',component: BoutiquesComponent },

  // routing to annomnce of ventes per ville 
  {path : 'announces/searchV/:id',component: AnnouncesComponent },

   // routing to boutique per ville 
   {path : 'boutiques/searchV/:id',component: BoutiquesComponent },

  // routing to annomnce of ventes per categorie 
  {path : 'announces/searchC/:idC',component: AnnouncesComponent },

  {path: 'logout', component: WelcomePageComponent},
  
  {path : '' ,redirectTo : '/index',pathMatch:'full' },
  //{path : '**' ,redirectTo : '/index',pathMatch:'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurListComponent,
    VilleListComponent,
    VillesDropListComponent,
    TypeUsersListComponent,
    BoutiqueListComponent,
    VenteListComponent,
    CategorieListComponent,
    ModeleListComponent,
    MarqueListComponent,
    WelcomeCategoriePopulComponent,
    WelcomeVillePopulComponent,
    WelcomePageComponent,
    SearchItemsComponent,
    AnnouncesComponent,
    AnnouncesGridComponent,
    CategorieDropListComponent,
    AnnouncesDetailsComponent,
    AnnouncesDetailsBoutiquecardComponent,
    AnnouncesDetailsVentecardComponent,
    BoutiquesComponent,
    BoutiqueGridComponent,
    SearshbarBoutiqueComponent,
    BoutiquesDetailsComponent,
    BoutiquesDetailsCardComponent,
    BoutiquesDetailsVentescardComponent,
    VilleForBoutiqueDropListComponent,
    DeposeAnnonceComponent,
    TestsComponent,
    InscriptionComponent,
    CreateBoutiqueComponent,
    ClientAuthFormComponent
   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ScrollingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule
    // FormControl
    
  ],
  exports: [RouterModule],

  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true},
    
    UtilisateurService,VilleService,TypeUserService,
              BoutiqueService,CategorieService,ModeleService,
              MarqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
