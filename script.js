function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
    let heightNav = mainNav.firstElementChild.offsetHeight;
    
    navBtn.onclick = function () {
      if (mainNav.classList.contains('nav-hidden')) {
        mainNav.classList.remove('nav-hidden');
        mainNav.style.height = heightNav + 'px';
      } else {
        mainNav.classList.add('nav-hidden');
        mainNav.style.height = 0;
      }
    }
  }
let map;

function onClickBtnMap() {
    document.querySelector('[mountain]').addEventListener('click', () => {
        initMap(44.89213349977842, 37.31130557842034);
    });
    document.querySelector('[lake]').addEventListener('click', () => {
        initMap(43.44723186483688, 39.90817940486468);
    });
    document.querySelector('[tower]').addEventListener('click', () => {
        initMap(44.57784477870442, 38.022647395571006);
    });
    document.querySelector('[lake1]').addEventListener('click', () => {
        initMap(44.69701348446452, 37.78750344904297);
    });
}

function initMap(latHotel,lngHotel) {
    var pos = {lat: latHotel, lng: lngHotel};
    var opt = {
        center: pos,
        zoom: 14,
    }
    var map = new google.maps.Map(document.getElementById("map"),opt);
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'You are here',
    })
}
  navToggle();