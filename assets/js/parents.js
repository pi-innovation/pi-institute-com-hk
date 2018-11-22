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
      cGroupName: '日營',
      eGroupName: 'Day Camp',
      courses: [
        {
          courseId: 1,
          image: 'mbotdaycamp.png',
          cName: '高小mBot機械人六小時日營',
          cMaterial: 'mBot',
          age: '9-12',
          fee: 'HKD 2,700 (已包購買全新mBot機械人套件費用)',
          cIntro: ['想聖誕送一份獨特的禮物予孩子？「六小時mBot機械人工作坊」除了讓小朋友學習編程外，更送你一隻mBot機械人，陪你的兒女歡度聖誕！',
          '由導師精心設計的工作坊內，小朋友除了要一展自己的組裝技巧，更需要學習程式編寫(Programming)，命令mBot機械人完成各種不同的任務及比賽！ 今次工作坊將以任務及比賽形式進行， 在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務，務求鞏固知識，學以致用。於課堂尾段，將安排簡單比賽，同學更需要觀察對手並自行製定比賽策略，調整機械人程式等，希望學生能因應不同情況而靈活運用知識及技巧。'],
          cObjectives: [
            '基礎機械人及編程知識',
            '控制流程，例如「如果，那麼，否則」等 (Control flow,e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
            '動手製作技巧(Hands-on skill)',
          ],
          location: [commonAddress.sw, commonAddress.mk, commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="K3AQAD4R4TFDA">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="12月20日">12月20日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月21日">12月21日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月23日">12月23日 $2,700.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="地點">地點</td></tr><tr><td><select name="os1">\n' +
            '\t<option value="灣仔">灣仔 </option>\n' +
            '\t<option value="旺角">旺角 </option>\n' +
            '\t<option value="新蒲崗">新蒲崗 </option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on2" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os2" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.sw
            },
            {
              idName: '班別2',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.sw
            },
            {
              idName: '班別3',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.sw
            },
            {
              idName: '班別4',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.mk
            },
            {
              idName: '班別5',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.mk
            },
            {
              idName: '班別6',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.mk
            },
            {
              idName: '班別7',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.spk
            },
            {
              idName: '班別8',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.spk
            },
            {
              idName: '班別9',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '10am-5pm (1pm-2pm午膳時間)',
              location: commonAddress.spk
            },

          ]
        },
        {
          courseId: 2,
          image: 'beecarcamp.JPG',
          cName: '初小Beecar編程小車四小時日營',
          cMaterial: 'Beecar',
          age: '7-9',
          fee: 'HKD 2,000 (送BeeCar編程小車一輛)',
          cIntro: ['想聖誕送一份獨特的禮物予孩子？「四小時Beecar編程小車工作坊」除了讓小朋友學習編程外，更送你一架Beecar編程車子，陪你的兒女歡度聖誕！',
            '是次日營專為小學一至三年級學生而設，以更容易了解的「線性編程」的方式教導學生運算思維及邏輯思維，學生只需要分析及編寫整個運作流程，就可以讓車子按照他們的意願完成任務，大幅降低不同程式語言造成的學習障礙，為學習編程路上奠下良好基礎。而課程內亦會教導學生不同的感應器的原理和用法，並以遊戲的方式要求學生操作車輛，一試無人架駛車輪的難度！'],
          cObjectives: [
            '基礎機械人及編程知識',
            '控制流程，例如「如果，那麼，否則」等 (Control flow,e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
          ],
          location: [commonAddress.sw, commonAddress.mk, commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="APNJF3G8Q9QHY">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="12月20日">12月20日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月21日">12月21日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月23日">12月23日 $2,700.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="地點">地點</td></tr><tr><td><select name="os1">\n' +
            '\t<option value="灣仔">灣仔 </option>\n' +
            '\t<option value="旺角">旺角 </option>\n' +
            '\t<option value="新蒲崗">新蒲崗 </option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on2" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os2" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別2',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別3',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別4',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別5',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別6',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別7',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },
            {
              idName: '班別8',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },
            {
              idName: '班別9',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },

          ]
        },
        {
          courseId: 3,
          image: 'disaster.JPG',
          cName: '專題課程 - 四小時STEM災難拯救隊',
          cMaterial: '科學實驗',
          age: '7-12',
          fee: 'HKD 1,000',
          cIntro: ['子女對科學不感興趣? 「STEM災難拯救隊系列」課程將帶給你子女完全不同的科學學習體驗!課程將以不同情景及專題作為主導， 開始階段先為學生導入不同的天災人禍場景及加入故事及場景，希望教導學生如何分析當前情況及成因等，再以不同的實驗及動手製作的形式配合相關學科學知識，解決問題。課堂後段亦會討論環節中延伸部分課題至社會議題或更深入的知識。每堂課堂將分為三部份：基礎知識或理論教授、實驗及動手做環節、討論及課題延伸。課堂主題包括：'],
          cObjectives: [
            '模擬接骨手術：同學若果天災或人禍事件(例如運動) 發生後，遇到骨折的傷者時，同學應該如何分析創傷類型及如何應對? 課程內將進行模擬急救措施及進行模擬手術，該學生一嘗急救及動手製作的過程。',
            '拯救海上漏油小先鋒：為何石油泄漏的事故會對自然生態造成巨大災害? 油本身的特質如何破壞環境?透過課程與實驗，同學將學習 並深入討論海上漏油事故的補救方法。',
            'DIY瀘水器製作：水一直是人類生存的必需品，若身處了無人煙的叢林或其他野外地方 ，如何確保水源的潔淨?在課程動手做的階段，同學將以不同材料親身製作濾水器，同時了解水中常見的雜質及濾水的技巧。',
          ],
          location: [commonAddress.sw, commonAddress.mk, commonAddress.spk],
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="UMMD4DJLSXE84">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="12月20日">12月20日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月21日">12月21日 $2,700.00 HKD</option>\n' +
            '\t<option value="12月23日">12月23日 $2,700.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on1" value="地點">地點</td></tr><tr><td><select name="os1">\n' +
            '\t<option value="灣仔">灣仔 </option>\n' +
            '\t<option value="旺角">旺角 </option>\n' +
            '\t<option value="新蒲崗">新蒲崗 </option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="on2" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os2" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別1',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別2',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別3',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.sw
            },
            {
              idName: '班別4',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別5',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別6',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.mk
            },
            {
              idName: '班別7',
              eIdName: 'Class 1',
              date: '2018年12月20日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },
            {
              idName: '班別8',
              eIdName: 'Class 2',
              date: '2018年12月21日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },
            {
              idName: '班別9',
              eIdName: 'Class 3',
              date: '2018年12月23日',
              time: '2pm-6pm',
              location: commonAddress.spk
            },

          ]
        },

      ]
    };

    parents.courseGroups = [
      parents.courses
    ]

    parents.group = getUrlVars().group ? parents.courseGroups[getUrlVars().group-1] : null;
    parents.course = getUrlVars().group && getUrlVars().course ? parents.courseGroups[getUrlVars().group-1].courses[getUrlVars().course-1] : null;
  }])