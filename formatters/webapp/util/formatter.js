sap.ui.define([
    "sap/ui/core/format/NumberFormat",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/date/UI5Date"
], function(oNumberFormat,DateFormat,UI5Date) {
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
        
        toDateFormat: function(dateofSale){
            debugger;
          
            if(dateofSale){
            // var DateFormat = oDateFormat.getDateInstance({
            //     format: "dd/mm/yyyy"
            // });
            var oDateFormat = DateFormat.getDateInstance({
                format: "yMMMd"
            });
    

           // var oDate = new Date(dateofSale);

            
           return oDateFormat.format(oDate);

        }

        
        
        
        // oDateFormat.format(UI5Date.getInstance());
        // return oDateFormat.format(oDate);
            
        }
    }
});