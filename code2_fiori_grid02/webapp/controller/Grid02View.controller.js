sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code2.fiori.grid02.code2fiorigrid02.controller.Grid02View", {
        onInit() 
        {
            let oJsonData = { 
                                countrySet : [ 
                                                { Country : "대한민국",  Capital : "서울",          Area : "동아시아" },
                                                { Country : "홍콩",     Capital : "홍콩",           Area : "동아시아" },
                                                { Country : "태국",     Capital : "방콕",           Area : "동남아시아" },
                                                { Country : "캐나다",   Capital : "오타와",         Area : "북중미" },
                                                { Country : "호주",     Capital : "캔버라",         Area : "오세아니아" },
                                                { Country : "브라질",    Capital : "브라질리아",      Area : "남미" },
                                                { Country : "아르헨티나", Capital : "부에노스아이레스", Area : "남미" },
                                                { Country : "독일",     Capital : "베를린",         Area : "유럽" },
                                                { Country : "러시아",   Capital : "모스크바",       Area : "유럽" }
                                             ]
                            },

                            
                oModel = new JSONModel(oJsonData);
                
                this.getView().setModel(oModel);   
                this.getView().setModel(new JSONModel("/data/Material.json"), "Mat");

        },

        onSearch : function()
        {
            /*
            let oBinding = this.getView().byId("countrySet").getBinding("rows"),        // 해당 테이블 묶여잇는걸 가져올라면 getBinding()

                // 바인딩 가지고 뭘 할거냐 - 필터 걸거임
                oFilter  = null, // 사용자가 입력할때 처리하기 위해 일단은 선언
                aFilter = [],
                vCountry = this.getView().byId("ICountry").getValue(),  // 사용자가 입력한 거 가지고 잇음
                vArea    = this.getView().byId("IArea").getValue();  // 사용자가 입력한 거 가지고 잇음

            if(vCountry != "")
            {
                // 검색을 하기 위해서 필터라는 걸 만들어야 함
                oFilter = new Filter({  // Filter 쓸라면 위에 define 해야함
                                        path : "Country",
                                        operator : FilterOperator.Contains,
                                        value1 : vCountry     // value1에 있는 값을 가지고 필터링을 하겟다
                                    });
                
                aFilter.push(oFilter);

            }

            if(vArea != "")
            {
                // 검색을 하기 위해서 필터라는 걸 만들어야 함
                oFilter = new Filter({  // Filter 쓸라면 위에 define 해야함
                                        path : "Area",
                                        operator : FilterOperator.Contains,
                                        value1 : vArea     // value1에 있는 값을 가지고 필터링을 하겟다
                                    });   

                aFilter.push(oFilter);
            }

            oBinding.filter(aFilter);
            
        }
            */




        // ---------------------------- 실습 ----------------------------
        let oBinding = this.getView().byId("Materials").getBinding("rows"),        // 해당 테이블 묶여잇는걸 가져올라면 getBinding()

                // 바인딩 가지고 뭘 할거냐 - 필터 걸거임
                oFilter  = null, // 사용자가 입력할때 처리하기 위해 일단은 선언
                aFilter  = [],
                vMatnr   = this.getView().byId("IMatnr").getValue(),  // 사용자가 입력한 거 가지고 잇음
                vMaktx   = this.getView().byId("IMaktx").getValue();  // 사용자가 입력한 거 가지고 잇음

            if(vMatnr != "")
            {
                // 검색을 하기 위해서 필터라는 걸 만들어야 함
                oFilter = new Filter({  // Filter 쓸라면 위에 define 해야함
                                        path : "Matnr",
                                        operator : FilterOperator.Contains,
                                        value1 : vMatnr     // value1에 있는 값을 가지고 필터링을 하겟다
                                    });
                
                aFilter.push(oFilter);

            } 

            if(vMaktx != "")
            {
                // 검색을 하기 위해서 필터라는 걸 만들어야 함
                oFilter = new Filter({  // Filter 쓸라면 위에 define 해야함
                                        path : "Maktx",
                                        operator : FilterOperator.Contains,
                                        value1 : vMaktx     // value1에 있는 값을 가지고 필터링을 하겟다
                                    });   

                aFilter.push(oFilter);
            }

            oBinding.filter(aFilter);
            
        }


        
    });
});