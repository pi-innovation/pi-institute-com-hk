angular.module('piApp.controllers')
  .controller('ParentsController', ['$scope', '$sce', function ($scope, $sce) {

    function getUrlVars () {
      var vars = {}
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
          vars[key] = value
        })
      return vars
    }

    var parents = this

    var commonAddress = {
      'sw': {
        cName: '香港銅鑼灣摩理臣山道80-82號柏餘中心2樓',
        district: '灣仔'
      },
      'mk': {
        cName: '旺角鎮海商業大廈9樓B室',
        district: '旺角'
      },
      'spk': {
        cName: '新蒲崗旺景工業大廈C座10樓C7室 (鑽石山站A出口步行約五分鐘) ',
        district: '新蒲崗'
      }
    }

    parents.courses = {
      groupId: 1,
      cGroupName: '短期課程',
      courses: [
        {
          courseId: 1,
          image: 'microbit.png',
          cName: 'Micro:bit beginners創客教室',
          cMaterial: 'Micro:bit',
          age: '9-12',
          fee: 'HKD 2,000 (已包購買Micro:bit基本套裝一套)',
          cIntro: ['由英國廣播公司BBC主導，聯合微軟及三星等其他知名機構所研發的Micro:bit微型電腦，專為青少年及兒童學習編程而設計。Micro:bit體積雖少，卻在主板上組裝了各式各樣的裝置，例如5*5LED矩陣燈、温度計、藍牙等。而Micro:bit更可以讓學生自由配置各種不同裝置，設計出不同的發明品，一展學生的創新潛能。\n' +
          '\n' +
          '課程除了教授基本知識外，將會以任務及比賽形式進行：\n' +
          '在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務\n' +
          '，務求鞏固知識，學以致用。\n'],
          cObjectives: [
            '認識各種傳感器的原理及應用',
            '動手製作技巧(Hands-on skill)',
            '基本電路搭構與知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="ZK5ZASMPRJK5G">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月18日至4月20日 (下午13:30至16:30)">4月18日至4月20日 (下午13:30至16:30) $2,000.00 HKD</option>\n' +
            '\t<option value="4月23日至4月25日 (上午09:30至下午12:30)">4月23日至4月25日 (上午09:30至下午12:30) $2,000.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月18日至4月20日',
              time: '下午13:30至16:30',
              location: commonAddress.spk
            },
            {
              idName: '班別2',
              eIdName: 'Class 2',
              date: '4月23日至4月25日 ',
              time: '上午09:30至下午12:30',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 2,
          image: 'microbitcamp.png',
          cName: 'Micro:bit with Python創客教室',
          cMaterial: 'Micro:bit',
          age: '9-12',
          fee: 'HKD 2,000 (已包購買Micro:bit基本套裝一套)',
          cIntro: ['由英國廣播公司BBC主導，聯合微軟及三星等其他知名機構所研發的Micro:bit微型電腦，專為青少年及兒童學習編程而設計。Python程式語言適合對程式編寫已有初步接觸的學生，其簡潔性及普及程度令Python成為學習「真正」程式編寫的入門之選，亦是小朋友由圖形化編程過渡至真正「字句式」程式編寫的最佳選擇。\n' +
          '\n' +
          '課程除了教授基本知識外，將會以任務及比賽形式進行：\n' +
          '在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務\n' +
          '，務求鞏固知識，學以致用。\n'],
          cObjectives: [
            '認識各種傳感器的原理及應用',
            '動手製作技巧(Hands-on skill)',
            '基本電路搭構與知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="8M3L7QHZF6BQE">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月15日至4月17日 (上午09:30至下午12:30)">4月15日至4月17日 (上午09:30至下午12:30) $2,000.00 HKD</option>\n' +
            '\t<option value="4月23日至4月25日 (下午13:30至16:30)">4月23日至4月25日 (下午13:30至16:30) $2,000.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月15日至4月17日',
              time: '上午09:30至下午12:30',
              location: commonAddress.spk
            },
            {
              idName: '班別2',
              eIdName: 'Class 2',
              date: '4月23日至4月25日  ',
              time: '下午13:30至16:30',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 3,
          image: 'microbitrobot.png',
          cName: 'Micro:bit 機械人',
          cMaterial: 'Micro:bit',
          age: '9-12',
          fee: 'HKD 2,400 (已包購買Micro:bit基本套裝一套)',
          cIntro: ['由英國廣播公司BBC主導，聯合微軟及三星等其他知名機構所研發的Micro:bit微型電腦，專為青少年及兒童學習編程而設計。Micro:bit除了能夠控制不同感應器，作出智能家居或簡單電路裝置外，其實亦可以用製作機械人！在課堂在，導師除了教授如何用Micro:bit組成及製作機械人外，亦會讓學生嘗試更新穎有趣的機械人移動方式--萬向輪。課程後段，同學亦會以機械人進行足球比賽，讓學生發揮自己的創意，改裝機械人，務求戰勝對手！\n' +
          '\n' +
          '課程除了教授基本知識外，將會以任務及比賽形式進行：\n' ,
          '1. 在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務\n' +
          '，務求鞏固知識，學以致用。\n' ,
          '2. 安排簡單比賽，同學更需要觀察對手並自行製定比賽策略，調整機械人程式等，希\n' +
          '望學生能因應不同情況而靈活運用知識及技巧。\n'],
          cObjectives: [
            '認識各種傳感器的原理及應用',
            '動手製作技巧(Hands-on skill)',
            '基本電路搭構與知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="435EYW7RVYWAW">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月23日至4月25日 (下午13:30至16:30)">4月23日至4月25日 (下午13:30至16:30) $2,400.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月23日至4月25日',
              time: '下午13:30至16:30',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 4,
          image: 'appcamp.png',
          cName: 'App Inventor',
          cMaterial: 'MIT App Inventor',
          age: '9-12',
          fee: 'HKD 2,000',
          cIntro: ['為期三日的營會，讓您的孩子從零到一地學習設計Android 手機應用程式！具豐富經驗的導師將以麻省理工學院研發的「MIT App Inventor tool」，從基礎知識到進階技巧，循序漸進地引領您的孩子製作屬於自己的手機應用程式。營會亦鼓勵學生將自己無限的創意注入自己的手機應用程式，更希望學生可以將心血結晶向至親分享，共享編程樂趣！'],
          cObjectives: [
            '控制流程，例如「如果，那麼，否則」等 (Control flow,e.g. if, then, else etc.)',
            '變數及混算思維 (Variables and computations)',
            '電話感應器控制，例如螢幕手勢控制、陀螺儀、加速度計，GPS',
            '除錯技巧(Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="5PGQV3B6CPCAJ">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月15日至4月17日 (下午1:30至4:30)">4月15日至4月17日 (下午1:30至4:30) $2,000.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月15日至4月17日',
              time: '下午1:30至4:30',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 5,
          image: 'websitedesign.png',
          cName: 'Wix 網頁設計',
          cMaterial: 'Wix online platform',
          age: '9-12',
          fee: 'HKD 2,000',
          cIntro: ['Wix 於 2006 年成立於美國，以簡約、美觀、快速架設網站形式讓小朋友能夠容易地設計網頁。在網頁設計操作方面使用視覺化編輯器，通過拖、拉方式就能對版面元素作詳細編輯，即使小學生都可以輕鬆使用。學生可藉機建立個人網頁，將自己的學習經歷、心得及興趣，存放於個人網頁內，讓學校及朋友更了解你的子女！'],
          cObjectives: [
            '認識基礎網頁設計',
            '網路及網頁基本知識',
            '手機版面網頁應用',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="GZVE99HZK7F88">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月18日至4月20日 (上午9:30至12:30)">4月18日至4月20日 (上午9:30至12:30) $2,000.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月18日至4月20日',
              time: '上午9:30至12:30',
              location: commonAddress.spk
            }
          ]
        },
      ]
    };

    parents.courses2 = {
      groupId: 2,
      cGroupName: '日營',
      courses: [
        {
          courseId: 1,
          image: 'microbitcamp.png',
          cName: 'Micro:bit 一日工作坊',
          cMaterial: 'Micro:bit',
          age: '9-12',
          fee: 'HKD 1,200 (已包Micro:bit基本套裝一套)',
          cIntro: ['由英國廣播公司BBC主導，聯合微軟及三星等其他知名機構所研發的Micro:bit微型電腦，專為青少年及兒童學習編程而設計。Micro:bit體積雖少，卻在主板上組裝了各式各樣的裝置，例如5*5LED矩陣燈、温度計、藍牙等。而Micro:bit更可以讓學生自由配置各種不同裝置，設計出不同的發明品，一展學生的創新潛能。\n' +
          '\n' +
          '課程除了教授基本知識外，將會以任務及比賽形式進行：\n',
          '1. 在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務\n' +
          '，務求鞏固知識，學以致用。\n',
          '2. 安排簡單比賽，同學更需要觀察對手並自行製定比賽策略，調整機械人程式等，希\n' +
          '望學生能因應不同情況而靈活運用知識及技巧。\n' +
          '，務求鞏固知識，學以致用。\n'],
          cObjectives: [
            '認識各種傳感器的原理及應用',
            '動手製作技巧(Hands-on skill)',
            '基本電路搭構與知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="YJS8CDA3L5XD8">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月21日 09:30至16:30 (12:30-13:30 午膳)">4月21日 09:30至16:30 (12:30-13:30 午膳) $1,200.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月21日',
              time: '09:30至16:30 (12:30-13:30 午膳)',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 2,
          image: 'mbotdaycamp.png',
          cName: 'mBot機械人工作坊',
          cMaterial: 'mBot',
          age: '9-12',
          fee: 'HKD 1,200 (已包Micro:bit基本套裝一套)',
          cIntro: ['由導師精心設計的工作坊內，小朋友除了要一展自己的組裝技巧，更需要學習程式編寫(Programming)，命令mBot機械人完成各種不同的任務及比賽！ 今次工作坊將以任務及比賽形式進行， 在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務，務求鞏固知識，學以致用。於課堂尾段，將安排簡單比賽，同學更需要觀察對手並自行製定比賽策略，調整機械人程式等，希望學生能因應不同情況而靈活運用知識及技巧。'],
          cObjectives: [
            '基礎機械人及編程知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
            '動手製作技巧(Hands-on skill)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="AZXH25P5ANF2A">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月22日 09:30至16:30 (12:30-13:30 午膳)">4月22日 09:30至16:30 (12:30-13:30 午膳) $1,200.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月22日',
              time: '09:30至16:30 (12:30-13:30 午膳)',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 3,
          image: 'beecarcamp.JPG',
          cName: 'Beecar編程小車工作坊',
          cMaterial: 'Beecar',
          age: '7-12',
          fee: 'HKD 1,200 (已包借用Beecar基本套裝一套)',
          cIntro: ['是次日營專為小學一至三年級學生而設，以更容易了解的「線性編程」的方式教導學生運算思維及邏輯思維，學生只需要分析及編寫整個運作流程，就可以讓車子按照他們的意願完成任務，大幅降低不同程式語言造成的學習障礙，為學習編程路上奠下良好基礎。而課程內亦會教導學生不同的感應器的原理和用法，並以遊戲的方式要求學生操作車輛，一試無人架駛車輪的難度！'],
          cObjectives: [
            '基礎機械人及編程知識',
            '控制流程,例如「如果,那麼,否則」等 (Control flow, e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="Y48HUVAKCZJDY">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="4月26日 09:30至16:30 (12:30-13:30 午膳)">4月26日 09:30至16:30 (12:30-13:30 午膳) $1,200.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '4月26日',
              time: '09:30至16:30 (12:30-13:30 午膳)',
              location: commonAddress.spk
            }
          ]
        },
      ]
    };

    parents.courseGroups = [
      parents.courses,
      parents.courses2
    ]

    parents.group = getUrlVars().group ? parents.courseGroups[getUrlVars().group-1] : null;
    parents.course = getUrlVars().group && getUrlVars().course ? parents.courseGroups[getUrlVars().group-1].courses[getUrlVars().course-1] : null;
  }])