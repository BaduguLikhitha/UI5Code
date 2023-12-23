sap.ui.jsview("root.view.main",{
    
    //Runtime behaviour
    getControllerName: function(){
      return "root.controller.main"

    },
    // designtime behaviour
    createContent: function(oController){
        var obtn = new sap.m.Button("idbtn",{
            text: "Likki",
            press: oController.onPress

        });
        return obtn;
    }
});