import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from './scripts/apperyio/apperyio.module';
import {
    ApperyioDeclarablesModule
} from './scripts/apperyio/declarables/apperyio.declarables.module';
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomComponentsModule
} from './scripts/custom-components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as GetCities
} from './scripts/custom/GetCities_Impl';
import {
    ExportedClass as GetCities_Search
} from './scripts/custom/GetCities_Impl_Search';
import {
    ExportedClass as DineNowDB_Restaurent_list_service
} from './scripts/services/DineNowDB_Restaurent_list_service';
import {
    ExportedClass as restaurents
} from './scripts/services/restaurents';
import {
    ExportedClass as DineNowDB_Restaurent_create_service
} from './scripts/services/DineNowDB_Restaurent_create_service';
import {
    ExportedClass as DineNowDB_tables_update_service
} from './scripts/services/DineNowDB_tables_update_service';
import {
    ExportedClass as DineNowDB_tables_read_service
} from './scripts/services/DineNowDB_tables_read_service';
import {
    ExportedClass as DineNowDB_tables_create_service
} from './scripts/services/DineNowDB_tables_create_service';
import {
    ExportedClass as DineNowDB_tables_distinct_service
} from './scripts/services/DineNowDB_tables_distinct_service';
import {
    ExportedClass as DineNowDB_tables_query_service
} from './scripts/services/DineNowDB_tables_query_service';
import {
    ExportedClass as DineNowDB_tables_list_service
} from './scripts/services/DineNowDB_tables_list_service';
import {
    ExportedClass as DineNowDB_tables_delete_service
} from './scripts/services/DineNowDB_tables_delete_service';
import {
    ExportedClass as DineNowDB_tables_batch_update_service
} from './scripts/services/DineNowDB_tables_batch_update_service';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
var getIonicModuleConfig, getIonicStorageModuleConfig;
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot((typeof getIonicModuleConfig === "function") ? getIonicModuleConfig() : undefined),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot((typeof getIonicStorageModuleConfig === "function") ? getIonicStorageModuleConfig() : undefined),
        AppRoutingModule
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        GetCities,
        GetCities_Search,
        DineNowDB_Restaurent_list_service,
        restaurents,
        DineNowDB_Restaurent_create_service,
        DineNowDB_tables_update_service,
        DineNowDB_tables_read_service,
        DineNowDB_tables_create_service,
        DineNowDB_tables_distinct_service,
        DineNowDB_tables_query_service,
        DineNowDB_tables_list_service,
        DineNowDB_tables_delete_service,
        DineNowDB_tables_batch_update_service,
    ]
})
export class AppModule {}