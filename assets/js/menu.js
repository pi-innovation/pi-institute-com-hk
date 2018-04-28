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
        cName: '家長專區',
        eName: 'Parents',
        link: 'parents.html',
        mobileOnly: false,
      },
      {
        cName: '學校課程',
        eName: 'Schools',
        link: 'course.html',
        mobileOnly: false,
      }, {
        cName: '資歷及佳績',
        eName: 'Qualifications',
        link: 'achievement.html',
        mobileOnly: false,
      }, {
        cName: '過往專案',
        eName: 'Portfolio',
        link: 'portfolio.html',
        mobileOnly: true,
      }, {
        cName: '客戶／合作夥伴',
        eName: 'Clients & Partners',
        link: 'partners.html',
        mobileOnly: false,
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