import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Restaurent.html',
    selector: 'page-restaurent',
    styleUrls: ['Restaurent.scss']
})
export class Restaurent {
    public cities: any;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_12();
    }
    async pageIonViewDidEnter__j_12(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_restaurent();
    }
    async button1Click__j_17(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('RestauInfo');
    }
    private $aio_dataServices = {
        "restaurent": "invokeService_restaurent"
    }
    invokeService_restaurent(cb ? : Function) {
        this.Apperyio.getService("DineNowDB_Restaurent_list_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let params = {};
                let headers = {};
                let __aio_tmp_val__: any;
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        (() => {
                            let mappingDataj_14 = typeof mappingData.j_14 === "function" ? mappingData.j_14() : [];
                            mappingData.j_14 = () => {
                                let parentArray = this.$aio_mappingHelper.getSubdata(res, [], []);
                                mappingDataj_14.splice(parentArray.length);
                                parentArray.forEach((v, i) => {
                                    mappingDataj_14[i] = mappingDataj_14[i] || {};
                                    let result__j_14: any = mappingDataj_14[i];
                                    result__j_14.itemData = v;
                                    result__j_14.itemDataParent = parentArray;
                                    result__j_14.j_16__text = this.$aio_mappingHelper.getSubdata(v, ["Name"]);
                                });
                                return mappingDataj_14;
                            };
                        })();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}