sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {      // Controller 다음에 Text 이런거 올때 순서 지켜야 함
    "use strict";

    return Controller.extend("code2.fiori.edu01.code2fioriedu01.controller.Edu01View",
    {
        onInit()          
        {
            /*let oJson = {
                            Lecture : "Code2",
                            Class : "CL1"
                        },
                oModel = new JSONModel(oJson);      // JSONModel이 View가 알아먹을수 잇게 함, 근데 지금은 View가 못알아먹음
                
                let oView = this.getView();

                // View에 모델 연결
                // 아래 두 방법 다 같음
                
                // 1.
                oView = this.getView(),             // View를 대신하는 인스턴스 생성(이 방법 추천)        
                oView.setModel(oModel);             // 최상단(root)에 넣음(세팅)

                // 2.
                // this.getView().setModel(oModel);    // 인스턴스 없이 생성 (나는 한 줄로 하고싶다)
                */

            let oMe = {
                        Name    : "강인학",
                        Number  : 2
                      },
 
            oModel2 = new JSONModel(oMe);
            oView = this.getView();

            let oView = this.getView();

            oView.setModel(oModel2);
        },

        //  textRight : function()   // textRight 는 JS 객체임, 이름을 줘야 호출이 가능해짐 즉 뷰에서 textRight 를 호출하면 function()을 수행하게 됨
        //  {
        //      //HTML의 document 객체를 얻어온 것과 동일
        //      let oText1 = this.getView().byId("Text1");     // this는 이 컨트롤러 자신을 가리킴, this.getView()로 "내가 연결된 뷰 가져옴" , oText1은 View의 <Text id"Text1"> 와 동일
            
        //      oText1.setTextAlign("Right");
        //  },

        //  textCenter : function()
        //  {
        //      let oText2 = this.getView().byId("Text2");

        //      oText2.setTextAlign("Center");
        // },

        // textEnd : function()
        //  {
        //      let oLabel1 = this.getView().byId("Label1");

        //      oLabel1.setTextAlign("End");
        // },


        // 10/27 수업
        onShowHello : function()
        {
            MessageToast.show("Say Hello", 
            {
                duration    : 3000,                  
                width       : "15em",                   
                autoClose   : false,                 
                animationTimingFunction : "linear"
                // API 찾아서 테스트해보기
            });
        }



    });
});