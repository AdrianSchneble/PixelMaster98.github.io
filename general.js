
addNavBar = function () {
  var navbar = document.createElement('nav-bar');
  navbar.id = 'navbar';
  document.getElementById('body').appendChild(navbar);
};

addNavBarTab = function (text, active, src, float) {
  if (text === undefined) {
    console.log('You need at least 1 parameter as the tab\'s text');
    return;
  }
  if (float === undefined) {
    console.log('float undefined');
    float = 'left'; 
  }
  if (active === undefined) {
    console.log('active undefined');
    active = false; 
  }
  /*if (src === undefined) {
    console.log('src undefined');
    src = '';
  }*/
  var tab = document.createElement('nav-bar-tab');
  tab.innerHTML = text;
  text = String(text).toLowerCase().trim();
  tab.setAttribute(':active', active);
  tab.setAttribute('v-on:hover', 'hovered');
  tab.setAttribute('linked', 'hovered');
  tab.setAttribute('float', float);
  if (src !== undefined && src !== '') {
    tab.setAttribute('src', src);
  }
  document.getElementById('navbar').appendChild(tab);
}

addNavBar();
addNavBarTab('Home', true);
addNavBarTab('About');
addNavBarTab('Test', false, 'http://www.google.de', 'right');




var Navbar = Vue.component('nav-bar', {
  template: '<ul class="nav-bar"><slot/></ul>'
})

var Navbarel = Vue.component('nav-bar-tab', {
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
  data: function () {
    return {
      styleObj: {
        float: this.float
      },
      selectedTab: 'home'
    }
  },
  methods: {
    mouseover: function () {
      console.log(this.src);
      this.$emit('hover');
    },
    clicked: function (e) {
      console.log("clicked", e);
      content.selectedTab = e.target.text.toLowerCase();
    }
  }
});

var navbar = new Vue({
  el: '#navbar', data: {
    mycomp: Navbarel
  },
  methods: {
    hovered: function () {
      console.log('test');
    }
  }
})

var Myelement = Vue.component('my-element', {
  template: '<div class="myelement"><p><slot/></p></div>'
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