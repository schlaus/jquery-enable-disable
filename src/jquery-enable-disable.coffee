###
# jquery-enable-disable plugin v1.0.2
# https://github.com/schlaus/jquery-enable-disable
# 
# A simple, lightweight jQuery plugin that adds methods
# to enable and disable elements, as well as to chcek
# whether an element is enabled or disabled. Designed
# to work well together with Bootstrap!
# 
# Copyright 2015 Klaus Karkia
# Released under the MIT license
# http://schlaus.mit-license.org/
# 
###
jQuery.fn.enable = (extraFilter) ->
	extraFilter = extraFilter || "*"
	@.filter(extraFilter).each ->
		$this = jQuery(@)
		$this.removeClass('disabled').prop('disabled', false)
		switch $this.prop('tagName')
			when "A"
				if $this.data('disabled-href')
					$this.attr('href', $this.data('disabled-href'))
						.removeData("disabled-href")
			when "INPUT"
				if $this.prop("type") in ["checkbox", "radio"]
					$this.parents(
						".radio,.radio-inline,.checkbox,.checkbox-inline"
					).removeClass("disabled")
			when "FIELDSET", "FORM"
				$this.find("input,select,label,a,button,fieldset,textarea,li")
					.each ->
						jQuery(@).enable()
	return @

jQuery.fn.disable = (extraFilter) ->
	extraFilter = extraFilter || "*"
	@.filter(extraFilter).each ->
		$this = jQuery(@)
		$this.addClass('disabled').prop('disabled', true)
		switch $this.prop("tagName")
			when "A"
				if $this.attr("href") and not $this.data("disabled-href")
					$this.data("disabled-href", $this.attr("href"))
						.attr("href", null)
			when "INPUT"
				if $this.prop("type") in ["checkbox", "radio"]
					$this.parents(
						".radio,.radio-inline,.checkbox,.checkbox-inline"
					).addClass("disabled")
			when "FIELDSET", "FORM"
				$this.find("input,select,label,a,button,fieldset,textarea,li")
					.each ->
						jQuery(@).disable()
	return @

jQuery.fn.isDisabled = ->
	@.hasClass("disabled") or
	@.prop("disabled") is true or
	@.data("disabled-href")

jQuery.fn.isEnabled = ->
	not @.isDisabled
