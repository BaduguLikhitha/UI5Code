sap.ui.define([
    "sap/ui/core/format/NumberFormat",
    "sap/ui/core/format/DateFormat"
], function(oNumberFormat,DateFormat) {
    'use strict';
    return {
        convert2UpperCase: function(oInput){
            if(oInput)
            {
            return oInput.toUpperCase(); }
        },
        toFormattedAmount: function(input1, input2){
            var oCurrencyFormat = oNumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(input1, input2);
        },
        
        toDateFormat: function(){
          
        //     if(dateofSale){
        //     var DateFormat = oDateFormat.getDateInstance({
        //         format: "dd/mm/yyyy"
        //     });

        //     var oDate = new Date(dateofSale);

            
        //    return DateFormat.format(oDate);

        // }

        var oDateFormat = DateFormat.getDateInstance({
            format: "yMMMd"
        });

        
        
        oDateFormat.format(UI5Date.getInstance());

            
        }
    }
});