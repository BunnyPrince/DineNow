import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './Home/Home.module#HomePageModule',
    },
    {
        path: 'restaurent',
        loadChildren: './Restaurent/Restaurent.module#RestaurentPageModule',
    },
    {
        path: 'dish',
        loadChildren: './Dish/Dish.module#DishPageModule',
    },
    {
        path: 'tabs',
        loadChildren: './Tabs/Tabs.module#TabsPageModule',
    },
    {
        path: 'restauinfo',
        loadChildren: './RestauInfo/RestauInfo.module#RestauInfoPageModule',
    },
    {
        path: 'menu',
        loadChildren: './Menu/Menu.module#MenuPageModule',
    },
    {
        path: 'reserved',
        loadChildren: './Reserved/Reserved.module#ReservedPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}