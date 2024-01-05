sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    'sap/ui/model/xml/XMLModel'
    //class (it with dots)--> module (replace dot with forward slash) 
], function(oJSONModel,oResourceModel,XMLModel) {
    'use strict';
    return {
        createJsonModel: function(filepath){
            // var oModel = new sap.ui.model.json.JSONModel( ); 
            var oModel = new oJSONModel;
            
            // oModel.setData();
            oModel.loadData(filepath);  
            return oModel;    
        },
        createResourceModel: function(){
            var oRmodel = new oResourceModel({
                bundleUrl : "i18n/i18n_te.properties"
            });
            return oRmodel;
        },
        createXMLModel: function(filepath){
        var oxmodel = new XMLModel;
        oxmodel.loadData(filepath);
        return oxmodel;
        }
    
      
    }
   
});