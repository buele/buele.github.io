---
layout: post
title:  "[polymer] Polymer element seed"
date:   2015-10-18 19:32:41
categories: polymer
---

Polymer element seed, with documentation comment sample: 

{% highlight html %}
<!--
@license
Your license here.
-->
<link rel="import" href="bower_components/polymer/polymer.html">


<!--
Element description.

@group Group Elements
@element element-name
@demo demo/index.html
-->
<dom-module id="element-name">
  <template>
    <style>
        /* element style here */
    </style>
    <h1>Hello from new element!</h1>
  </template>
</dom-module>

<script>
(function() {
  Polymer({
    is: 'element-name',
    properties: {
      /**
       * Property description example
       *
       * `hello world`:
       * @type {{name: string, image: string}}
       */
      propertyExample: {
        type:     String,
        value: function(){
          return '';
        },
        observer: '_propertyChanged',
        notify: true
      }
    },
    observers: [
      
    ],


    ready: function() {
    },

    /**
     * Private method descriptor.
     *
     * @return {Array<hydrolysis.ElementDescriptor>} The descriptors, or `null`.
     */
    _privateMethod: function() {
      // ...
    },

    /**
     * The `element-event` event is fired whenever `xxx` is called.
     *
     * @event element-event-xxx
     * @detail {{sound: String}}
     */

    /**
     * Description example.
     *
     * @param {string} param1.
     * @return {string} return
     */
    _propertyChanged:function(){

    },

    /**
     * Public method description.
     *
     * @return {string} return description.
     */
    publicMethod: function() {
      // ...
    }
  });
})();
</script>
{% endhighlight %}

