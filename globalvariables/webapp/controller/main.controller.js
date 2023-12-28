sap.ui.define([
    'root/controller/BaseController'
],function(oController){
    'use strict';
   return oController.extend("root.controller.main",{
//x : 399,
    onInit:function(){
   alert(this.x);
    },
    onBeforeRendering:function(){
        this.getView().byId("idinput").setValue(this.x);
    },
    onAfterRendering:function(){
        $("#idview--idform").fadeOut(5000).fadeIn(5000);
//         $("#idbutton").press(function(){
//             $("#idbutton").hide();
//         }
//    )},
    },

    // onClick:function(oEvent){
    //     //1st method
    //     //Get current screen
    //     debugger;
    //     var oDocument = sap.ui.getCore();
    //     var oinp = oDocument.byId("idview--idinput");
    //     var oinpvalue = oinp.getValue();
    //     alert(oinpvalue);
    // },
    onClick:function(oEvent){
        //2nd method
        //Get current screen
        debugger;
        var oDocument = this.getView();
        var oinp = oDocument.byId("idinput");
        var oinpvalue = oinp.getValue();
       // alert(oinpvalue);

//        sap.ui.require([
// 'sap/m/MessageToast'
//        ], function(MessageToast){

// MessageToast.show(oinpvalue)

//        });


sap.ui.require([
    'sap/m/MessageBox'
           ], function(MessageBox){
    
            MessageBox.information(oinpvalue)
    
           });


    },
   

    // onClick:function(oEvent){
    //     //3rd method
    //     //Get current screen
    //     debugger;
    //    alert(this.getView().byId("idinput").getValue());
    // }


   });
});