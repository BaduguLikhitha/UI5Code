sap.ui.define([
'sap/ui/core/mvc/Controller'
], function(Ocontroller){
    "use strict";
    return Ocontroller.extend("root.controller.main" ,{
        onPress: function(){
            alert("This is ui5 application");
        }

    });

});