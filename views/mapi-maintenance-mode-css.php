<?php
/**
 * mapi_maintenance-mode-css.php
 *
 * @created 8/22/13 11:33 AM
 * @author Damian Taggart
 * @copyright Copyright (c) 2006-2023
 * @link https://github.com/attackant/wordpress-helpers
 *
 */


$maintenance_mode_css = <<<CSS
body {
	background: #fff;
	font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
#content {
	color: #555;
	width: 450px;
	margin: 100px auto;
	font-size: 20px;
	line-height: 28px;
}
.copyright {
	opacity: 0.8;
	text-transform: uppercase;
	font-size: 10px;
	float: right;
}
a {
	color: #555;
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
	color: #000;
}
CSS;
