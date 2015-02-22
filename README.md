jquery-enable-disable
=====================

A simple, lightweight jQuery plugin that adds methods to enable and disable elements, as well as to chcek whether an element is enabled or disabled. Designed to work well together with Bootstrap!

You can pass a jQuery selector as an additional argument to filter a collection.

Works with these elements:
* input
* a
* button
* li (bootstrap menuitems)
* select
* textarea
* fieldset**&#42;**
* form**&#42;**
* any other element that can be disabled by adding a property and/or class named 'disabled'

**&#42;** When disabling or enabling fieldsets or forms the element itself as well as all explicitly supported elements within it are affected.

**When using on collections** please note that the provided filtering capability only affects the items in the collection, and not their children. I.e. if you have a collection of only fieldsets and provide 'a' as the additional filter, you might expect that anchor elements within the fieldsets get disabled, but in fact nothing will. You'll have to modify the collection manually first to achieve that kind of behaviour.

jquery-enable-disable requires jQuery version 1.6 or higher, and by all means should be compatible with all the browsers that version supports:

* Firefox 2.0+
* Internet Explorer 6+
* Safari 3+
* Opera 10.6+
* Chrome 8+

... but it has not been tested in all of those.

Please note that when disabling links (&lt;a&gt;), the original url or whatever it had in the href attribute is stored in a data attribute called 'disabled-href'. When you enable the element again, the href attribute is set back to whatever that data attribute contains, and the data attribute itself is removed afterwards.

Installation
------------
### With bower:
```
bower install jquery-enable-disable
```

### With npm:
```
npm install jquery-enable-disable
```

### Manually:
Download dist/jquery-enable-disable.min.js and include it

Usage
-----

```

// To enable
$('#selector').enable();	// chainable

// To disable
$('#selector').disable();	// chainable

// To only disable inputs with the class 'not-required'
$('input').disable('.not-required');

// To check if element is disabled
// i.e. has a property or class named 'disabled'
// or a data attribute specific to this plugin
// called 'data-disabled-href'
$('#selector').isDisabled()	// returns bool

// To check if element is enabled
// i.e. none of the above is true
$('#selector').isEnabled()	// returns bool

```