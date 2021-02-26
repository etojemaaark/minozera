"use strict";

ymaps.ready(function () {
  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  function objConst(mark) {
    return {
      iconLayout: 'default#imageWithContent',
      iconImageHref: "static/images/general/".concat(mark, ".svg"),
      iconImageSize: [35, 48],
      iconImageOffset: [-17, -48],
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -35],
      balloonPanelMaxMapArea: 0
    };
  }

  function createBage(title, address) {
    return "\n\t\t\t<div class=\"map-baloon\">\n\t\t\t\t<div class=\"map-baloon__title\">".concat(title, "</div>\n\t\t\t\t<div class=\"map-baloon__address\">").concat(address, "</div>\n\t\t\t</div>\n\t\t");
  }

  var myMap = new ymaps.Map("map", {
    center: [43.492231, 39.891963],
    controls: ['zoomControl'],
    zoom: 16
  }),
      // Инициализация коллекций
  oneCollection = new ymaps.GeoObjectCollection({}, objConst('mark-cafe')),
      twoCollection = new ymaps.GeoObjectCollection({}, objConst('mark-hospital')),
      threeCollection = new ymaps.GeoObjectCollection({}, objConst('mark-rest')),
      // fourCollection = new ymaps.GeoObjectCollection({}, objConst('mark-park')),
  fiveCollection = new ymaps.GeoObjectCollection({}, objConst('mark-school')),
      // sixCollection = new ymaps.GeoObjectCollection({}, objConst('mark-pharmacy')),
  myPlacemarkMain = new ymaps.Placemark([43.492231, 39.891963], {
    hintContent: 'г. Сочи, Лазаревский район, п. Дагомыс, Барановское шоссе'
  }, {
    iconLayout: 'default#imageWithContent',
    iconImageHref: 'static/images/general/mark.svg',
    iconImageSize: [83, 70],
    iconImageOffset: [-41, -70]
  }, "balloonPanelMaxMapArea", 0),
      // Инициализация меток с балунами
  myPlacemark = new ymaps.Placemark([43.492107, 39.889223], {
    balloonContentBody: createBage('Япона хата', 'ул. Российская, 3')
  }),
      myPlacemark2 = new ymaps.Placemark([43.493310, 39.889789], {
    balloonContentBody: createBage('Старый дворик', 'Батумское шоссе, 57а')
  }),
      myPlacemark3 = new ymaps.Placemark([43.491374, 39.888127], {
    balloonContentBody: createBage('Инфекционная больница № 2', 'Барановское ш., 17')
  }),
      myPlacemark4 = new ymaps.Placemark([43.492957, 39.893310], {
    balloonContentBody: createBage('Городская больница №5', '​ул. Армавирская, 145а')
  }),
      myPlacemark5 = new ymaps.Placemark([43.492048, 39.887696], {
    balloonContentBody: createBage('МБУ ФКиС Физической культуры и спорта ДЮФСЦ по конному спорту города Сочи', 'ул. Армавирская, 246')
  }),
      myPlacemark6 = new ymaps.Placemark([43.492453, 39.886887], {
    balloonContentBody: createBage('VIP-пляж', '')
  }),
      // myPlacemark7 = new ymaps.Placemark([43.60187147576673, 39.725017506784866], {
  // 	balloonContentBody: createBage('Цветной бульвар', '')
  // }),
  // myPlacemark8 = new ymaps.Placemark([43.627441816986746, 39.708903414569946], {
  // 	balloonContentBody: createBage('Мамайский лесопарк', '')
  // }),
  myPlacemark9 = new ymaps.Placemark([43.491243, 39.887732], {
    balloonContentBody: createBage('Школа № 81', 'ул. Космическая, 1')
  }),
      myPlacemark10 = new ymaps.Placemark([43.493644, 39.892125], {
    balloonContentBody: createBage('Школа № 97 имени А.С. Авджяна', 'ул. Золотая, 1')
  }),
      myPlacemark11 = new ymaps.Placemark([43.493944, 39.889960], {
    balloonContentBody: createBage('Дет сад №122', '​Батумское шоссе, 37')
  }); // myPlacemark12 = new ymaps.Placemark([43.39789457453971, 40.00492599999997], {
  // 	balloonContentBody: createBage('Ком-фарм-медикс', 'ул. Тополиная, 18/1')
  // }),
  // myPlacemark13 = new ymaps.Placemark([43.66489838552366, 39.63114149999995], {
  // 	balloonContentBody: createBage('Фактор Фарма', 'Батумское ш., 69/5')
  // }),
  // myPlacemark14 = new ymaps.Placemark([43.662606574574056, 39.66162599999999], {
  // 	balloonContentBody: createBage('Аптеки сочи', 'Батумское шоссе, 33')
  // });

  resizeZoomControl();
  window.addEventListener('resize', resizeZoomControl);

  function resizeZoomControl() {
    if (document.documentElement.clientWidth < 576) {
      myMap.controls.get('zoomControl').options.set('size', 'small');
    } else {
      myMap.controls.get('zoomControl').options.set('size', 'large');
    }
  }

  if (document.body.clientWidth >= 1200) {
    myMap.setZoom(16);
    myMap.setCenter([43.492231, 39.891963]);
  } else {
    myMap.setZoom(12);
    myMap.setCenter([43.492231, 39.891963]);
  } // ctrl + скролл


  if (isMobile.any()) myMap.behaviors.disable('drag');
  myMap.behaviors.disable('scrollZoom');
  var overlay = document.querySelector('#map-ctrl'),
      ctrl = false;
  myMap.events.add('wheel', function (evt) {
    if (ctrl) return;
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    setTimeout(function () {
      overlay.style.opacity = "0";
      setTimeout(function () {
        return overlay.style.visibility = "hidden";
      }, 1000);
    }, 1000);
  });
  myMap.behaviors.disable('scrollZoom');
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Control') {
      myMap.behaviors.enable('scrollZoom');
      overlay.style.display = "none";
      ctrl = true;
    }
  });
  document.addEventListener('keyup', function () {
    myMap.behaviors.disable('scrollZoom');
    overlay.style.display = "flex";
    ctrl = false;
  }); // Открытие балуна

  myMap.events.add('click', function () {
    if (myMap.balloon.isOpen()) myMap.balloon.close();
  }); // Коллекция меток

  myMap.geoObjects.add(myPlacemarkMain);
  oneCollection.add(myPlacemark).add(myPlacemark2);
  twoCollection.add(myPlacemark3).add(myPlacemark4);
  threeCollection.add(myPlacemark5).add(myPlacemark6); // fourCollection.add(myPlacemark7).add(myPlacemark8);

  fiveCollection.add(myPlacemark9).add(myPlacemark10).add(myPlacemark11); // sixCollection.add(myPlacemark12).add(myPlacemark13).add(myPlacemark14);

  function showBageMap() {
    var btns = document.querySelectorAll('.s-map__content button');

    function activeBtn(btn) {
      if (!btn.classList.contains('active')) {
        btns.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        btn.classList.add('active');
        addPie(btn.dataset.value, true);
      } else {
        btn.classList.remove('active');
        addPie(btn.dataset.value, false);
      }
    }

    ;

    function addPie(str, active) {
      var arr = ['one', 'two', 'three', 'five'],
          result = arr.filter(function (item) {
        return item == str;
      }),
          hideAll = function hideAll() {
        return arr.forEach(function (item) {
          return myMap.geoObjects.remove(eval("".concat(item, "Collection")));
        });
      },
          showAll = function showAll() {
        return arr.forEach(function (item) {
          return myMap.geoObjects.add(eval("".concat(item, "Collection")));
        });
      };

      if (active) {
        if (result.length != 0) {
          hideAll();
          myMap.geoObjects.add(eval("".concat(result, "Collection")));
        } else {
          hideAll();
          showAll();
        }
      } else hideAll();
    }

    btns.forEach(function (btn) {
      return btn.addEventListener('click', function () {
        return activeBtn(btn);
      });
    });
  }

  showBageMap();
});