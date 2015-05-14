/*! aloha-web-www - 2015-05-14
* https://www.hyualoha.kr/
* Copyright (c) 2015 류형욱 */
'use strict';
!function(){/* global daum:false */

var mapContainer = document.getElementById('map');
var mapOption = {
    center: new daum.maps.LatLng(37.55587972338268, 127.04939368521907),
    level: 3,
    draggable: false,
    marker: [{
      position: new daum.maps.LatLng(37.55587972338268, 127.04939368521907), 
      text: '한양대학교 정보통신관 학생회실'
    }]
  };

setTimeout(function () {
  new daum.maps.StaticMap(mapContainer, mapOption);  
}, 0);}();
!function(){var Person = React.createClass({displayName: "Person",
  render: function() {
    return (
      React.createElement("div", {className: "atlas-elem", style: { backgroundImage: 'url(' + this.props.picture + ')'}}, 
        React.createElement("div", {className: "atlas-name"}, this.props.name)
      )
    );
  }
});

var peopleUrl = 'https://info.hyualoha.kr/api/1/people';

var People = React.createClass({displayName: "People",
  render: function() {
    return (
      React.createElement("div", null, 
        
          this.props.people.map(function (person) {
            return React.createElement(Person, {picture: person.picture, name: person.name});
          })
        
      )
    );
  }
});

$.ajaxSetup({
  dataFilter: function (data) {
    return data.substring(6, data.length);
  }
});

$.get(peopleUrl, null, function (data) {
  shuffle(data);
  React.render(
    React.createElement(People, {people: data}),
    document.getElementById('atlas')
  );
});

function shuffle(data) {
  var m = data.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = data[m];
    data[m] = data[i];
    data[i] = t;
  }  
}

// pink: 머신 러닝 서버
// violet: API 서버
}();