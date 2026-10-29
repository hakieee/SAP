sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code2.fiori.grid01.code2fiorigrid01.controller.Grid01View", {
        onInit() 
        {
            let oGrid = {
                            airSet : [
                                    { Carrid: "AA", Carrname: "America Airline", Price: 234,   Currency: "USD" },
                                    { Carrid: "KO", Carrname: "Korean Air",      Price: 85000, Currency: "KRW" },
                                    { Carrid: "LF", Carrname: "Luft Hansa",      Price: 278,   Currency: "EUR" },
                                    { Carrid: "VA", Carrname: "Vietnam Air",     Price: 25400, Currency: "VND" },
                                    { Carrid: "US", Carrname: "United States",   Price: 265,   Currency: "USD" }
                                   ] // airSet은 rows 형태임
                                   
                        };

            this.getView().setModel(new JSONModel(oGrid));
            this.getView().setModel(new JSONModel("/data/MatSet.json"), "Mat");


        }
    });
});