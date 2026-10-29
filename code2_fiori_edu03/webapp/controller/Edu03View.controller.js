sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code2.fiori.edu03.code2fioriedu03.controller.Edu03View", {
        onInit() 
        {
            let oData = {
                            TextInfo :  {
                                            Text : "다음주 화욜이 회식", 
                                            Width : "20em"
                                        }
                        },

                oModel      = new JSONModel(oData),
                oModelFile  = new JSONModel("/jsondata/data.json");

            this.getView().setModel(oModel);
            this.getView().setModel(oModelFile, "Import");
        }
    });
});