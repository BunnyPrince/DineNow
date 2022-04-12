// Appery.io models
export interface $aio_empty_object {};
//
export interface DishesModel extends Array < DishModel > {}
export interface ProductModel {
    "img": string,
    "like": boolean,
    "name": string,
    "originalPrice": string,
    "price": string
}
export interface ProductsModel extends Array < ProductModel > {}
export interface DishModel {
    "description": string,
    "cal": string,
    "name": string,
    "rating": number,
    "picture": string,
    "price": string,
    "time": string,
    "fullDescription": string
}
//
export interface DineNowDB_tables_update_serviceResponse {
    "_updatedAt": string
}
//
interface __DineNowDB_tables_read_serviceResponse_sub_001 {}
export interface DineNowDB_tables_read_serviceResponse {
    "_createdAt": string,
    "acl": __DineNowDB_tables_read_serviceResponse_sub_001,
    "TableNumber": string,
    "_id": string,
    "_updatedAt": string
}
//
export interface restaurentsResponse {}
//
export interface DineNowDB_tables_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
interface __DineNowDB_Restaurent_list_serviceResponse_sub_002 {}
interface __DineNowDB_Restaurent_list_serviceResponse_sub_001 {
    "_id": string,
    "acl": __DineNowDB_Restaurent_list_serviceResponse_sub_002,
    "_createdAt": string,
    "_updatedAt": string,
    "Name": string
}
export interface DineNowDB_Restaurent_list_serviceResponse extends Array < __DineNowDB_Restaurent_list_serviceResponse_sub_001 > {}
//
interface __DineNowDB_tables_distinct_serviceResponse_sub_001 {}
export interface DineNowDB_tables_distinct_serviceResponse extends Array < __DineNowDB_tables_distinct_serviceResponse_sub_001 > {}
//
interface __DineNowDB_tables_query_serviceResponse_sub_002 {}
interface __DineNowDB_tables_query_serviceResponse_sub_001 {
    "_createdAt": string,
    "TableNumber": string,
    "acl": __DineNowDB_tables_query_serviceResponse_sub_002,
    "_id": string,
    "_updatedAt": string
}
export interface DineNowDB_tables_query_serviceResponse extends Array < __DineNowDB_tables_query_serviceResponse_sub_001 > {}
//
interface __DineNowDB_tables_list_serviceResponse_sub_002 {}
interface __DineNowDB_tables_list_serviceResponse_sub_001 {
    "_updatedAt": string,
    "acl": __DineNowDB_tables_list_serviceResponse_sub_002,
    "_id": string,
    "TableNumber": string,
    "_createdAt": string
}
export interface DineNowDB_tables_list_serviceResponse extends Array < __DineNowDB_tables_list_serviceResponse_sub_001 > {}
//
export interface DineNowDB_Restaurent_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
export interface DineNowDB_tables_delete_serviceResponse {}
//
export interface DineNowDB_tables_batch_update_serviceResponse {
    "_updatedAt": string
}
//
interface __GetCitiesResponse_sub_001 {
    "name": string
}
export interface GetCitiesResponse extends Array < __GetCitiesResponse_sub_001 > {}
//
interface __GetCities_SearchResponse_sub_001 {
    "name": string
}
export interface GetCities_SearchResponse extends Array < __GetCities_SearchResponse_sub_001 > {}