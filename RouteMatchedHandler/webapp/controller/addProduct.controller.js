sap.ui.define([
    'st/b33/simpleApp/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function(BaseController,JSONModel,MessageToast) {
    'use strict';
    return BaseController.extend("st.b33.simpleApp.controller.addProduct",{
       
        onInit: function(){
            var oJSONModel = new JSONModel();
           
            oJSONModel.setData({

                ProductSet : {
                    "PRODUCT_ID" : "HT-123",
                    "TYPE_CODE" : "PR",
                    "CATEGORY" : "Notebooks",
                    "NAME" : "Science NoteBooks",
                    "DESCRIPTION" : "Notebooks are very useful for Writing purpose",
                    "SUPPLIER_ID" : "0100000046",
                    "SUPPLIER_NAME" : "SAP",
                    "WEIGHT_MEASURE" : "4.200 ",
                    "MEASURE_UNIT" : "EA",
                   
                }


            });
            this.getView().setModel(oJSONModel,"prod");

    

        },
        onSave: function(){

            debugger;

            var payload = this.getView().getModel("prod").getProperty("/ProductSet");
            //get Default model odata model:manifest.json
            var oDataModel = this.getView().getModel();
            //post data to OData services with create method
            oDataModel.create('/ProductSet', payload ,{
                success: function(){
                    MessageToast.show("Data created successfully");

                },
                error: function(){
                    MessageToast.show("Data not created successfully");

                }

            }) 


        }
        
    })
});