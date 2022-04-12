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
    DishesModel
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Menu.html',
    selector: 'page-menu',
    styleUrls: ['Menu.scss']
})
export class Menu {
    public dishes: DishesModel = [{
            "name": "Burger",
            "description": "Close-up of home made tasty burger on wooden table",
            "price": "$45.00",
            "picture": "assets/images/burger.jpg",
            "fullDescription": "House-made 80/20 blend ground beef & local goetta, house-made bacon jam, arugula, green olive-garlic aioli, heirloom tomato, fried egg, Sixteen Bricks bun",
            "rating": 4.8,
            "cal": "150 Kcal",
            "time": "5-10 min"
        },
        {
            "name": "Bruschetta",
            "description": "Seasoning tasty vegetarian bruschetta with basil and garlic",
            "price": "$30.00",
            "picture": "assets/images/bruschetta.jpg",
            "rating": 4.5,
            "cal": "100 Kcal",
            "time": "4-8 min",
            "fullDescription": "Some description"
        },
        {
            "name": "Pancakes",
            "description": "Stack of Pancakes with Maple Syrup and Fresh Blueberries",
            "price": "$25.00",
            "picture": "assets/images/pancake.jpg",
            "rating": 4.9,
            "cal": "120 Kcal",
            "time": "5-6 min",
            "fullDescription": "Some description"
        }
    ];
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
        this.pageIonViewDidEnter__j_20();
    }
    async pageIonViewDidEnter__j_20(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        (() => {
            let mappingDataj_22 = typeof mappingData.j_22 === "function" ? mappingData.j_22() : [];
            mappingData.j_22 = () => {
                let parentArray = this.$aio_mappingHelper.getSubdata(this.dishes, [], []);
                mappingDataj_22.splice(parentArray.length);
                parentArray.forEach((v, i) => {
                    mappingDataj_22[i] = mappingDataj_22[i] || {};
                    let result__j_22: any = mappingDataj_22[i];
                    result__j_22.itemData = v;
                    result__j_22.itemDataParent = parentArray;
                    result__j_22.j_25__imageSrc = this.$aio_mappingHelper.getSubdata(v, ["picture"]);
                    result__j_22.j_24__text = this.$aio_mappingHelper.getSubdata(v, ["name"]);
                    result__j_22.j_26__text = this.$aio_mappingHelper.getSubdata(v, ["description"]);
                    result__j_22.j_28__text = this.$aio_mappingHelper.getSubdata(v, ["price"]);
                });
                return mappingDataj_22;
            };
        })();
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async cardClick__j_22(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Set storage variable */
        this.Apperyio.data.setVariable("dish", (currentItem || {}).itemData);
        /* Navigate to Page */
        this.Apperyio.navigateTo('Dish');
    }
    async buttonbackClick__j_32(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('RestauInfo');
    }
}