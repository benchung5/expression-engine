/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 2.0
 * @filesource
 */
"use strict";$(document).ready(function(){$(".tab .arrow-list li a").on("click",function(e){var t=$('textarea[name="template_data"]'),a=t.data("codemirror.editor");a.replaceSelection($(this).text()),a.refresh(),e.preventDefault()})});