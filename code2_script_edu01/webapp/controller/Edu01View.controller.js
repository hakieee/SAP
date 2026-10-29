sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code2.script.edu01.code2scriptedu01.controller.Edu01View", {
        onInit() 
        {
            // var vTeam = "KIA";

            /*
            if ( vTeam = "KT" )
                console.log("1위 팀이다");
            else if (vTeam == "삼성")
                console.log("3위 팀이다");
            else if (vTeam == "KIA")
                console.log("4위 팀이다");
            else if (vTeam == "LG")
                console.log("5위 팀이다");
            else if (vTeam == "두산")
                console.log("6위 팀이다");
            else
                alert("KBO 팀이 아니다");
            */

            /* switch (vTeam)
            {
                case "KT" :
                    console.log("1위 팀이다");
                    break;

                case "삼성" :
                    console.log("2위 팀이다");
                    break;

                case "KIA" :
                    console.log("3위 팀이다");
                    break;

                case "LG" :
                    console.log("4위 팀이다");
                    break;

                case "두산" :
                    console.log("5위 팀이다");
                    break;
            
                default :
                    console.log("KBO 팀이 아니다");
                    break;
            }

            var vNum1 = parseInt(document.getElementById("iInput1").value),
                vNum2 = parseInt(document.getElementById("iInput2").value);

            switch (7) 
            {
                case vNum1 :
                    alert("첫번째 입력에 7이다");
                    break;
            
                case vNum2 :
                    alert("두번째 입력에 7이다");
                    break;

                default:
                    break;
            }*/


            /* for(var i = 0; i < 10; i++)
            {
                console.log(i + "번째 수행");
            } */

                /*
                var i = 0;

                while(i < 10)
                {
                    console.log(i++);
                }

                do 
                {
                    console.log(i++);
                } while (i < 10);
                 */

                /*
                for(let i = 9 ; i >= 2 ; i--)
                {
                    for(let j = 9 ; j >= 1 ; j--)
                    {
                        console.log(i + " * " + j + " = " + i * j);
                    }
                }
                    */

                /*
                var i = 2,
                    j = 1;

                while(i <= 9)
                {
                    j = 1;

                    while (j <= 9) 
                    {
                        console.log(i + " * " + j + " = " + i * j);
                        j++;
                    }

                    i++;
                }
                    */

                /*
                let aValue = ['A', 'B', 'C', 'D'];
                */

                 /*
                for(let vAlphabet of aValue)
                {
                    console.log(vAlphabet);
                }
                    */
                
                /* 
                for(let vIndex in aValue)
                {
                    console.log(vIndex);
                    console.log(aValue[vIndex]);
                }
                */
                
                // ----------------------------- 배열 ------------------------------ //

                /*
                let aValue = ['A', 'B', 'C', 'D'];

                 
                aValue.push('E');

                alert(aValue[4]);

                aValue.pop();

                alert(aValue[4]);  // Undefined
                */

                /* 
                for(let vIndex in aValue)
                {
                    console.log(aValue[vIndex]);
                }

                for(let vData of aValue)
                {
                    console.log(vData);
                }
                */

                // 2차원 배열
                /*
                let aValue = [['A', 'B'], ['C', 'D']];
                // aValue[0]  -> ['A', 'B']
                // aValue[0][0] -> 'A'

                for(let vOuterIndex in aValue)
                {
                    console.log(vOuterIndex + "번째는 " + aValue[vOuterIndex]);

                    for(let vInnerIndex in aValue[vOuterIndex])
                    {
                        console.log("aValue["+vOuterIndex+"]["+vInnerIndex+"] = "+aValue[vOuterIndex][vInnerIndex]);
                    }

                }
                    */

                
                /* 
                let aTeam = [['KT', 'Rank 1'], 
                            ['삼성', 'Rank 2'],
                            ['KIA', 'Rank 3'],
                            ['LG', 'Rank 4'],
                            ['두산', 'Rank 5'],
                            ['SSG', 'Rank 6'],
                            ['롯데', 'Rank 7'],
                            ['NC', 'Rank 8'],
                            ['한화', 'Rank 9'],
                            ['키움', 'Rank 10']];
                            */
                

                    /* for ~ in 문
                    for(let i in aTeam)
                    {
                        for(let j in aTeam[i])
                        {
                            console.log(aTeam[i][j]);
                        }
                    }
                    */

                    /* 
                    for(let i of aTeam)
                    {
                        for(let j of i)
                        {
                            console.log(j);

                        }
                        
                    }
                    */





                    // ------------ JSON -------------

                    /* let oModel = {
                                    Lecture : "Code2",      // 나중에 JSON 파일을 가져올때는 Lecture 처럼 key에 있는 값은 "" 가 필요
                                    Class : "CL1",
                                    Number : 2,
                                    Name : "강인학"
                                 };
                    */

                     // console.log(oModel.Class + " , " + oModel.Name + " , " + oModel.Number);
                     // console.log(oModel["Lecture"] +  oModel["Class"] + oModel["Number"] + oModel["Name"]);       // Lecture 에 있는 값 추출

                     /*
                     let oData = {
                                    "Team" : "두산",
                                    "Area" : "서울",
                                    "Mascot" : "Bear", 
                                    "Stadium" : "잠실구장"
                                 }

                    console.log(oData["Team"] + oData["Area"]);
                    console.log(oData.Mascot + oData.Stadium);
                    */

                    /*
                    for(let vKey in oModel)
                        console.log(vKey);
                    */
                    
                    
                    // for(let vKey in oModel)
                    // {
                        // console.log(vKey + " , " + oModel[vKey]);
                        // console.log(oModel.Lecture);

                        /*  vKey가 Class 가 아닌것만 찍기
                        if(vKey != "Class")
                            console.log(vKey);
                        */
                        
                        /* 어이없게 틀렷던거 - break; 는 항상 해라
                        switch(vKey)
                        {
                            case "Class" :
                                break;
                                // continue; -> 밑에 로직도 안하고 싶을때 바로 switch 빠져 나와서 다음꺼 가지고 와 할때 씀

                            default :
                                console.log(vKey);
                                break;
                        }
                           

                    }
                        */
                    

                    // JSON과 배열
                    /* 
                    let oTeam = [
                                    {Team : "KT", Rank : "1위"},
                                    {Team : "삼성", Rank : "2위"},
                                    {Team : "KIA", Rank : "3위"},
                                    {Team : "LG", Rank : "4위"},
                                    {Team : "두산", Rank : "5위"}
                                ];
                    */

                    /*
                    for(let i in oTeam)
                    {
                        console.log(oTeam[i].Team);
                    }
                        */

                    /*
                    for(let oJson of oTeam)
                    {
                        console.log(oJson["Team"] + " , " + oJson.Rank);
                    }
                    */










                    // -------------- 실습 ----------------
                    // * 2 ~ 9단까지 구구단 찍기
                    // 1. for 구문만 사용
                    /*
                    for(let i = 2 ; i < 10 ; i++)
                    {
                        for(let j = 1 ; j < 10 ; j++)
                        {
                            console.log(i + " * " + j + " = " + (i * j));
                        }

                    }
                    */



                    // 2. while 구문만 사용
                    /*
                    let i = 2, 
                        j = 1;


                    while(i < 10)
                    {
                        j = 1;
                        while(j < 10)
                        {
                            console.log(i + " * " + j + " = " + (i * j));
                            j++;
                        }

                        i++;
                    }
                        */


                    // 3. 밖에 for 구문 안쪽에 while 구문 이용
                    /*
                    for(let i = 2 ; i < 10 ; i++)
                    {
                        let j = 1;

                        while(j < 10)
                        {
                            console.log(i + " * " + j + " = " + (i * j));
                            j++;
                        }
                    }
                        */
                        


                    // 4. 밖에 while 구문 안쪽에 for 구문 이용
                    /*
                    let i = 2;

                    while(i < 10)
                    {
                        for(let j = 1 ; j <= 9 ; j++)
                        {
                            console.log(i + " * " + j + " = " + (i * j));
                        }

                        i++;
                    }
                        */


                    // * 2 ~ 9단의 구구단을 찍되 아래의 조건 만족할 것
                    // 1. 짝수단만 찍을 것
                    /*
                    for(let vNum = 1 ; vNum < 10 ; vNum++)
                    {
                        if(vNum % 2 == 0)
                        {
                            for(let j = 1 ; j <= 9 ; j++)
                            {
                                console.log(vNum + " * " + j + " = " + (vNum * j))
                            }
                        }

                    }
                        */

                    // 2. while 이용해서 2부터 시작하는데 홀수단만
                    /*
                    let i = 2,
                        j = 1;
0
                    while(i < 10)
                    {
                        if(i % 2 == 1)
                        {
                            j = 1;

                            while (j < 10) 
                            {
                                console.log(i + " * " + j + " = " + (i * j));
                                j++;
                            }

                        }

                        i++;
                    }
                        */

                    // 아래 Json 가진 배열 만들고 for ~ in / for ~ of 로 출력
                    
                    let oData = [
                                    { Country : "대한민국",  Capital : "서울" },
                                    { Country : "미국",     Capital : "워싱턴" },
                                    { Country : "영국",     Capital : "런던" },
                                    { Country : "프랑스",   Capital : "파리" },
                                    { Country : "독일",     Capital : "베를린" }
                                ];
                                
                    /*
                    // 추후 다룰 ABAP의 Internal Table 형태와 매우 유사
                    for(let vRow of oData)
                        console.log(vRow.Country);

                    for(let i in oData)
                    {
                        console.log(oData[i].Country + " , " + oData[i].Capital);
                    }

                    for(let oJson of oData)
                    {
                        console.log(oJson.Country + " " + oJson.Capital);
                    }
                    */

                    /*
                    let oJsonSample = { Country : "대한민국",  Capital : "서울" },
                        aArray = ['A', 'B', 'C', 'D'];

                    for(let vValue of aArray)
                        console.log(vValue);

                    for(let vKey of oJsonSample) // Error, 중요 : of 구문은 배열 형태만 적용 가능
                        console.log(vKey);
                    */

                // of 랑 in 같이 쓰는 경우 -> of 가 바깥, in 이 안쪽으로 와야함
                    // for ~ of 와 for ~ in 동시에 사용
                    for(let oRow of oData)
                    {
                        for(let vKey in oRow)   // oROw는 JSON 형태
                            console.log(oRow[vKey]);
                    }


                    
                    



                    


                        


            }
    });
});