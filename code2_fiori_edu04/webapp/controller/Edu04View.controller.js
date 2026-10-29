sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";


    return Controller.extend("code2.fiori.edu04.code2fioriedu04.controller.Edu04View",
    {
        onInit() 
        {
            let oData = {
                            // ls_Airline : {
                            //                 Carrid   : "AA",
                            //                 Carrname : "America Air",
                            //                 CurrCode : "USD"    // 키에는 네이밍 안함
                            //              },   // Airline 은 3개의 행이 아니라 1개의 행임(Strcture)
                            
                            lt_Class :  [
                                            { Name : "강신욱", Number : 1 },
                                            { Name : "강인학", Number : 2 },
                                            { Name : "김민기", Number : 3 },
                                            { Name : "김수빈", Number : 4 },
                                            { Name : "김수연", Number : 5 }
                                        ]    // InternalTable은 동일한 구조의 여러 행을 배열에 넣겟다
                                             // ex) Name 으로 잘 가다가 필드가 하나라도 달라지면 안됨(Student X)
                        },

                oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
            this.getView().setModel(new JSONModel("/data/Material.json"), "Mat");
            this.getView().setModel(new JSONModel("/data/Member.json"), "Member");

            /*
            1. 다음의 내용을 가진 JSON 파일을 생성하고 현재 View에 Import 할것
            "gt_member" : [
                                {"Id": "HONG",   "Gender": "M", "Use": true, "Age": 25},
                                {"Id": "LIM",    "Gender": "M", "Use": true, "Age": 33},
                                {"Id": "KARINA", "Gender": "F", "Use": true, "Age": 26},
                                {"Id": "WINTER", "Gender": "F", "Use": true, "Age": 25},
                                {"Id": "GU",     "Gender": "M", "Use": true, "Age": 45}
                            ]
            2. View에 Get Name 이라는 버튼을 생성할것
            3. 위 버튼을 클릭하면 위에서 만든 Model을 가져와서 출력할것
            */
        },

        /*
        checkModel : function()
        {
            let oModel = this.getView().getModel(),
                oJson = oModel.oData.ls_Airline;
            
            for(let vKey in oJson)
                console.log(vKey + " : " + oJson[vKey]);

            console.log("************************");
            console.log(oJson.Carrid + " , "+ oModel.oData.ls_Airline.Carrname);
        },
        */

        checkItab : function()
        {
            let oModel   = this.getView().getModel(),
                lt_data  = oModel.oData.lt_Class;

            /* 이 구조가 진짜 매우 중요함 나중가서 헷갈리지 말고 구조 이해
            for(let ls_data of lt_data)
                console.log(ls_data.Name + " : " + ls_data.Number);
            */ 
        },

        checkJsonFile : function()  // 에디터로 만든거 불러오기
        {
            let oModel = this.getView().getModel("Mat"),
                lt_steel = oModel.oData.gt_steel;

            for(let ls_steel of lt_steel)
                console.log(ls_steel.Matnr + " , " + ls_steel.Maktx + " , " + ls_steel.Mtart);
        },
        

        /*
            1. 다음의 내용을 가진 JSON 파일을 생성하고 현재 View에 Import 할것
            "gt_member" : [
                                {"Id": "HONG",   "Gender": "M", "Use": true, "Age": 25},
                                {"Id": "LIM",    "Gender": "M", "Use": true, "Age": 33},
                                {"Id": "KARINA", "Gender": "F", "Use": true, "Age": 26},
                                {"Id": "WINTER", "Gender": "F", "Use": true, "Age": 25},
                                {"Id": "GU",     "Gender": "M", "Use": true, "Age": 45}
                            ]
            2. View에 Get Name 이라는 버튼을 생성할것
            3. 위 버튼을 클릭하면 위에서 만든 Model을 가져와서 출력할것
              // 에디터에서 { } 로 써서 JSON 형태로 만드는거 잊지말것
            
            
            문제 구조 요약 
             // 문제 구조 요약
            1. webapp 폴더 안에 data 폴더를 만들고, 그 안에 Member.json 파일 생성
            2. this.getView().setModel(new JSONModel("/data/Member.json"), "Member");
               → JSON 파일을 불러와서 "Member"라는 이름(방)으로 View에 연결
            3. checkMember 함수에서 "Member" 모델을 꺼내고,
               그 안의 JSON 데이터에서 gt_member 배열만 lt_member에 담음
            4. for ~ of 문으로 배열을 돌면서 회원 한 명(객체)씩 ls_member에 꺼내 출력
               (ABAP의 LOOP AT lt_member INTO ls_member 와 같은 구조)
               */

        checkMember : function()
        {
            let oModel = this.getView().getModel("Member"),
                lt_member = oModel.oData.gt_member;

            for(let ls_member of lt_member)
                console.log(ls_member.Id + " " + ls_member.Gender + " " +ls_member.Use + " " +ls_member.Age);
        }

    });
});