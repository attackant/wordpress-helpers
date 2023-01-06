/**
 * Mindshare Options Framework
 *
 * JavaScript
 *
 * @since 1.0
 */
	//var $ = jQuery.noConflict();
function update_repeater_fields() {
	/**
	 * Datepicker Field.
	 *
	 * @since 1.0
	 */
	jQuery('.at-date').each(function() {
		var $this = jQuery(this), format = $this.attr('rel');
		$this.datepicker({ showButtonPanel: true, dateFormat: format });
	});
	/**
	 * Timepicker Field.
	 *
	 * @since 1.0
	 */
	jQuery('.at-time').each(function() {
		var $this = jQuery(this), format = $this.attr('rel');
		$this.timepicker({ showSecond: true, timeFormat: format });
	});
	/**
	 * Colorpicker Field.
	 *
	 * @since 1.0
	 */
	/*
	 /**
	 * Add Files.
	 *
	 * @since 1.0
	 */
	jQuery('.at-add-file').click(function() {
		var $first = jQuery(this).parent().find('.file-input:first');
		$first.clone().insertAfter($first).show();
		return false;
	});
	/**
	 * Delete File.
	 *
	 * @since 1.0
	 */
	jQuery('.at-upload').delegate('.at-delete-file', 'click', function() {
		var $this = jQuery(this), $parent = $this.parent(), data = $this.attr('rel');
		$.post(ajaxurl, { action: 'at_delete_file', data: data }, function(response) {
			response == '0' ? ( alert('File has been successfully deleted.'), $parent.remove() ) : alert('You do NOT have permission to delete this file.');
		});
		return false;
	});
	/**
	 * Reorder Images.
	 *
	 * @since 1.0
	 */
	jQuery('.at-images').each(function() {
		var $this = jQuery(this), order, data;
		$this.sortable({
			placeholder: 'ui-state-highlight',
			update:      function() {
				order = $this.sortable('serialize');
				data = order + '|' + $this.siblings('.at-img-data').val();
				jQuery.post(ajaxurl, {action: 'at_reorder_images', data: data}, function(response) {
					response == '0' ? alert('Order saved!') : alert("You don't have permission to reorder img.");
				});
			}
		});
	});
	/**
	 * Thickbox Upload
	 *
	 * @since 1.0
	 */
	jQuery('.at-upload-button').click(function() {
		var data = jQuery(this).attr('rel').split('|'), post_id = data[0], field_id = data[1], backup = window.send_to_editor; // backup the original 'send_to_editor' function which adds img to the editor
		// change the function to make it adds img to our section of uploaded img
		window.send_to_editor = function(html) {
			jQuery('#at-img-' + field_id).append(jQuery(html));
			tb_remove();
			window.send_to_editor = backup;
		};
		// note that we pass the field_id and post_id here
		tb_show('', 'media-upload.php?post_id=0&field_id=' + field_id + '&type=image&TB_iframe=true&apc=apc');
		return false;
	});
}
var Ed_array = Array;

function codemirror_resize_fix() {
	var evt = document.createEvent('UIEvents');
	evt.initUIEvent('resize', true, false, window, 0);
	window.dispatchEvent(evt);
}

