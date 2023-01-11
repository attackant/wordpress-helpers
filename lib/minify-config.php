<?php
//###WPM-CACHE-PATH-BEFORE###
$min_cachePath = "/home/mindsharedev/dev.mindsharelabs.com/wp-content/uploads/minify-cache";
//###WPM-CACHE-PATH-AFTER###

//###WPM-CACHE-AGE-BEFORE###
$min_serveOptions['maxAge'] = 432000;
//###WPM-CACHE-AGE-AFTER###

//###WPM-ERROR-LOGGER-BEFORE###
$min_errorLogger = true;
//###WPM-ERROR-LOGGER-AFTER###

//###WPM-DEBUG-FLAG-BEFORE###
$min_allowDebugFlag = true;
//###WPM-DEBUG-FLAG-AFTER###

$min_enableBuilder                        = false;
$min_builderPassword                      = 'admin';
$min_documentRoot                         = '';
$min_cacheFileLocking                     = true;
$min_serveOptions['bubbleCssImports']     = false;
$min_serveOptions['minApp']['groupsOnly'] = false;
$min_symlinks                             = array();
$min_uploaderHoursBehind                  = 0;
$min_libPath                              = dirname( __FILE__ ) . '/min/lib';
ini_set( 'zlib.output_compression', '0' );
