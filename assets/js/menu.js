angular.module('piApp.controllers')
  .controller('MenuController',  ['$scope', '$location', function ($scope, $location) {

    var menuItems = this;
    menuItems.items = [
      {
        cName: '首頁',
        eName: 'Explore',
        link: 'index.html',
        mobileOnly: false,
      },
      {
        cName: '自訂課堂',
        eName: 'Parents',
        link: 'https://pi-innovation.typeform.com/to/AdPLdJ',
        mobileOnly: false,
        openInBlank: true,
      },
      {
        cName: '課程時間',
        eName: 'Parents',
        link: 'parents.html',
        mobileOnly: false,
      },
      {
        cName: '課程架構',
        eName: 'Courses',
        link: 'course.html',
        mobileOnly: false,
      },{
        cName: '學習路徑',
        eName: 'Learning Path',
        link: '../assets/doc/learning_path.pdf',
        mobileOnly: false,
        openInBlank: true,
      }, {
        cName: '導師資歷',
        eName: 'Qualifications',
        link: 'achievement.html',
        mobileOnly: false,
      }, {
        cName: '課程花絮',
        eName: 'Past Courses',
        link: 'https://medium.com/pi-innovation',
        mobileOnly: false,
        openInBlank: true
      }, {
        cName: '聯絡我們',
        eName: 'Contact',
        link: 'contact.html',
        mobileOnly: false,
      }
    ];

    $scope.isActive = function(link) {
      return $location.absUrl().indexOf(link) > -1;
    };

    $scope.getClassForItem = function(link){
      if($scope.isActive(link)) return 'g-color-primary'
    }

    $scope.getClassForLang = function(lang){
      paths = $location.absUrl().split('/')
      if(paths[paths.length-2] == lang) return 'g-color-primary'
    }

    $scope.currentItem = function(){
      paths = $location.absUrl().split('/')
      return paths[paths.length-1]
    }

    $scope.$location = $location;

  }]);