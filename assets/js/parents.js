angular.module('piApp.controllers')
    .controller('ParentsController', ['$scope', function ($scope) {

        var parents = this;
        parents.courses = [
            {
                image: "appcamp.png",
                detailslink: 'app_camp.html',
                cName: "手機遊戲程式設計",
                eName: "Mobile Games Design & Coding",
                cMaterial: "MIT App Inventor",
                eMaterial: "MIT App Inventor",
                age: "8-12",
                fee: "HKD 3900 (早鳥優惠 HKD 3500)",
                classes: [
                  {id: "2018-APP-SUMMER-01", idName:"班別一", date: "2017年7月24-27日", time: "9:30am-12:30pm", location: "香港生產力促進局"},
                  {id: "2018-APP-SUMMER-02", idName:"班別二", date: "2017年8月7-10日", time: "9:30am-12:30pm", location: "香港生產力促進局"},
                  {id: "2018-APP-SUMMER-03", idName:"班別三", date: "2017年8月21-24日", time: "9:30am-12:30pm", location: "香港生產力促進局"}
                ]
            },
            {
                image: "scratchcamp.png",
                detailslink: 'scratch_camp.html',
                cName: "Scratch 動畫製作及遊戲設計",
                eName: "Scratch Animation & Game Design",
                cMaterial: "Scratch",
                eMaterial: "Scratch",
                age: "8-12",
                fee: "HKD 3900 (早鳥優惠 HKD 3500)",
                classes: [
                  {id: "2018-SCR-SUMMER-01", idName:"班別一", date: "2017年7月17-20日", time: "9:30am-12:30pm", location: "香港生產力促進局"},
                  {id: "2018-SCR-SUMMER-02", idName:"班別二", date: "2017年7月31-8月3日", time: "9:30am-12:30pm", location: "香港生產力促進局"},
                  {id: "2018-SCR-SUMMER-03", idName:"班別三", date: "2017年8月14-17日", time: "9:30am-12:30pm", location: "香港生產力促進局"}
                ]
            }
        ]


    }]);