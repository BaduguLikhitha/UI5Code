sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("sap.ui5.ss.product.productlistapp.view1",{

        onPress: function(){
            alert("Button should be displayed");
        }
        
    })    
});