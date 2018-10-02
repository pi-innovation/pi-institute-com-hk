angular.module('piApp.controllers')
  .controller('CoursesController', ['$scope', '$sce', function ($scope, $sce) {

    var courses = this

    courses.display = [true, true, true, true];

    courses.courses = [
      {
        level: 1,
        courses: [
          {
            id: 'E101',
            name: '拆解大師',
            eName: 'Teardown Master',
            intro: '此課程讓同學於四節課堂中，分別拆解不同的玩具及日常家電用品，從中學習基本的工具使用技巧。同學更可以在課程中了解到生活用品的運作原理，培養對STEM的學習動機。',
            eIntro: 'This course would provide an opportunitiy for students to try tearing down common toys and home appliances, and learning about the usage of different tools. They would also be growing their interests in STEM by learning about the working principle of their products.',
            skills: ['工具運用','機械原理','物理原理'],
            eSkills: ['Tools Usage','Mechanics','Physics'],
            icon: 'repairing.png'
          },
          {
            id: 'E102',
            name: '機械實驗',
            eName: 'Mechanics Experiments',
            intro: '在此課程中，同學會進行多項的機械實驗，從中了解基礎的物理及機械原理，為日後的STEM學習奠下良好的基礎。同學亦可從中體驗DIY的樂趣，感受電腦遊戲以外的選擇。',
            eIntro: 'In this course, students would participate in various mechanics experiments and learn about related physics and mechanics knowledge. It would be one of the first DIY experience for them and sparking their interests in STEM!',
            skills: ['工具運用','機械原理','物理原理'],
            eSkills: ['Tools Usage','Mechanics','Physics'],
            icon: 'robot-arm.png'
          },
          {
            id: 'S102',
            name: 'STEM災難拯救隊',
            eName: 'STEM Disaster Rescue Team',
            intro: '課程將以不同情景及專題作為主導， 開始階段先為學生導入不同的天災人禍場景及加入故事及場景，' +
            '希望教導學生如何分析當前情況及成因等，再以不同的實驗及動手製作的形式配合相關學科學知識，解決問題。' +
            '課堂後段亦會討論環節中延伸部分課題至社會議題或更深入的知識。',
            eIntro: 'The classes would be set up with scenarios, getting students immersed with the ' +
            'disaster environments with stories and news in the beginning. Students would later doing experiments ' +
            'related to these scenarios and explore the how humankind are challenged by the accidents and natural diasters. ' +
            'Students would also have a chance to discuss on the social implications of their findings.',
            skills: ['物理原理','地理學', '科學實驗'],
            eSkills: ['Physics','Geography', 'Science Experiments'],
            icon: 'tornado.png'
          }
        ]
      },
      {
        level: 2,
        courses: [
          {
            id: 'S201 ',
            name: '再生能源習作',
            eName: 'Renewable Energy Experiments',
            intro: '課程將會以環保物料及簡單電子零件，讓學生進行不同的再生能源習作，從中學習能量轉換原理及各種再生能源的運作原理。習作種類多元化，由簡單的手搖電筒製作到太陽能小車或超級電容車循序漸進，按學校及家長需要靈活安排。',
            eIntro: 'Students would make use of environmental friendly materials and simple electronics on multiple renewable energy experiments. ' +
            'They will learn about energy conversion and how power are generated in power plant in real life. Teachers and schools can select from a list of experiments for this workshop series.',
            skills: ['物理原理','工具運用','科學原理','環保'],
            eSkills: ['Physics','Tools Usage','Science','Environment Protection'],
            icon: 'solar-panel.png'
          },
          {
            id: 'S202',
            name: '跨學科實驗專題',
            eName: 'Interdisciplinary Experiments Series',
            intro: '同學將會就多個不同的課題，學習運用科學方法，設計及進行實驗，並從實驗結果中，得出結論。老師及家長可按需要，選取多個主題，其中包括航空、太空探索、生物醫學、自然、蚊蟲防治、交通意外等各類的課題。大部份主題均涉及多個學科的知識，讓學生可以融會貫通，於生活中實踐書本中的理論。',
            eIntro: 'Experiments were designed around different real-life topics. Students would leverage Scientific Method to design and perform scientific investigations. ' +
            'Parents and teachers could select from a wide-range of topics including space exploration, aviation, biomedical, nature, pest control, traffic accidents etc. ' +
            'All the topics involved knowledge from multiple disciplines, enabling students in putting book knowledge into practical usage.',
            skills: ['Physics','Biology','Science','Environment Protection','Scientific Method'],
            icon: 'experiment.png'
          },
          {
            id: 'E201 ',
            name: '小小電子工程師',
            eName: 'Becoming an Electronic Engineer',
            intro: '導師將會帶領同學進行一系列的電子學實驗，同學將會於利用各種基礎的電子零件（包括電阻、電容、LED等等）進行各類電子習作，掌握基本的電學知識，為日後的STEM學習作好準備。',
            eIntro: 'Students would perform a series of electronics experiments led by our professional instructors. They would get a taste of electronic engineering making use of common ' +
            'electronics components (e.g. resistors, capacitors, LED etc) in their exercises. Basic electronics knowledge would also be covered and get them well-prepared for more advanced courses.',
            skills: ['物理學', '工具運用', '電子學'],
            skills: ['Physics','Tool Usage', 'Electronics'],
            icon: 'electronic.png'
          }
        ]
      },
      {
        level: 3,
        courses: [
          {
            id: 'E301',
            name: '基礎機械人工程師',
            eName: 'Robotics Fundamentals',
            intro: '同學們將會於這個課程中同時接觸硬件及軟件的知識。同學將會先動手組裝一台標準的機械人（可選擇mBot、Lego等各款的機械人），進行測試，其後同學將會針對導師安排的課堂比賽或活動，運用圖形化的編程介面，進行基礎編程，寫下人生的第一個機械人程式。',
            intro: 'Students would be learning about both hardware and software in this program. The program will start with assembling and testing a standard learning robot (mBot, Lego etc.). ' +
            'Then they will be programming the robot with Graphical Programming Interface for various classroom competition/activities.',
            skills: ['電子學','機械人','工具運用','編程'],
            eSkills: ['Electronics','Robotics','Tools Usage','Coding'],
            icon: 'robot.png'
          },
          {
            id: 'C301',
            name: '小小編程魔法師',
            eName: 'Coding Magician',
            intro: '此課程讓老師或家長於多款圖形化編程工具中選取其中一款（Scratch, MIT App Inventor, Kodu Game Lab, Coding Galaxy等），讓學生使用簡單的編程技巧進行不同的動畫、遊戲、手機程式等創作。',
            eIntro: 'This course would utilize one of the Graphical Programming Interfaces (e.g. Scratch, MIT App Inventor, Kodu Game Lab, Coding Galaxy etc.), ' +
            'allowing students to create animations, games and even mobile app with basic coding skills.',
            skills: ['編程學'],
            eSkills: ['Coding'],
            icon: 'algorithm.png'
          },
          {
            id: 'T301',
            name: '立體打印機組裝及應用',
            eName: '3D Printer Assembling and Application',
            intro: '課程將會分為兩個部份，第一部份將教授同學親自DIY 組裝一部立體打印機，而第二部份則讓學生使用網上的開源立體模型圖案及軟件，測試及學習使用立體打印機。',
            eIntro: 'The course would be composed of 2 parts. Students would first learning about how to DIY a 3D printer. Next, they would learn to use a 3D printer with online open-sourced ' +
            '3D models and software.',
            skills: ['立體打印','工具運用','機械原理'],
            eSkills: ['3D Printing','Tools Usage','Mechanics'],
            icon: '3d-printer.png'
          }
        ]
      },
      {
        level: 4,
        courses: [
          {
            id: 'E401',
            name: '進階機械人工程師',
            eName: 'Advanced Robotics',
            intro: '此課程將要求學生活用之前學習的機械人製作知識，並結合新教授的知識，組裝並針對特定任務改裝機械人，讓機械人完成人工智能任務。任務項目多樣化，老師或家長可以從足球、搜救、舞蹈等多個項目中選取最適合學生的主題。如果同學想挑戰自己，更可選擇使用利用C語言為機械人進行編碼。',
            eIntro: 'This program required students to applied their existing robotics knowledge, together with the advanced skills taught in this program, in creating intelligent robots for specific missions. ' +
            'Missions included robot soccer, rescue, dance etc., and teachers could pick the ones that suits their students best. Students could also challenge themselves by opting for coding the robot in C language!',
            skills: ['機械人','編程','工具運用','電子學'],
            eSkills: ['Robotics','Coding','Tools Usage','Electronics'],
            icon: 'artificial-intelligence.png'
          },
          {
            id: 'T401',
            name: '立體建模（3D Modeling）工程師',
            eName: '3D Modeling Engineer',
            intro: '此課程將需要使用立體打印機。同學會於課程中學生繪製立體圖，進行立體設計，並將自己的設計輸出到立體打印機（3D Printer）進行打印生產。',
            eIntro: 'Students would create and design their own 3D models in this course. They will also get chance in exporting their creative designs for 3D printing.',
            skills: ['立體打印','設計'],
            eSkills: ['3D Printing','Design'],
            icon: 'edit.png'
          },
          {
            id: 'T402',
            name: '四軸飛行器/航拍應用課程',
            eName: 'Drones/Aerial Photography',
            intro: '課程將利用航拍機進行航空拍攝，教授學生不同的拍攝技巧。於拍攝後，同學亦會學習影片剪接及後制，輸出以學校為主題的影片。老師及家長亦可以選擇讓同學於課程中同時嘗試親手製作四軸飛行器，並用以進行航拍。',
            eIntro: 'This workshop series would allow students in doing Aerial Photography using drones. They would be able to experiment on various shooting skills and video editing skills, ' +
            'exporting a series of movies for the area around their school. Options for DIY drones is also available but would require extra classes for assembling/testing the drones.',
            skills: ['工具運用','影片剪接','影片拍攝'],
            eSkills: ['Tools Usage','Video Editing','Video Shooting'],
            icon: 'drone.png'
          },
          {
            id: 'E402',
            name: 'Maker(創客)小發明專題課程 – 環保/智能生活/智能城市',
            eName: 'Maker/Inventor Workshop Series - Environment/Smart Living/Smart City',
            intro: 'Maker（創客）並不是一門學科，而家一種綜合多個學科及知識的能力。同學將運用不同的知識（包括電子、物理、編程、設計思維、科學原理等），從生活中尋找靈感，並運用工程及科學方法，製作一件小發明去解決生活中的問題。',
            eIntro: 'Maker is not a subject, but a skills for integrating knowledge and skills from different disciplines. Participants would leverage their knowledge in electronics, physics, ' +
            'coding, design thinking, science etc., hunting down opportunities in daily life and come up with their own ideas in solving problems. They would make use of engineering skills and scientific method ' +
            'in realizing their own inventions for solving a real-life problem for the society.',
            skills: ['設計思維','電子學','物理學','編程','機械原理','科學原理'],
            eSkills: ['Design Thinking','Electronics','Physics','Coding','Mechanics','Science'],
            icon: 'light-bulb.png'
          }
        ]
      }
    ]
  }])