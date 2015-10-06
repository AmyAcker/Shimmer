// ==UserScript==
// @name        Shimmer Beta
// @description	A NightMode for Skimur!
// @author      Amy
// @include     http://skimur.com/*
// @include     https://skimur.com/*
// @include     http://*.skimur.com/*
// @include     https://*.skimur.com/*
// @run-at      document-start
// @version     1.0.8.6
// ==/UserScript==
(function() {var css = [
	"/*",
	"SHIMMER VERSION v1.0.8.6",
	"OPEN SOURCE PROJECT UNDER CC BY-SA LICENSE",
	"DESIGNED BY /U/AMY",
	"*/",
	"",
	"a:hover {",
	"    color: white",
	"}",
	"div.row {",
	"	color: #ccc",
	"}",
	"li.active {",
	"	background-color: #292929 !important",
	"}",
	".layout-topbar {",
	"	background: #292929",
	"}",
	"a.topbar-edit {",
	"	background: #292929!important;",
	"  border-color: black !important;",
	"}",
	".btn-default.active, .btn-default:active {",
	"	background: #204d74 !important;",
	"	border-color: #204d74 !important;",
	"}",
	".layout-header,",
	".sub-description,",
	".dropdown-toggle,",
	".form-control,",
	".input-group-addon {",
	"	background: #333333 !important;",
	"  border-color: black !important;",
	"}",
	".nav-tabs > li > a {",
	"	background: transparent !important;",
	"	border: none !important;",
	"	color: white !important;",
	"}",
	".nav-tabs > li {",
	"	margin-bottom: 0px",
	"}",
	"ul.account-nav  {",
	"	background: #333333 !important;",
	"	border: #333333 !important;",
	"}",
	"ul.account-nav .divider {",
	"	border-color: #808080 !important",
	"}",
	".dropdown-toggle {",
	"	color:white !important;",
	"}",
	".dropdown-menu a:hover {",
	"	color: darkorange !important;",
	"	background: none !important;",
	"}",
	".dropdown-menu a {",
	"	color: white !important",
	"}",
	"ul.dropdown-menu a:focus {",
	"	background: none",
	"}",
	".dropdown-menu {",
	"	background: #333333 !important",
	"}",
	".dropdown-toggle:hover, .dropdown-toggle:focus {",
	"	background: #292929 !important;",
	"	color: white !important;",
	"	border-color: black !important;",
	"}",
	"body {",
	"    background: #292929",
	"}",
	".nav-tabs,",
	".panel-info,",
	".reports-unignored,",
	".page-header.comments-header, .footer,",
	"div.disc.comment,",
	".form-createpost hr,",
	".col-sm-4 .panel-default,",
	".col-sm-8 hr,",
	".col-md-9 .page-header,",
	".col-md-9 td,",
	"div.col-sm-12 hr,",
	".table>thead>tr>th {",
	"  border-color: black !important",
	"}",
	"a.topbar-edit:hover,",
	".nav-tabs > li > a:hover,",
	"ul.account-nav a:hover,",
	".btn-sm:hover,",
	".md-control-fullscreen:hover,",
	"::-moz-selection {",
	"  color: darkorange !important",
	"}",
	".btn-default {",
	"	background: #337ab7;",
	"	border-color: #337ab7;",
	"	color: white !important;",
	"}",
	".btn-default:hover {",
	"	background: #286090;",
	"	border-color: #286090;",
	"}",
	".col-md-9 .btn-default.focus, .col-md-9 .btn-default:focus {",
	"	background: #204d74 !important;",
	"	border-color: #204d74 !important;",
	"}",
	"a.domain {",
	"	color: #aaa !important",
	"}",
	".form-createpost .nav-tabs .active {",
	"	background: #333333 !important",
	"}",
	".panel {",
	"	background: #292929",
	"}",
	".panel-search-info {",
	"	margin-top: 5px;",
	"	background: #333333;",
	"	color: #c3c3c3;",
	"	border-color: black;",
	"}",
	".sub-info {",
	"	margin-bottom: 8px",
	"}",
	".panel-heading {",
	"	background: #292929 !important;",
	"	border-color: black !important;",
	"	color: white !important;",
	"}",
	".list-group-item {",
	"	background: #292929 !important;",
	"  border-color: black;",
	"}",
	".btn-sm {",
	"	background: #333333 !important;",
	"	color: white;",
	"}",
	".btn-default.btn-sm.btn {",
	"	border: none;",
	"	background: #292929 !important;",
	"}",
	"blockquote {",
	"	border-color: #383838",
	"}",
	".disc .disc-body .disc-left .disc-voting.voted-up .down,",
	".disc .disc-body .disc-left .disc-voting.voted-down .up {",
	"	color: #3B3B3B",
	"}",
	"pre {",
	"	background: #333333;",
	"	color: white;",
	"	border: none;",
	"}",
	".md-header.btn-toolbar {",
	"	background: #292929",
	"}",
	".md-header .btn-primary {",
	"	border: none",
	"}",
	".md-input, .md-preview {",
	"	background: #333333 !important;",
	"	border: none !important;",
	"	margin-top: 5px !important;",
	"}",
	".btn-toolbar .btn-primary.active {",
	"	background: #555555 !important",
	"}",
	".md-editor{",
	"	border: none !important;",
	"	background: #292929;",
	"}",
	".md-editor.active {",
	"	box-shadow: none",
	"}",
	".form-control {",
	"	box-shadow: none !important;",
	"	color: white;",
	"}",
	".message.message-unread {",
	"	background:#333333 !important",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a {",
	"	color:#959595",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a:hover {",
	"	color: #ccc",
	"}",
	"span.nsfw {",
	"	background: #292929;",
	"	border-color: #292929;",
	"}",
	".disc-main a.btn-default {",
	"	background: #B71C1C !important;",
	"	border-color: #B71C1C !important;",
	"	color: white !important;",
	"}",
	".disc-main a.btn-default:hover {",
	"	background: #9C1717 !important;",
	"	border-color: #9C1717 !important;",
	"}",
	".dropdown-menu-right a, .dropdown-menu-right a:hover{",
	"	background: #333333 !important",
	"}",
	".modal-body {",
	"	background: #333333",
	"}",
	".nav-pills > li.active > a {",
	"	background: none !important;",
	"}",
	"td.actions .btn-sm {",
	"	border: none",
	"}",
	".subs-edit, .subs-edit hr, .subs-create, .subs-create hr {",
	"	color: #aaa;",
	"	border-color: black;",
	"}",
	".policies-sidebar a:hover{",
	"	background: none !important;",
	"	color: darkorange !important;",
	"}",
	".policies-sidebar a {",
	"	background: none !important;",
	"}",
	".hidden-xs .nav > li > a:focus {",
	"	background: none;",
	"	color: white !important;",
	"}",
	".col-sm-6 .form-control {",
	"	color: white",
	"}",
	".modal-body div.row {",
	"	background: #333333 !important;",
	"	color: #ccc;",
	"}",
	".close.pull-right {",
	"	color: white",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
