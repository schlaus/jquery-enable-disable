/*
 * jquery-enable-disable plugin v1.0.2
 * https://github.com/schlaus/jquery-enable-disable
 * 
 * A simple, lightweight jQuery plugin that adds methods
 * to enable and disable elements, as well as to chcek
 * whether an element is enabled or disabled. Designed
 * to work well together with Bootstrap!
 * 
 * Copyright 2015 Klaus Karkia
 * Released under the MIT license
 * http://schlaus.mit-license.org/
 *
 */
jQuery.fn.enable = function(extraFilter) {
  extraFilter = extraFilter || "*";
  this.filter(extraFilter).each(function() {
    var $this, ref;
    $this = jQuery(this);
    $this.removeClass('disabled').prop('disabled', false);
    switch ($this.prop('tagName')) {
      case "A":
        if ($this.data('disabled-href')) {
          return $this.attr('href', $this.data('disabled-href')).removeData("disabled-href");
        }
        break;
      case "INPUT":
        if ((ref = $this.prop("type")) === "checkbox" || ref === "radio") {
          return $this.parents(".radio,.radio-inline,.checkbox,.checkbox-inline").removeClass("disabled");
        }
        break;
      case "FIELDSET":
      case "FORM":
        return $this.find("input,select,label,a,button,fieldset,textarea,li").each(function() {
          return jQuery(this).enable();
        });
    }
  });
  return this;
};

jQuery.fn.disable = function(extraFilter) {
  extraFilter = extraFilter || "*";
  this.filter(extraFilter).each(function() {
    var $this, ref;
    $this = jQuery(this);
    $this.addClass('disabled').prop('disabled', true);
    switch ($this.prop("tagName")) {
      case "A":
        if ($this.attr("href") && !$this.data("disabled-href")) {
          return $this.data("disabled-href", $this.attr("href")).attr("href", null);
        }
        break;
      case "INPUT":
        if ((ref = $this.prop("type")) === "checkbox" || ref === "radio") {
          return $this.parents(".radio,.radio-inline,.checkbox,.checkbox-inline").addClass("disabled");
        }
        break;
      case "FIELDSET":
      case "FORM":
        return $this.find("input,select,label,a,button,fieldset,textarea,li").each(function() {
          return jQuery(this).disable();
        });
    }
  });
  return this;
};

jQuery.fn.isDisabled = function() {
  return this.hasClass("disabled") || this.prop("disabled") === true || this.data("disabled-href");
};

jQuery.fn.isEnabled = function() {
  return !this.isDisabled;
};
