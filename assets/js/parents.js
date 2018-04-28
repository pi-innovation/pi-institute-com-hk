angular.module('piApp.controllers')
  .controller('ParentsController', ['$scope', function ($scope) {

    var parents = this;
    parents.courses = [
      {
        image: 'scratchcamp.png',
        detailslink: 'scratch_camp.html',
        cName: 'Scratch 動畫製作及遊戲設計',
        eName: 'Scratch Animation & Game Design',
        cMaterial: 'Scratch',
        eMaterial: 'Scratch',
        age: '8-12',
        fee: 'HKD 3900 (早鳥優惠 HKD 3500)',
        efee: 'HKD 3900 (Early Bird@HKD 3500)',
        classes: [
          {
            id: '2018-SCR-SUMMER-01',
            idName: '班別一',
            eIdName: 'Class 1',
            date: '2017年7月17-20日',
            eDate: '17th - 20th Jul, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/717-20-summer-scratch-animation-game-design-camp-scratch-tickets-45339190740'
          },
          {
            id: '2018-SCR-SUMMER-02',
            idName: '班別二',
            eIdName: 'Class 2',
            date: '2017年7月31-8月3日',
            eDate: '31st Jul - 3rd Aug, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/731-83-summer-scratch-animation-game-design-camp-scratch-tickets-45339394349'
          },
          {
            id: '2018-SCR-SUMMER-03',
            idName: '班別三',
            eIdName: 'Class 3',
            date: '2017年8月14-17日',
            eDate: '14th - 17th Aug, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/814-817-summer-scratch-animation-game-design-camp-scratch-tickets-45339473586'
          }
        ]
      },
      {
        image: 'appcamp.png',
        detailslink: 'app_camp.html',
        cName: '手機遊戲程式設計',
        eName: 'Mobile Games Design & Coding',
        cMaterial: 'MIT App Inventor',
        eMaterial: 'MIT App Inventor',
        age: '8-12',
        fee: 'HKD 3900 (早鳥優惠 HKD 3500)',
        efee: 'HKD 3900 (Early Bird@HKD 3500)',
        classes: [
          {
            id: '2018-APP-SUMMER-01',
            idName: '班別一',
            eIdName: 'Class 1',
            date: '2017年7月24-27日',
            eDate: '24th - 27th Jul, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/724-27-summer-mobile-apps-development-camp-tickets-45339911897'
          },
          {
            id: '2018-APP-SUMMER-02',
            idName: '班別二',
            eIdName: 'Class 2',
            date: '2017年8月7-10日',
            eDate: '7th - 10th Aug, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/87-10-summer-mobile-game-development-camp-tickets-45339971074'
          },
          {
            id: '2018-APP-SUMMER-03',
            idName: '班別三',
            eIdName: 'Class 3',
            date: '2017年8月21-24日',
            eDate: '21st - 24th Aug, 2018',
            time: '9:30am-12:30pm',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council',
            registerLink: 'https://www.eventbrite.hk/e/821-24-summer-mobile-game-development-camp-tickets-45340044293'
          }
        ]
      }
    ];

  }]);