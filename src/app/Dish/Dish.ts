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
    templateUrl: 'Dish.html',
    selector: 'page-dish',
    styleUrls: ['Dish.scss']
})
export class Dish {
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
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_34();
    }
    async pageIonViewWillEnter__j_34(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        mappingData.j_56__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["name"]);
        mappingData.j_36__imageSrc = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["picture"]);
        mappingData.j_37__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["description"]);
        mappingData.j_39__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["price"]);
        mappingData.j_40__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["fullDescription"]);
        mappingData.j_45__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["rating"]);
        mappingData.j_48__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["cal"]);
        mappingData.j_51__text = () => this.$aio_mappingHelper.getServiceDataValue("dish", ["time"]);
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
}