jQuery(document).ready(function($) {
	/**
	 * Code Editor Field
	 * @since 2.1
	 */
	var e_d_count = 0;
	jQuery(".code_text").each(function() {

		var lang = jQuery(this).attr("data-lang");
		switch(lang) {
			case 'php':
				lang = 'application/x-httpd-php';
				break;
			case 'css':
				lang = 'text/css';
				break;
			case 'html':
				lang = 'text/html';
				break;
			case 'javascript':
				lang = 'text/javascript';
				break;
			default:
				lang = 'application/x-httpd-php';
		}

		/*var theme = jQuery(this).attr("data-theme");
		 switch(theme) {
		 case 'default':
		 theme = 'default';
		 break;
		 case 'light':
		 theme = 'solarizedLight';
		 break;
		 case 'dark':
		 theme = 'solarizedDark';
		 break;
		 default:
		 theme = 'default';
		 }*/

		var editor = CodeMirror.fromTextArea(document.getElementById(jQuery(this).attr('id')), {
			lineNumbers:    true,
			//matchBrackets:  true,
			mode:           lang,
			indentUnit:     4,
			indentWithTabs: true
			//enterMode:      "keep",
			//tabMode:        "shift"
		});
		//editor.setOption("theme", theme);

		//		jQuery(editor.getScrollerElement()).width(100); // set this low enough
		//		width = jQuery(editor.getScrollerElement()).parent().width();
		//		jQuery(editor.getScrollerElement()).width(width); // set it to
		editor.refresh();
		//console.dir(editor);

		Ed_array[e_d_count] = editor;
		e_d_count++;
	});

	/**
	 * jquery iphone style checkbox
	 */
	jQuery('.rw-checkbox').iphoneStyle();

	/**
	 *  conditional fields
	 *  @since 0.5
	 *
	 *  @todo make iphone style optional
	 */
	jQuery('.conditional_control').iphoneStyle();
	jQuery(".conditional_control").change(function() {
		if(jQuery(this).is(':checked')) {
			jQuery(this).parent().next().show('fast');
			codemirror_resize_fix();
		} else {
			jQuery(this).parent().next().hide('fast');
		}
	});
	/**
	 * repeater Field
	 * @since 1.1
	 */
	/*jQuery( ".at-repeater-item" ).live('click', function() {
	 var $this  = jQuery(this);
	 $this.siblings().toggle();
	 });
	 jQuery(".at-repeater-block").click(function(){
	 jQuery(this).find('table').toggle();
	 });
	 */
	//edit
	jQuery(".at-re-toggle").live('click', function() {
		jQuery(this).prev().toggle('slow');
	});
	/**
	 * Datepicker Field.
	 *
	 * @since 1.0
	 */
	jQuery('.at-date').each(function() {
		var $this = jQuery(this), format = $this.attr('rel');
		$this.datepicker({ showButtonPanel: true, dateFormat: format });
	});
	/**
	 * Timepicker Field.
	 *
	 * @since 1.0
	 */
	jQuery('.at-time').each(function() {
		var $this = jQuery(this), format = $this.attr('rel');
		$this.timepicker({ showSecond: true, timeFormat: format });
	});
	/**
	 * Colorpicker Field.
	 *
	 * @since 1.0
	 * better handler for color picker with repeater fields support
	 * which now works both when button is clicked and when field gains focus.
	 */
	jQuery('.at-color').live('focus', function() {
		var $this = jQuery(this);
		jQuery(this).siblings('.at-color-picker').farbtastic($this).toggle();
	});
	jQuery('.at-color').live('focusout', function() {
		var $this = jQuery(this);
		jQuery(this).siblings('.at-color-picker').farbtastic($this).toggle();
	});
	/**
	 * Select Color Field.
	 *
	 * @since 1.0
	 */
	jQuery('.at-color-select').live('click', function() {
		var $this = jQuery(this);
		var id = $this.attr('rel');
		jQuery(this).siblings('.at-color-picker').farbtastic("#" + id).toggle();
		jQuery(this).prev().css('background', jQuery(this).prev().val());
		return false;
	});
	/**
	 * Add Files.
	 *
	 * @since 1.0
	 */
	jQuery('.at-add-file').click(function() {
		var $first = jQuery(this).parent().find('.file-input:first');
		$first.clone().insertAfter($first).show();
		return false;
	});
	/**
	 * Delete File.
	 *
	 * @since 1.0
	 */
	jQuery('.at-upload').delegate('.at-delete-file', 'click', function() {
		var $this = jQuery(this), $parent = $this.parent(), data = $this.attr('rel');
		jQuery.post(ajaxurl, { action: 'at_delete_file', data: data }, function(response) {
			response == '0' ? ( alert('File has been successfully deleted.'), $parent.remove() ) : alert('You do NOT have permission to delete this file.');
		});
		return false;
	});
	/**
	 * Thickbox Upload
	 *
	 * @since 1.0
	 */
	jQuery('.at-upload-button').click(function() {
		var data = jQuery(this).attr('rel').split('|'), post_id = data[0], field_id = data[1], backup = window.send_to_editor; // backup the original 'send_to_editor' function which adds img to the editor
		// change the function to make it adds img to our section of uploaded img
		window.send_to_editor = function(html) {
			jQuery('#at-img-' + field_id).append(jQuery(html));
			tb_remove();
			window.send_to_editor = backup;
		};
		// note that we pass the field_id and post_id here
		tb_show('', 'media-upload.php?post_id=0&field_id=' + field_id + '&type=image&TB_iframe=true&apc=apc');
		return false;
	});
	/**
	 * initiate repeater sortable option
	 * since 0.4
	 */
	jQuery(".repeater-sortable").sortable();
	/**
	 * initiate sortable fields option
	 * since 0.4
	 */
	jQuery(".at-sortable").sortable({
		placeholder: "ui-state-highlight"
	});
	/**
	 * Helper Function
	 *
	 * Get Query string value by name.
	 *
	 * @since 1.0
	 */
	function get_query_var(name) {
		var match = RegExp('[?&]' + name + '=([^&#]*)').exec(location.href);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}

	//new image upload field
	function load_images_muploader() {
		jQuery(".mupload_img_holder").each(function(i, v) {
			if(jQuery(this).next().next().val() != '') {
				if(!jQuery(this).children().size() > 0) {
					var h = jQuery(this).attr('data-he');
					var w = jQuery(this).attr('data-wi');
					jQuery(this).append('<img src="' + jQuery(this).next().next().val() + '" style="height: ' + h + ';width: ' + w + ';" />');
					jQuery(this).next().next().next().val("Delete");
					jQuery(this).next().next().next().removeClass('at-upload_image_button').addClass('at-delete_image_button');
				}
			}
		});
	}

	load_images_muploader();
	//delete img button
	jQuery('.at-delete_image_button').live('click', function(e) {
		var field_id = jQuery(this).attr("rel");
		var at_id = jQuery(this).prev().prev();
		var at_src = jQuery(this).prev();
		var t_button = jQuery(this);
		data = {
			action:        'apc_delete_mupload',
			_wpnonce:      jQuery('#nonce-delete-mupload_' + field_id).val(),
			field_id:      field_id,
			attachment_id: jQuery(at_id).val()
		};
		jQuery.getJSON(ajaxurl, data, function(response) {
			if('success' == response.status) {
				jQuery(t_button).val("Upload Image");
				jQuery(t_button).removeClass('at-delete_image_button').addClass('at-upload_image_button');
				//clear html values
				jQuery(at_id).val('');
				jQuery(at_src).val('');
				jQuery(at_id).prev().html('');
				load_images_muploader();
			} else {
				alert(response.message);
			}
		});
		return false;
	});
	//upload button
	var formfield1;
	var formfield2;
	jQuery('.at-upload_image_button').live('click', function(e) {
		formfield1 = jQuery(this).prev();
		formfield2 = jQuery(this).prev().prev();
		tb_show('', 'media-upload.php?post_id=0&type=image&apc=apc&TB_iframe=true');
		//store old send to editor function
		window.restore_send_to_editor = window.send_to_editor;
		//overwrite send to editor function
		window.send_to_editor = function(html) {
			imgurl = jQuery('img', html).attr('src');
			img_calsses = jQuery('img', html).attr('class').split(" ");
			att_id = '';
			jQuery.each(img_calsses, function(i, val) {
				if(val.indexOf("wp-image") != -1) {
					att_id = val.replace('wp-image-', "");
				}
			});
			jQuery(formfield2).val(att_id);
			jQuery(formfield1).val(imgurl);
			load_images_muploader();
			tb_remove();
			//restore old send to editor function
			window.send_to_editor = window.restore_send_to_editor;
		}
		return false;
	});
	//
	/**
	 * microtime used as hack to avoid ajax cache
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  boolean get_as_float
	 *
	 * @return microtime as int or float
	 */
	function microtime(get_as_float) {
		var now = new Date().getTime() / 1000;
		var s = parseInt(now);
		return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + " " + s;
	}

	/**
	 * do_ajax
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  string which  (import|export)
	 *
	 * @return void
	 */
	function do_ajax_import_export(which) {
		before_ajax_import_export(which);
		var group = jQuery("#option_group_name").val();
		var seq_selector = "#apc_" + which + "_nonce";
		var action_selctor = "apc_" + which + "_" + group;
		jQuery.ajaxSetup({ cache: false });
		if(which == 'export') {
			export_ajax_call(action_selctor, group, seq_selector, which);
		} else {
			import_ajax_call(action_selctor, group, seq_selector, which);
		}
		jQuery.ajaxSetup({ cache: true });
	}

	/**
	 * export_ajax_call make export ajax call
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 *
	 * @param  string action
	 * @param  string group
	 * @param  string seq_selector
	 * @param  string which
	 * @return void
	 */
	function export_ajax_call(action, group, seq_selector, which) {
		jQuery.getJSON(ajaxurl, {
			group:  group,
			rnd:    microtime(false), //hack to avoid request cache
			action: action,
			seq:    jQuery(seq_selector).val()
		}, function(data) {
			if(data) {
				export_response(data);
			} else {
				alert("Something Went Wrong, try again later");
			}
			after_ajax_import_export(which);
		});
	}

	/**
	 * import_ajax_call make import ajax call
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 *
	 * @param  string action
	 * @param  string group
	 * @param  string seq_selector
	 * @param  string which
	 * @return void
	 */
	function import_ajax_call(action, group, seq_selector, which) {
		jQuery.post(ajaxurl, {
			group:  group,
			rnd:    microtime(false), //hack to avoid request cache
			action: action,
			seq:    jQuery(seq_selector).val(),
			imp:    jQuery("#import_code").val()
		}, function(data) {
			if(data) {
				import_response(data);
			} else {
				alert("Something Went Wrong, try again later");
			}
			after_ajax_import_export(which);
		}, "json");
	}

	/**
	 * before_ajax_import_export
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  string which  (import|export)
	 *
	 * @return void
	 */
	function before_ajax_import_export(which) {
		jQuery(".import_status").hide("fast");
		jQuery(".export_status").hide("fast");
		jQuery(".export_results").html('').removeClass('alert-success').hide();
		jQuery(".import_results").html('').removeClass('alert-success').hide();
		if(which == 'import') {
			jQuery(".import_status").show("fast");
		} else {
			jQuery(".export_status").show("fast");
		}
	}

	/**
	 * after_ajax_import_export
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  string which  (import|export)
	 *
	 * @return void
	 */
	function after_ajax_import_export(which) {
		if(which == 'import') {
			jQuery(".import_status").hide("fast");
		} else {
			jQuery(".export_status").hide("fast");
		}
	}

	/**
	 * export_reponse
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  json data ajax response
	 * @return void
	 */
	function export_response(data) {
		if(data.code) {
			jQuery('#export_code').val(data.code);
		}
		if(data.nonce) {
			jQuery("#apc_export_nonce").val(data.nonce);
		}
		if(data.err) {
			jQuery(".export_results").html(data.err).show('slow');
		}
	}

	/**
	 * import_reponse
	 *
	 * @author Ohad Raz <admin@bainternet.info>
	 * @since 0.8
	 * @param  json data ajax response
	 *
	 * @return void
	 */
	function import_response(data) {
		if(data.nonce) {
			jQuery("#apc_import_nonce").val(data.nonce);
		}
		if(data.err) {
			jQuery(".import_results").html(data.err);
		}
		if(data.success) {
			jQuery(".import_results").html(data.success).addClass('alert-success').show('slow');
		}
	}

	/**
	 * listen for import button click
	 * @since 0.8
	 * @return void
	 */
	jQuery("#apc_import_b").live("click", function() {
		do_ajax_import_export('import');
	});
	/**
	 * listen for export button click
	 * @since 0.8
	 * @return void
	 */
	jQuery("#apc_export_b").live("click", function() {
		do_ajax_import_export('export');
	});
	jQuery("#apc_refresh_page_b").live("click", function() {
		refresh_page();
	});
	/**
	 * refresh_page
	 * @since 0.8
	 * @return void
	 */
	function refresh_page() {
		location.reload();
	}
});
