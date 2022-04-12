export const constants = {
    /**
     * DineNowDB_settings
     * @property database_id       - 
     */
    DineNowDB_settings: {
        "database_id": "625213af2e22d7678b0ac0b7"
    },
    /**
     * Settings
     */
    Settings: {}
};
export const routes = {
    "Home": "home",
    "Restaurent": "restaurent",
    "Dish": "dish",
    "Tabs": "tabs",
    "RestauInfo": "restauinfo",
    "Menu": "menu",
    "AddRestaurent": "addrestaurent",
    "Reserved": "reserved",
};
export const pushSettings = {
    appID: '004dfc24-205d-4133-b1f6-0b4b39446236',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    baseSendUrl: 'https://api.appery.io/rest/push/msg',
    initOptions: {}
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");