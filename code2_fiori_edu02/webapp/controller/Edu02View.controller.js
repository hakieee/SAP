sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("code2.fiori.edu02.code2fioriedu02.controller.Edu02View", {
        onInit() 
        {
            /* 
            let oData = {
                            Study : { Lecture : "Code2",  Class    : "CL1",  Width : "10em"},
                            Info  : { Name    : "강인학",  Number   : 2,      Design : "Bold"},
                            
                        },
                oProp = {
                            Input : {   
                                        Width : "20em",
                                        ShowClear : true,
                                        PlaceHolder : "입력창",
                                        Description : "Name Input Field"
                                    }
                        },
            
            oModel = new JSONModel(oData),
            oPModel = new JSONModel(oProp);
            
            this.getView().setModel(oModel);            // Vire의 root에 모델 세팅
            this.getView().setModel(oPModel, "Prop");   // 따로 방(Prop) 만들어서 덮어씌움 방지
            */

            
            


            /*
            let oTextProp = {
                                TextInfo :  {
                                                Width : "20em"
                                            }
                            },

            oTextModel = new JSONModel(oTextProp);
            this.getView().setModel(oTextModel, "TextProp");




            let oLabelProp = {
                                Input : {   
                                            Width : "20em",
                                            PlaceHolder : "바꿀 문자열"
                                        }
                             },

            oLabelModel = new JSONModel(oLabelProp);
            this.getView().setModel(oLabelModel, "LabelProp");
        },
        */

            /*
            setTextBegin : function()
            {
                // this.getView().byId("Text1").setTextAlign("Begin");
                // this.getView().byId("Text1").setTextAlign(sap.ui.core.TextAlign.Begin);  // 이게 진짜 좋은 코딩

                let oText = this.getView().byId("Text1");
                oText.setTextAlign(sap.ui.core.TextAlign.Begin);
            },

            setTextCenter : function()
            {
                this.getView().byId("Text1").setTextAlign("Center");
            },

            setTextRight : function()
            {
                this.getView().byId("Text1").setTextAlign("Right");
            },
            */

            
            /*
            setTextAlign : function(pAlign)
            {
                // this.getView().byId("Text1").setTextAlign(pAlign);
                // pAlign에 따라서 setTextAlign 메소드에
                // sap.ui.core.TextAlign.Right 이런 식으로 값을 넣을 수 잇는 로직 만들어라

                let vAlign;        

                switch (pAlign) 
                {
                    case "Begin" :
                        vAlign = sap.ui.core.TextAlign.Begin;
                        break;
                
                    case "Center" :
                        vAlign = sap.ui.core.TextAlign.Center;
                        break;

                    case "Right" :
                        vAlign = sap.ui.core.TextAlign.Right;
                        break;
                }
                

                this.getView().byId("Text1").setTextAlign(vAlign);

            },

            TextChange : function()
            {
                /*
                let oLabel1 = this.getView().byId("Label1"),
                    oInput1 = this.getView().byId("Input1"),
                    oView = this.getView();

                let vValue = oInput1.getValue();
                
                oLabel1.setText(vValue);
                */

                /*
                let vValue = this.getView().byId("Input1").getValue();

                this.getView().byId("Label1").setText(vValue);
                */


        },

        /*
        CallMyName : function()
        {
            alert("강인학");
        },

        Setted : function()
        {
            alert("설정 완료");
        }
        */

        
        /* 
        [1st Number]
        [2nd Number]
        [Result]
        [계산]
        계산버튼 클릭하면 1번 2번 값을 합산하고 거기에 * 10 한
        결과를 Result 창에 나오게 
        */
        CalcResult : function()
        {
            let oVIew = this.getView();

            let vNum1 = parseInt(oVIew.byId("Num1").getValue()),
                vNum2 = parseInt(oVIew.byId("Num2").getValue()),
                Result = (vNum1 + vNum2) * 10;

            oVIew.byId("Result").setValue(Result);

        },


        /*
        다음의 값을 구할것
            [밑변]
            [높이]
            [삼각형 넓이] (밑변 * 높이) / 2
            [계산]
            */
        TriangleArea : function()
        {
            let oVIew = this.getView();

            let vUnder = parseInt(oVIew.byId("Underline").getValue()),
                vHeight = parseInt(oVIew.byId("Height").getValue()),
                TriResult = (vUnder * vHeight) / 2;

            oVIew.byId("TriResult").setValue(TriResult);
        },


        /* 다음의 값을 구할것
                물건값 [ ]
                할인율 [ ] 20이면 20% 할인율이란 뜻
                할인된값 [ ] 할인된값 = 물건값 - ( 물건값 * ( 할인율 / 100 ) )
                [계산]
        */
        oDiscount : function()
        {
            let oView = this.getView();

            let vPre        = parseInt(oView.byId("PrePrice").getValue()),
                vRate       = parseInt(oView.byId("SalePrice").getValue()),
                ResultPrice = vPre - (vPre * (vRate / 100));

            oView.byId("ResultPrice").setValue(ResultPrice);
        },

        oSaleRate : function()
        {
            let oView = this.getView();

            let vPre    = parseInt(oView.byId("Howmuch").getValue()),
                vPay    = parseInt(oView.byId("Payed").getValue()),
                SaleRate = 100 - ((vPay /vPre) * 100);

            oView.byId("SaleRate").setValue(SaleRate);
        },


        // Number [ ]
        // [Match 체크]

        // 1. Match 체크 버튼을 클릭하면 matchNum 펑션으로 가도록 할것
        // 2. matchNum 펑션내에 아래와 같이 배열을 선언할것
        // let aNumber = [10, 20, 30, 40, 50];
        // for 구문을 이용해서 위에서 입력한 값이 aNumber 배열에 있는지 비교해서 있으면 alert(“Match”);
        // 없으면 alert(“Un Match”);

        matchNum : function()
        {
            let oView    = this.getView();

            let aNumber  = [10, 20, 30, 40, 50],
                vInput   = parseInt(oView.byId("PutNum").getValue()),
                vMatch   = "",
                vMatchNum = 0,
                vMatchBool = false;  // String 형태 사용햇을때


            for(let vNum of aNumber)
            {
                if(vInput == vNum)
                {
                    vMatch = "A";
                    vMatchNum = 1;
                    vMatchBool = true;
                }
                
            }

            //if (vMatch != "")
            // if(vMatchNum != 0)
            if(vMatchBool)
                MessageToast.show("Match");
            else
                MessageToast.show("UnMatch");
            
        }





    });
});