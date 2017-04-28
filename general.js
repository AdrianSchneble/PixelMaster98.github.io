addNavBar = function() {
  var navbar = document.createElement('nav-bar');
  navbar.id = 'navbar';
  document.getElementById('body').appendChild(navbar);
};

getNavBar = function() {
  return document.getElementById('navbar');
}

addNavBarTab = function(text, src, float) {
  if (text === undefined) {
    console.log('You need at least 1 parameter as the tab\'s text');
    return;
  }
  if (getNavBar() === null) {
    addNavBar();
  }
  if (float === undefined) {
    console.log('float undefined');
    float = 'left';
  }
  var tab = document.createElement('nav-bar-tab');
  tab.innerHTML = text;
  if (getNavBar().childNodes.length === 0) {
    tab.setAttribute(':active', true);
  } else {
    tab.setAttribute(':active', false);
  }
  tab.setAttribute('linked', String(text).toLowerCase().trim());
  tab.setAttribute('float', float);
  if (src !== undefined && src !== '') {
    tab.setAttribute('src', src);
  }
  document.getElementById('navbar').appendChild(tab);
}

setActiveTab = function(id) {
  var tabs = getNavBar().childNodes;
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute(':active', false);
  }
  tabs[id].setAttribute(':active', true);
}

getContent = function() {
  return document.getElementById('content');
}



var xhttp = new XMLHttpRequest();
var json;
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    json = JSON.parse(this.responseText);
    getContent().innerHTML = '<h3>' + json.title + '</h2><hr><p>' + json.body + "</p>";
  }
};
xhttp.open("GET", "/posts/test.json", true);
xhttp.send();









addNavBarTab('Home');
addNavBarTab('About');
addNavBarTab('Test', 'test.html', 'right');
setActiveTab(0);





Vue.component('nav-bar', {
  template: '<ul class="nav-bar"><slot/></ul>'
})

var NavBarTab = Vue.component('nav-bar-tab', {
  template: '<li class="nav-bar-tab" :class="{active: active}" :style=styleObj @mouseover="mouseover"><a :href="src" @click="clicked"><slot/></a></li>',
  props: {
    src: {
      type: String
    },
    float: {
      type: String,
      default: "left"
    },
    active: Boolean,
    linked: null
  },
  data: function() {
    return {
      styleObj: {
        float: this.float
      },
      selectedTab: 'home'
    }
  },
  methods: {
    mouseover: function() {
      console.log(this.src);
      this.$emit('hover');
    },
    clicked: function(e) {
      console.log("clicked", e);
      //TODO
    }
  }
});

//needs to be after component registration
new Vue({
  el: '#body'
})
new Vue({
  el: '#content'
})


/*var content = new Vue({
  el: '#content',
  data: {
    selectedTab: 'home'
  },
  components: {
    home: {
      template: '<my-element>abc</my-element>'
    },
    about: {
      template: '<my-element>def</my-element>'
    }
  }
})*/
