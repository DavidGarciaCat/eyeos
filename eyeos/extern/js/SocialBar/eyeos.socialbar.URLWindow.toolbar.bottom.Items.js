/*
*                 eyeos - The Open Source Cloud's Web Desktop
*                               Version 2.0
*                   Copyright (C) 2007 - 2010 eyeos Team 
* 
* This program is free software; you can redistribute it and/or modify it under
* the terms of the GNU Affero General Public License version 3 as published by the
* Free Software Foundation.
* 
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
* details.
* 
* You should have received a copy of the GNU Affero General Public License
* version 3 along with this program in the file "LICENSE".  If not, see 
* <http://www.gnu.org/licenses/agpl-3.0.txt>.
* 
* See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
* 
* The interactive user interfaces in modified source and object code versions
* of this program must display Appropriate Legal Notices, as required under
* Section 5 of the GNU Affero General Public License version 3.
* 
* In accordance with Section 7(b) of the GNU Affero General Public License version 3,
* these Appropriate Legal Notices must retain the display of the "Powered by
* eyeos" logo and retain the original copyright notice. If the display of the 
* logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
* must display the words "Powered by eyeos" and retain the original copyright notice. 
*/
/**
 *	Implementing {@see eyeos.ui.genericbar.IItems}.
 */
qx.Class.define('eyeos.socialbar.URLWindow.toolbar.bottom.Items', {
	extend : qx.core.Object,
	implement : [eyeos.ui.genericbar.IItems],

	construct: function() {
		arguments.callee.base.call(this);
		this.setItems(this.items);
	},

	properties: {
		items: {
			init: null
		}
	},

	members: {
		items:[{
			name: 'Format',
			id: 'Format',
			Group: [{
				name: 'Font',
				id: 'Font',
				type: 'SelectBox',
				cmd: 'formatFont',
				subMenu: [{
					name: 'Arial',
					id: 'Arial'
				}, {
					name: 'Arial Black',
					id: 'Arial Black'
				}, {
					name: 'Book Antiqua',
					id: 'Book Antiqua'
				}, {
					name: 'Comic Sans MS',
					id: 'Comic Sans MS'
				}, {
					name: 'Courier',
					id: 'Courier'
				}, {
					name: 'Courier New',
					id: 'Courier New'

				}, {
					name: 'Geneva',
					id: 'Geneva'
				}, {
					name: 'Georgia',
					id: 'Georgia'
				}, {
					name: 'Helvetica',
					id: 'Helvetica'
				}, {
					name: 'Lucida Console',
					id: 'Lucida Console'
				}, {
					name: 'Lucida Grande',
					id: 'Lucida Grande'
				}, {
					name: 'Lucida Sans Unicode',
					id: 'Lucida Sans Unicode'
				}, {
					name: 'Monaco',
					id: 'Monaco'
				}, {
					name: 'MS Serif',
					id: 'MS Serif'
				}, {
					name: 'Palatino',
					id: 'Palatino'
				}, {
					name: 'Tahoma',
					id: 'Tahoma'
				}, {
					name: 'Times',
					id: 'Times'
				}, {
					name: 'Times New Roman',
					id: 'Times New Roman'
				}, {
					name: 'Trebuchet MS',
					id: 'Trebuchet MS'
				}, {
					name: 'Verdana',
					id: 'Verdana'
				}]
			}, {
				name: 'Size',
				id: 'Size',
				type: 'SelectBox',
				cmd: 'formatSize',
				subMenu: [{
					name: '8',
					id: '8'
				}, {
					name: '10',
					id: '10'
				}, {
					name: '12',
					id: '12'
				}, {
					name: '14',
					id: '14'
				}, {
					name: '18',
					id: '18'
				}, {
					name: '24',
					id: '24'
				}, {
					name: '36',
					id: '36'

				}]
			}]
		}, {
			name: 'Color',
			id: 'Color',

			Group: [{
				name: 'underline',
				id: 'underline',
				hideLabel: true,
				image: 'txt-color_icon.png',
				type: 'ColorButton',
				cmd: 'setForeColor'
			}, {
				name: 'selection',
				id: 'selection',
				hideLabel: true,
				image: 'txt-highlight_icon.png',
				type: 'ColorButton',
				cmd: 'setBackColor'
			}]
		}, {
			name: 'Type',
			Group: [{
				name: 'Bold',
				id: 'Bold',
				hideLabel: true,
				image: 'format-text-bold.png',
				cmd: 'formatType',
				type: 'ToggleButton',
				needUpdates: true
			}, {
				name: 'Italic',
				id: 'Italic',
				hideLabel: true,
				image: 'format-text-italic.png',
				cmd: 'formatType',
				type: 'ToggleButton',
				needUpdates: true
			}, {
				name: 'Underline',
				id: 'Underline',
				hideLabel: true,
				image: 'format-text-underline.png',
				cmd: 'formatType',
				type: 'ToggleButton',
				needUpdates: true
			}, {
				name: 'Strikethrough',
				id: 'Strikethrough',
				hideLabel: true,
				image: 'format-text-strikethrough.png',
				cmd: 'formatType',
				type: 'ToggleButton',
				needUpdates: true
			}]
		}, {
			name: 'Align',
			Group: [{
				name: 'justifyleft',
				id: 'justifyleft',
				hideLabel: true,
				image: 'format-justify-left.png',
				cmd: 'formatAlign',
				type: 'ToggleButton',
				needAManager: true
			}, {
				name: 'justifycenter',
				id: 'justifycenter',
				hideLabel: true,
				image: 'format-justify-center.png',
				cmd: 'formatAlign',
				type: 'ToggleButton',
				needAManager: true
			}, {
				name: 'justifyright',
				id: 'justifyright',
				hideLabel: true,
				image: 'format-justify-right.png',
				cmd: 'formatAlign',
				type: 'ToggleButton',
				needAManager: true
			}, {
				name: 'justifyfull',
				id: 'justifyfull',
				hideLabel: true,
				image: 'format-justify-fill.png',
				cmd: 'formatAlign',
				type: 'ToggleButton',
				needAManager: true
			}]
		}, {
			name: 'Insert',
			Group: [{
				name: 'Image',
				id: 'Image',
				hideLabel: true,
				image: 'games-config-background.png',
				cmd: 'insertImage'
			}, {
				name: 'Link',
				id: 'Link',
				hideLabel: true,
				image: 'insert-link.png',
				cmd: 'insertLink'
			}]
		}, {
			name: 'List',
			id: 'List',
			Group: [{
				name: 'Ordered',
				id: 'Ordered',
				hideLabel: true,
				image: 'format-list-ordered.png',
				cmd: 'insertOrderedList',
				type: 'ToggleButton',
				needAManager: true,
				allowEmptySelection: true
			}, {
				name: 'Unordered',
				id: 'Unordered',
				hideLabel: true,
				image: 'format-list-unordered.png',
				cmd: 'insertUnorderedList',
				type: 'ToggleButton',
				needAManager: true,
				allowEmptySelection: true
			}]
		}, {
			name: 'Margin',
			id: 'Margin',
			Group: [{
				name: 'left',
				id: 'left',
				hideLabel: true,
				image: 'sangizq_jac.png',
				cmd: 'formatIndentMore'
			}, {
				name: 'right',
				id: 'right',
				hideLabel: true,
				image: 'sangdir_jac.png',
				cmd: 'formatIndentLess'
			}]
		}]
	}
});
