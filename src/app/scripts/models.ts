/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "String": {
        "type": "string"
    },
    "DishesModel": {
        "type": "array",
        "items": [{
            "type": "DishModel"
        }]
    },
    "ProductModel": {
        "type": "object",
        "properties": {
            "img": {
                "type": "string"
            },
            "like": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "originalPrice": {
                "type": "string"
            },
            "price": {
                "type": "string"
            }
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "ProductsModel": {
        "type": "array",
        "items": [{
            "type": "ProductModel"
        }]
    },
    "DishModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "cal": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "rating": {
                "type": "number"
            },
            "picture": {
                "type": "string"
            },
            "price": {
                "type": "string"
            },
            "time": {
                "type": "string"
            },
            "fullDescription": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Observable": {
        "type": "Observable"
    },
    "DineNowDB_tables_update_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables/{_id}"
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "TableNumber": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "full_object": {
                                "type": "string",
                                "default": "false"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_updatedAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_read_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables/{_id}"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "acl": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "TableNumber": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "restaurents": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d53afa0c-02f7-4852-8ce2-c36ab5d02619"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": ""
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "TableNumber": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "full_object": {
                                "type": "string",
                                "default": "false"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_Restaurent_list_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/Restaurent"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "limit": {
                                "type": "string"
                            },
                            "where": {
                                "type": "string"
                            },
                            "count": {
                                "type": "string"
                            },
                            "proj": {
                                "type": "string"
                            },
                            "sort": {
                                "type": "string"
                            },
                            "skip": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "_id": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "Name": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_distinct_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables/distinct/{column_name}"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "where": {
                                "type": "object",
                                "properties": {
                                    "TableNumber": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "column_name": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {}
                        }]
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_query_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables/query"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "proj": {
                                "type": "object",
                                "properties": {}
                            },
                            "sort": {
                                "type": "string"
                            },
                            "skip": {
                                "type": "number",
                                "default": null
                            },
                            "where": {
                                "type": "object",
                                "properties": {
                                    "TableNumber": {
                                        "type": "string"
                                    }
                                }
                            },
                            "limit": {
                                "type": "number",
                                "default": null
                            },
                            "count": {
                                "type": "boolean",
                                "default": null
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "_createdAt": {
                                    "type": "string"
                                },
                                "TableNumber": {
                                    "type": "string"
                                },
                                "acl": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "_updatedAt": {
                                    "type": "string"
                                }
                            }
                        }]
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_list_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "where": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "_id": {
                                            "type": "string"
                                        },
                                        "TableNumber": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_Restaurent_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/Restaurent"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "Name": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "full_object": {
                                "type": "string",
                                "default": "false"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_delete_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables/{_id}"
            },
            "method": {
                "type": "string",
                "default": "delete"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "DineNowDB_tables_batch_update_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tables"
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "update": {
                                "type": "object",
                                "properties": {
                                    "TableNumber": {
                                        "type": "string"
                                    }
                                }
                            },
                            "where": {
                                "type": "object",
                                "properties": {
                                    "TableNumber": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{DineNowDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_updatedAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "GetCities": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }]
                    }
                }
            }
        }
    },
    "GetCities_Search": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }]
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */