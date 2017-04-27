/*var test1 = new Vue({
  el: '#test1',
  data: {
    bool: true,
    num: 21
  }
});

var test2 = new Vue({
  el: '#test2',
  data: {
    rawHtml: '<a href="https://www.google.de">G O O G L E</a>'
  }
});

var image = new Vue({
  el: "#image",
  data: {
    imagesource: 'https://upload.wikimedia.org/wikipedia/de/thumb/c/c1/Fiducia_%26_GAD_IT_logo.svg/1024px-Fiducia_%26_GAD_IT_logo.svg.png'
  }
})

var directives = new Vue({
  el: ".directives",
  data: {
    visible: true
  }
})

var filter = new Vue({
  el: "#filter",
  data: {
    text: "HEY THERE, i'm text!",
  },
  filters: {
    lowercase: function (value) {
      return String(value).toLowerCase();
    },
    togglecase: function (value, add) {
      var result = '';
      for (var i = 0; i < String(value).length; i++) {
        var s = String(value).charAt(i);
        if (s === s.toLowerCase()) {
          result += s.toUpperCase();
        } else {
          result += s.toLowerCase();
        }
      }
      result += add;
      return result;
    }
  }
})

var computed1 = new Vue({
  el: '#computed1',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the instance
      return this.message.split('').reverse().join('');
    }
  }
})

var classbindtest = new Vue({
  el: "#classbindtest",
  data: {
    isInvalid: true
  }
})

var styletest = new Vue({
  el: '#styletest',
  data: {
    styleObj: {
      color: 'blue',
      'background-color': 'rgba(255, 0, 255, 0.2)'
    }
  }
})

var fortest = new Vue({
  el: '#fortest',
  data: {
    items: [
      { msg: "abc" },
      { msg: "xyz" },
      { msg: "123" }
    ]
  }
})

var fortest10 = new Vue({
  el: '#fortest10'
})

var msgBtn = new Vue({
  el: '#msgBtn',
  methods: {
    msg: function () {
      alert("Hey you!");
    }
  }
})

var radiovmodel = new Vue({
  el: '#radiovmodel',
  data: {
    checkedNames: []
  }
})*/




//components

/*Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

new Vue({
  el: '#example',
  components: {
    'my-comp': {
      template: '<b>THIS IS A COMPONENT</b>'
    }
    //only usable inside the element linked to this instance (in this case, <div id="example">)
  }
})*/

var Navbar = Vue.component('nav-bar', {
  template: '<ul class="nav-bar"><slot/></ul>'
})

var Navbarel = Vue.component('nav-bar-el', {
  template: '<li class="nav-bar-el" :class="{active: active}" :style=styleObj @mouseover="mouseover"> \
  <a :href="src" @click="clicked"><slot/></a></li>',
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
        float: this.float,
        'border-left': this.getLeftB(),
        'border-right': this.getRightB()
      },
      selectedTab: 'home'
    }
  },
  methods: {
    mouseover: function () {
      console.log(this.src);
      this.$emit('hover');
    },
    getLeftB: function () {
      if (this.float == "left") {
        return '';
      } else if (this.float == "right") {
        return '1px solid rgba(0,0,0,0.1)'
      }
    },
    getRightB: function () {
      if (this.float == "right") {
        return '';
      } else if (this.float == "left") {
        return '1px solid rgba(0,0,0,0.1)'
      }
    },
    clicked: function(e) {
      console.log("clicked", e);
      content.selectedTab=e.target.text.toLowerCase();
    }
  }
});

var navbar = new Vue({
  el: '#navbar',
  data: {
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

var content = new Vue({
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
})