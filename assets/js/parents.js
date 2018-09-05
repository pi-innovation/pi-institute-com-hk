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
      'mk': {
        cName: '旺角鎮海商業大廈9樓B室',
        eName: 'Room 9B, Chun Hoi Commercial Bldg, 688 Shanghai St, Mongkok'
      },
      'spk': {
        cName: '新蒲崗旺景工業大廈C座10樓C7及C10室 (鑽石山站A出口步行約五分鐘) ',
        eName: 'Room C7 & C10, Block C 10/F, Wong King Industrial Building, San Po Kong (5 mins walk from Diamond Hill MTR Station)'
      }
    }

    parents.dayCourses = {
      groupId: 1,
      cGroupName: '體驗工作坊',
      eGroupName: '3 Hour Experience Workshop',
      courses: [{
        courseId: 1,
        image: 'mbot-experience.png',
        cName: 'mBot機械人三小時工作坊',
        eName: 'mBot Workshop in 3 hours',
        cMaterial: 'mBot',
        eMaterial: 'mBot',
        age: '7-12',
        fee: 'HKD 450',
        efee: 'HKD 450',
        cIntro: "三小時的mBot機械人體驗日適合對編程及機械人適合入門學生參加。工作坊內，小朋友可體驗學習程式編寫(Programming)，命令mBot機械人完成各種不同的任務及比賽！今次工作坊將以任務及比賽形式進行，" +
        "在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務，務求鞏固知識，學以致用。\n",
        cObjectives: [
          '基礎機械人及編程知識',
          '控制流程，例如「如果，那麼，否則」等 (Control flow,e.g. if, then, else etc.)',
          '變數及運算思維 (Variables and computations)\n'
        ],
        location: commonAddress.spk,
        needComputer: true,
        paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
          '<input type="hidden" name="cmd" value="_s-xclick">\n' +
          '<input type="hidden" name="hosted_button_id" value="KJPLJRQVE2Y2Q">\n' +
          '<table>\n' +
          '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
          '\t<option value="2018年9月8日">2018年9月8日 $450.00 HKD</option>\n' +
          '\t<option value="2018年9月9日">2018年9月9日 $450.00 HKD</option>\n' +
          '</select> </td></tr>\n' +
          '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
          '</table>\n' +
          '<input type="hidden" name="currency_code" value="HKD">\n' +
          '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
          '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
          '</form>\n'),
        classes:
          [
            {
              idName: '班別一',
              eIdName: 'Class 1',
              date: '2018年9月8日',
              eDate: '8th Sept, 2018',
              time: '10:30am - 1:30pm',
              location: commonAddress.spk
            },
            {
              idName: '班別二',
              eIdName: 'Class 2',
              date: '2018年9月9日',
              eDate: '9th Sept, 2018',
              time: '10:30am - 1:30pm',
              location: commonAddress.spk
            }
          ]
      }]
    }

    parents.courses = {
      groupId: 2,
      cGroupName: '日營',
      eGroupName: 'Day Camp',
      courses: [
        {
          courseId: 1,
          image: 'mbotdaycamp.png',
          // detailslink: 'scratch_camp.html',
          cName: 'mBot機械人六小時日營',
          eName: 'mBot Day Camp in 6 hours',
          cMaterial: 'mBot',
          eMaterial: 'mBot',
          age: '7-12',
          fee: 'HKD 1200 (已包租借機械人費用，或可加HKD700購買全新mBot機械人套件)',
          efee: 'HKD 1200 (Fees included borrowing mBot kit, or extra HKD700 for a brand new set of mBot kit)',
          cIntro: '想帶給小朋友既輕鬆又充實的週末，就不容錯過今次「六小時mBot機械人工作坊」！由導師精心設計的工作坊內，小朋友除了要一展自己的組裝技巧，更需要學習程式編寫(Programming)，命令mBot機械人完成各種不同的任務及比賽！\n今次工作坊將以任務及比賽形式進行，\n' +
          '在課堂不同階段，學生在學習不同的知識後，需要馬上利用已教授技巧，完成任務，務求鞏固知識，學以致用。於課堂尾段，將安排簡單比賽，同學更需要觀察對手並自行製定比賽策略，調整機械人程式等，希望學生能因應不同情況而靈活運用知識及技巧。\n',
          cObjectives: [
            '基礎機械人及編程知識',
            '控制流程，例如「如果，那麼，否則」等 (Control flow,e.g. if, then, else etc.)',
            '變數及運算思維 (Variables and computations)',
            '除錯技巧 (Debugging techniques)',
            '動手製作技巧(Hands-on skill)',
          ],
          location: commonAddress.spk,
          needComputer: true,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="3VKQCZDTYC2FA">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="2018年9月15日(借用機械人)">2018年9月15日(借用機械人) $1,200.00 HKD</option>\n' +
            '\t<option value="2018年9月16日(借用機械人)">2018年9月16日(借用機械人) $1,200.00 HKD</option>\n' +
            '\t<option value="2018年10月20日(借用機械人)">2018年10月20日(借用機械人) $1,200.00 HKD</option>\n' +
            '\t<option value="2018年10月21日(借用機械人)">2018年10月21日(借用機械人) $1,200.00 HKD</option>\n' +
            '\t<option value="2018年9月15日(購買機械人)">2018年9月15日(購買機械人) $1,900.00 HKD</option>\n' +
            '\t<option value="2018年9月16日(購買機械人)">2018年9月16日(購買機械人) $1,900.00 HKD</option>\n' +
            '\t<option value="2018年10月20日(購買機械人)">2018年10月20日(購買機械人) $1,900.00 HKD</option>\n' +
            '\t<option value="2018年10月21日(購買機械人)">2018年10月21日(購買機械人) $1,900.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別一',
              eIdName: 'Class 1',
              date: '2018年9月15日',
              eDate: '15th Sept, 2018',
              time: '9:30am-4:30pm(12:30pm-1:30pm午膳)',
              location: commonAddress.spk
            },
            {
              idName: '班別二',
              eIdName: 'Class 2',
              date: '2018年9月16日',
              eDate: '16th Sept, 2018',
              time: '9:30am-4:30pm(12:30pm-1:30pm午膳)',
              location: commonAddress.spk
            },
            {
              idName: '班別三',
              eIdName: 'Class 3',
              date: '2018年10月20日',
              eDate: '15th Sept, 2018',
              time: '9:30am-4:30pm(12:30pm-1:30pm午膳)',
              location: commonAddress.spk
            },
            {
              idName: '班別四',
              eIdName: 'Class 4',
              date: '2018年10月21日',
              eDate: '16th Sept, 2018',
              time: '9:30am-4:30pm(12:30pm-1:30pm午膳)',
              location: commonAddress.spk
            }
          ]
        },
      ]
    };

    parents.regular = {
      groupId: 3,
      cGroupName: '專題課程',
      eGroupName: 'Selected Topics',
      courses: [
        {
          courseId: 1,
          image: 'rescue.png',
          cName: 'STEM災難拯救隊',
          eName: 'STEM Rescue Team',
          cMaterial: '積木、實驗器材等',
          eMaterial: 'LEGO Bricks and Experiment Kits',
          age: '7-12',
          fee: 'HKD 600 (已包材料費)',
          efee: 'HKD 600 (Materials included)',
          cIntro: '子女對科學不感興趣? 「STEM災難拯救隊系列」課程將帶給你子女完全不同的科學學習體驗!課程將以不同情景及專題作為主導，\n' +
          '開始階段先為學生導入不同的天災人禍場景及加入故事及場景，希望教導學生如何分析當前情況及成因等，再以不同的實驗及動手製作的形式配合相關學科學知識，' +
          '解決問題。課堂後段亦會討論環節中延伸部分課題至社會議題或更深入的知識。每堂課堂將分為三部份：基礎知識或理論教授、實驗及動手做環節、討論及課題延伸。' +
          '課堂主題包括：\n',
          cObjectives: [
            '模擬接骨手術：同學若果天災或人禍事件(例如運動) 發生後，遇到骨折的傷者時，同學應該如何分析創傷類型及如何應對? ' +
            '課程內將進行模擬急救措施及進行模擬手術，該學生一嘗急救及動手製作的過程。',
            '極地求生之保暖篇：同學想需想像自己身處惡劣的冰天雪地底下，思考需要如何以有限的資源下替自己保暖，防止熱能流失。' +
            '課程內將進行分組實驗及比賽，給予學生不同物料及豬肉，要求學生將豬肉放進冰水前為它「穿上」衣服。',
            '拯救海上漏油小先鋒：為何石油泄漏的事故會對自然生態造成巨大災害? 油本身的特質如何破壞環境?透過課程與實驗，同學將學習 並深入討論海上漏油事故的補救方法。',
          ],
          location: commonAddress.spk,
          needComputer: false,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="NSTRCVS6JRFW6">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="2018年9月15, 22, 29日">2018年9月15, 22, 29日 $600.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別一',
              eIdName: 'Class 1',
              date: '2018年9月15, 22, 29日',
              eDate: '15,22,29 Sept, 2018',
              time: '2:00pm-4:00pm',
              location: commonAddress.spk
            }
          ]
        },
        {
          courseId: 2,
          image: 'kindergarten.png',
          cName: '幼兒STEM啟蒙課程',
          eName: 'STEM For Kindergarten',
          cMaterial: '幼兒STEM教材',
          eMaterial: 'STEM teaching kits for Kindergarten',
          age: '3-6',
          fee: 'HKD 800 (已包材料費)',
          efee: 'HKD 800 (Materials included)',
          cIntro: '工作坊中透過故事繪本情節當中的科學元素，讓幼兒認識當中的概念。活動過程中，提升幼兒的解難能力、' +
          '合作能力、創意能力及溝通能力。本次工作坊將以故事作引入，之後延伸至科學活動及遊戲。而遊戲主要是圍繞著建構性遊戲、' +
          '創作性遊戲及想像性遊戲。課堂的發展階段強調「從生活中學習，從做中學。」經過鞏固已有知識、互相觀察學習、及嘗試改良，' +
          '完成任務。於課堂的結束階段更會有幼兒回饋，成品展示。課堂主題包括：',
          cObjectives: [
            '堅固的房子-三隻小豬：透過故事作為引入，延伸到堅固的房子的主題。三隻小豬當中的主角的房屋被風吹倒，但為什麼呢?透過本次的工作坊能讓幼兒學習堆砌堅固房子的方法。' +
            '透過工作坊幼兒能學習堆砌堅固房子模型的方法、培養幼兒的合作精神及動手製作技巧',
            '裁培「彩色怪獸」：透過故事作為引入，延伸到有關顏色主題。進行有關顏色的創意實驗。透過本次的工作坊能讓幼兒嘗試顏色的實驗以及視覺藝術創作。' +
            '透過工作坊幼兒能學習混色技巧、辨認不同情緒所代表的顏色、培養創意能力',
            '浮沉世界-造船大挑戰：透過故事作為引入，先創作船的設計圖，再行動製作出來。延伸到如何令船在水中浮起來呢?透過本次的工作坊能讓幼兒學習令船浮起甚至在水中行動的方法。' +
            '透過工作坊幼兒能學習令船浮起的方法、培養幼兒的合作精神及動手製作技巧',
          ],
          location: commonAddress.spk,
          needComputer: false,
          paymentButton: $sce.trustAsHtml('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n' +
            '<input type="hidden" name="cmd" value="_s-xclick">\n' +
            '<input type="hidden" name="hosted_button_id" value="8E8LFP82JDTXE">\n' +
            '<table>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on0" value="日期">日期</td></tr><tr><td><select name="os0">\n' +
            '\t<option value="2018年9月22, 29日、10月6, 13, 20, 27日">2018年9月22, 29日、10月6, 13, 20, 27日 $800.00 HKD</option>\n' +
            '</select> </td></tr>\n' +
            '<tr><td><input type="hidden" name="charset" value="utf-8"><input type="hidden" name="on1" value="聯絡電話">聯絡電話</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>\n' +
            '</table>\n' +
            '<input type="hidden" name="currency_code" value="HKD">\n' +
            '<input type="image" src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">\n' +
            '<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n' +
            '</form>\n'),
          classes: [
            {
              idName: '班別一',
              eIdName: 'Class 1',
              date: '2018年9月22, 29日、10月6, 13, 20, 27日（共六堂）',
              eDate: '15,22,29 Sept, 2018',
              time: '10:00am-11:15am',
              location: commonAddress.spk
            }
          ]
        },

      ]
    };

    parents.courseGroups = [
      parents.dayCourses,
      parents.courses,
      parents.regular,
    ]

    parents.group = getUrlVars().group ? parents.courseGroups[getUrlVars().group-1] : null;
    parents.course = getUrlVars().group && getUrlVars().course ? parents.courseGroups[getUrlVars().group-1].courses[getUrlVars().course-1] : null;
  }])