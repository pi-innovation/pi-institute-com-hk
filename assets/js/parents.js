angular.module('piApp.controllers')
  .controller('ParentsController', ['$scope', '$sce', function ($scope, $sce) {

    var parents = this;

    parents.dayCourses = [
      {
        image: 'mbotdaycamp.png',
        detailslink: 'mbot_daycamp.html',
        cName: '六小時mBot工作坊',
        eName: 'mBot Workshop in 6 hours',
        cMaterial: 'mBot',
        eMaterial: 'mBot',
        age: '8-12',
        fee: 'HKD 2,700 (每位學生送價值$700元的mBot v1.1機械人一隻)',
        efee: 'HKD 2,700 (a $700-worth mBot kit included)',
        paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
          '<input type="hidden" name="cmd" value="_s-xclick">\n' +
          '<input type="hidden" name="hosted_button_id" value="WXALN3Q6GJ4WL">\n' +
          '<table>\n' +
          '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
          '\t<option value="2018年6月25日">2018年6月25日 $2,700.00 HKD</option>\n' +
          '\t<option value="2018年7月2日">2018年7月2日 $2,700.00 HKD</option>\n' +
          '\t<option value="2018年7月23日">2018年7月23日 $2,700.00 HKD</option>\n' +
          '\t<option value="2018年7月30日">2018年7月30日 $2,700.00 HKD</option>\n' +
          '</select> </td></tr>\n' +
          '</table>\n' +
          '<input type="hidden" name="currency_code" value="HKD">\n' +
          '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
          '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
          '</form>\n'),
        classes: [
          {
            idName: '班別一',
            eIdName: 'Class 1',
            date: '2018年6月25日',
            eDate: '25th June, 2018',
            time: '9:30am - 4:30pm (12:30-1:30午膳)',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council'
          },
          {
            idName: '班別二',
            eIdName: 'Class 2',
            date: '2018年7月2日',
            eDate: '2nd July, 2018',
            time: '9:30am - 4:30pm (12:30-1:30午膳)',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council'
          },
          {
            idName: '班別三',
            eIdName: 'Class 3',
            date: '2018年7月23日',
            eDate: '23rd July, 2018',
            time: '9:30am - 4:30pm (12:30-1:30午膳)',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council'
          },
          {
            idName: '班別四',
            eIdName: 'Class 4',
            date: '2018年7月30日',
            eDate: '30th July, 2018',
            time: '9:30am - 4:30pm (12:30-1:30午膳)',
            location: '香港生產力促進局',
            eLocation: 'Hong Kong Productivity Council'
          }
        ]
      }
    ];

    parents.courses = [
      {
        image: 'scratchcamp.png',
        detailslink: 'scratch_camp.html',
        cName: 'Scratch 動畫製作及遊戲設計',
        eName: 'Scratch Animation & Game Design',
        cMaterial: 'Scratch',
        eMaterial: 'Scratch',
        age: '8-12',
        fee: 'HKD 3900 (5月31日前報名，可獲早鳥優惠 HKD 3500)',
        efee: 'HKD 3900 (Early Bird@HKD 3500 before 31st May)',
        paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
          '<input type="hidden" name="cmd" value="_s-xclick">\n' +
          '<input type="hidden" name="hosted_button_id" value="7REVY55BMDWGQ">\n' +
          '<table>\n' +
          '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
          '\t<option value="2018年7月17-20日">2018年7月17-20日 $3,500.00 HKD</option>\n' +
          '\t<option value="2018年7月31-8月3日">2018年7月31-8月3日 $3,500.00 HKD</option>\n' +
          '\t<option value="2018年8月14-17日">2018年8月14-17日 $3,500.00 HKD</option>\n' +
          '</select> </td></tr>\n' +
          '</table>\n' +
          '<input type="hidden" name="currency_code" value="HKD">\n' +
          '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
          '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
          '</form>\n'),
        classes: [
          {
            id: '2018-SCR-SUMMER-01',
            idName: '班別一',
            eIdName: 'Class 1',
            date: '2018年7月17-20日',
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
            date: '2018年7月31-8月3日',
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
            date: '2018年8月14-17日',
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
        fee: 'HKD 3900 (5月31日前報名，可獲早鳥優惠 HKD 3500)',
        efee: 'HKD 3900 (Early Bird@HKD 3500 before 31st May)',
        paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
          '<input type="hidden" name="cmd" value="_s-xclick">\n' +
          '<table>\n' +
          '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
          '\t<option value="2018年7月24-27日">2018年7月24-27日 $3,500.00 HKD</option>\n' +
          '\t<option value="2018年8月7-10日">2018年8月7-10日 $3,500.00 HKD</option>\n' +
          '\t<option value="2018年8月21-24日">2018年8月21-24日 $3,500.00 HKD</option>\n' +
          '</select> </td></tr>\n' +
          '</table>\n' +
          '<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----\n' +
          '">\n' +
          '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
          '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
          '</form>\n'),
        classes: [
          {
            id: '2018-APP-SUMMER-01',
            idName: '班別一',
            eIdName: 'Class 1',
            date: '2018年7月24-27日',
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
            date: '2018年8月7-10日',
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
            date: '2018年8月21-24日',
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