angular.module('galleryApp', [])
    .controller('GalleryController', function () {

        var gallery = this;
        gallery.albums = [
            {
                cName: "中西區小學機械人大賽",
                eName: "Central & Western District Primary Robotics Workshops cum Competitions",
                photos: [
                    'cwd/2.jpg',
                    'cwd/4.jpg',
                    'cwd/6.jpg',
                    'cwd/9.jpg',
                    'cwd/13.jpg',
                    'cwd/15.jpg',
                    'cwd/IMG_3994.jpg',
                    'cwd/IMG_3995.JPG',
                    'cwd/IMG_3998.JPG'
                ]
            },
            {
                cName: "德望學校：LEGO 機械人比賽訓練課程",
                eName: "Good Hope School: LEGO Robotics Competitions Training",
                photos: [
                    'ghs/IMG_4138.JPG',
                    'ghs/IMG_4147.JPG',
                    'ghs/IMG_4172.JPG',
                    'ghs/IMG_4142.JPG'
                ]
            },
            {
                cName: "東華三院李東海小學：設計思維及智能發明課程",
                eName: "TWGHs Leo Tung-hai LEE Primary School: Design Thinking & Smart Inventions",
                photos: [
                    'ldh/IMG_3481.JPG',
                    'ldh/IMG_3483.JPG',
                    'ldh/IMG_3486.JPG',
                    'ldh/IMG_3488.JPG',
                    'ldh/IMG_5162.JPG',
                    'ldh/IMG_5164.JPG',
                    'ldh/IMG_5276.JPG'
                ]
            },
            {
                cName: "數碼港機械人工作坊",
                eName: "Cyberport Robotics Workshop",
                photos: [
                    'cyberport/IMG_3836.JPG',
                    'cyberport/IMG_3838.JPG',
                    'cyberport/IMG_3839.JPG',
                    'cyberport/IMG_3845.JPG',
                    'cyberport/IMG_3847.JPG'
                ]
            },
            {
                cName: "人型機械人舞蹈比賽",
                eName: "Humanoid Robot Dance Competition",
                photos: [
                    'humanoid-dance/P5240739.JPG',
                    'humanoid-dance/P5240742.JPG',
                    'humanoid-dance/P5240746.JPG'
                ]
            },
            {
                cName: "人型機械人製作工作坊",
                eName: "Humanoid Robots Workshop",
                photos: [
                    'humanoid-workshop/IMG_1855.JPG',
                    'humanoid-workshop/IMG_1856.jpg'
                ]
            },
            {
                cName: "大新人壽：LEGO機械車工作坊",
                eName: "Dah Sing Life Assurance: LEGO Workshops",
                photos: [
                    'dahsing/IMG_2640.JPG',
                    'dahsing/IMG_2668.JPG',
                    'dahsing/IMG_2675.JPG',
                    'dahsing/IMG_2683.JPG',
                    'dahsing/IMG_2691.JPG',
                ]
            },
            {
                cName: "香港教育大學賽馬會小學：STEM體驗日",
                eName: "HKEdU Jockey Club Primary School: Robotics Experience Day",
                photos: [
                    'jcps-experience-day/IMG-20130531-WA0008.jpg',
                    'jcps-experience-day/IMG-20130623-WA0007.jpg',
                    'jcps-experience-day/IMG_6993.JPG',
                    'jcps-experience-day/IMG_6995.JPG',
                    'jcps-experience-day/IMG_7004.JPG',
                    'jcps-experience-day/IMG_7009.JPG',
                    'jcps-experience-day/IMG_7010.jpeg',
                    'jcps-experience-day/IMG_7011.jpeg',
                    'jcps-experience-day/IMG-20130531-WA0007.jpg',
                ]
            },
            {
                cName: "佐敦谷聖若瑟天主教小學：六足機械人足球工作坊",
                eName: "Jordan Valley St. Joseph's Catholic Primary School: Six-legged Robot Soccer Workshop",
                photos: [
                    'jvsj-6-leg-workshop/IMG_1448.JPG',
                    'jvsj-6-leg-workshop/IMG_1482.JPG',
                    'jvsj-6-leg-workshop/IMG_1664.JPG',
                    'jvsj-6-leg-workshop/IMG_1748.JPG',
                    'jvsj-6-leg-workshop/IMG_5999.JPG'
                ]
            }
        ]


    });