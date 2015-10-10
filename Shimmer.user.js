// ==UserScript==
// @name        Shimmer
// @description	A NightMode for Skimur!
// @author      Amy
// @include     http://skimur.com/*
// @include     https://skimur.com/*
// @include     http://*.skimur.com/*
// @include     https://*.skimur.com/*
// @run-at      document-start
// @version     1.1.2
// ==/UserScript==
(function() {var css = [
	"/*------------------------------------------------------------------",
	"Project:	Shimmer",
	"Version:	1.1.2",
	"Last change:	10/10/15",
	"License:       CC BY-SA",
	"Designer:      /u/Amy",
	"-------------------------------------------------------------------*/",
	"",
	"a:hover {",
	"    color: #FFF",
	"}",
	".row,",
	".subbans-bans {",
	"    color: #ccc",
	"}",
	".active {",
	"    background-color: #292929 !important",
	"}",
	".layout-topbar {",
	"    background: #292929",
	"}",
	".topbar-edit {",
	"    background: #292929 !important;",
	"    border-color: #000 !important;",
	"}",
	".btn-default.active,",
	".btn-default:active,",
	".btn-default.focus,",
	".btn-default:focus {",
	"    background: #204d74 !important;",
	"    border-color: #204d74 !important;",
	"}",
	".layout-header,",
	".sub-description,",
	".dropdown-toggle,",
	".form-control,",
	".report-summary,",
	".input-group-addon,",
	"#invite-prompt {",
	"    background: #333 !important;",
	"    border-color: #000 !important;",
	"}",
	".nav-tabs > li > a {",
	"    background: transparent !important;",
	"    border: none !important;",
	"    color: #FFF !important;",
	"}",
	".nav-tabs > li {",
	"    margin-bottom: 0",
	"}",
	".account-nav {",
	"    background: #333 !important;",
	"    border: #333 !important;",
	"}",
	".account-nav .divider {",
	"    border-color: #808080 !important",
	"}",
	".dropdown-toggle {",
	"    color: #FFF !important;",
	"}",
	".dropdown-menu a:hover {",
	"    color: #FF8C00 !important;",
	"    background: none !important;",
	"}",
	".dropdown-menu a {",
	"    color: #FFF !important",
	"}",
	"ul.dropdown-menu a:focus {",
	"    background: none",
	"}",
	".dropdown-menu {",
	"    background: #333 !important",
	"}",
	".dropdown-toggle:hover,",
	".dropdown-toggle:focus {",
	"    background: #292929 !important;",
	"    color: #FFF !important;",
	"    border-color: #000 !important;",
	"}",
	"body {",
	"    background: #292929",
	"}",
	".nav-tabs,",
	".panel-info,",
	".reports-unignored,",
	".page-header.comments-header,",
	".footer,",
	".disc.comment,",
	".form-createpost hr,",
	".col-sm-4 .panel-default,",
	".col-sm-8 hr,",
	".col-sm-8 .panel-default,",
	".col-md-9 .page-header,",
	".col-md-9 td,",
	".col-sm-12 hr,",
	".table>thead>tr>th,",
	".moderator > .permissions,",
	".moderator > .added-on,",
	".moderator > .invited-on,",
	".moderator > .actions,",
	".moderator > .user,",
	".subbans-bans hr {",
	"    border-color: #000 !important",
	"}",
	".topbar-edit:hover,",
	".nav-tabs > li > a:hover,",
	".account-nav a:hover,",
	".btn-sm:hover,",
	".md-control-fullscreen:hover,",
	".md-editor.md-fullscreen-mode .btn-primary:hover,",
	".md-editor.md-fullscreen-mode .btn-primary.active:hover,",
	".types > .btn-group-vertical label:hover,",
	".exit-fullscreen:hover,",
	"::-moz-selection {",
	"    color: #FF8C00 !important",
	"}",
	".btn-default {",
	"    background: #337ab7;",
	"    border-color: #337ab7;",
	"    color: #FFF !important;",
	"}",
	".btn-default:hover {",
	"    background: #286090;",
	"    border-color: #286090;",
	"}",
	".col-md-9 .btn-default.focus,",
	".col-md-9 .btn-default:focus {",
	"    background: #204d74 !important;",
	"    border-color: #204d74 !important;",
	"}",
	".domain {",
	"    color: #aaa !important",
	"}",
	".row .nav-tabs .active,",
	".subbans-bans .nav-tabs .active {",
	"    background: #333 !important;",
	"}",
	".panel {",
	"    background: #292929",
	"}",
	".panel-search-info {",
	"    margin-top: 5px;",
	"    background: #333;",
	"    color: #c3c3c3;",
	"    border-color: #000;",
	"}",
	".sub-info {",
	"    margin-bottom: 8px",
	"}",
	".panel-heading {",
	"    background: #292929 !important;",
	"    border-color: #000 !important;",
	"    color: #FFF !important;",
	"}",
	".list-group-item {",
	"    background: #292929 !important;",
	"    border-color: #000;",
	"}",
	".btn-sm {",
	"    background: #333 !important;",
	"    color: #FFF;",
	"}",
	".btn-default.btn-sm.btn {",
	"    border: none;",
	"    background: #292929 !important;",
	"}",
	"blockquote {",
	"    border-color: #383838",
	"}",
	".disc .disc-body .disc-left .disc-voting.voted-up .down,",
	".disc .disc-body .disc-left .disc-voting.voted-down .up {",
	"    color: #3B3B3B",
	"}",
	"pre {",
	"    background: #333;",
	"    color: #FFF;",
	"    border: none;",
	"}",
	".md-header.btn-toolbar {",
	"    background: #292929",
	"}",
	".md-header .btn-primary {",
	"    border: none",
	"}",
	".md-input,",
	".md-preview {",
	"    background: #333 !important;",
	"    border: none !important;",
	"    margin-top: 5px !important;",
	"}",
	".btn-toolbar .btn-primary.active {",
	"    background: #555 !important",
	"}",
	".md-editor {",
	"    border: none !important;",
	"    background: #292929;",
	"}",
	".md-editor.active {",
	"    box-shadow: none",
	"}",
	".md-editor.md-fullscreen-mode,",
	".md-editor.md-fullscreen-mode > .md-input,",
	".md-editor.md-fullscreen-mode > .md-input:hover,",
	".md-editor.md-fullscreen-mode > .md-input:focus,",
	".md-editor.md-fullscreen-mode > .md-preview {",
	"    background: #292929 !important;",
	"    color: #aaa !important;",
	"}",
	".md-editor.md-fullscreen-mode .btn-primary.active,",
	".md-editor.md-fullscreen-mode .btn-primary {",
	"    color: #FFF !important",
	"}",
	".form-control {",
	"    box-shadow: none !important;",
	"    color: #FFF;",
	"}",
	".message.message-unread {",
	"    background: #333 !important",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a {",
	"    color: #959595",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a:hover {",
	"    color: #ccc",
	"}",
	"span.nsfw {",
	"    background: #292929;",
	"    border-color: #292929;",
	"}",
	"code {",
	"    background: #000",
	"}",
	".permission-modal > .modal-dialog .btn-default,",
	".disc-main a.btn-default,",
	".showSweetAlert .cancel,",
	".hideSweetAlert .cancel,",
	".unsubscribed {",
	"    background: #B71C1C !important;",
	"    border-color: #B71C1C !important;",
	"    color: #FFF !important;",
	"}",
	".permission-modal > .modal-dialog .btn-default:hover,",
	".disc-main a.btn-default:hover,",
	".showSweetAlert .cancel:hover,",
	".unsubscribed:hover {",
	"    background: #9C1717 !important;",
	"    border-color: #9C1717 !important;",
	"}",
	".permission-modal > .modal-dialog .btn-default:active,",
	".permission-modal > .modal-dialog .btn-default.active,",
	".disc-main a.btn-default:active,",
	".disc-main a.btn-default.active,",
	".showSweetAlert .cancel:active,",
	".showSweetAlert .cancel.active,",
	".unsubscribed:active,",
	".unsubscribed.active {",
	"    background: #821414 !important;",
	"    border-color: #821414 !important;",
	"    box-shadow: none !important;",
	"}",
	".dropdown-menu-right a,",
	".dropdown-menu-right a:hover {",
	"    background: #333 !important",
	"}",
	".modal-body,",
	".modal-footer {",
	"    background: #333;",
	"    color: #FFF;",
	"}",
	".nav-pills > li.active > a {",
	"    background: none !important;",
	"}",
	"td.actions .btn-sm {",
	"    border: none",
	"}",
	".subs-edit,",
	".subs-edit hr,",
	".subs-create,",
	".subs-create hr {",
	"    color: #aaa;",
	"    border-color: #000;",
	"}",
	".policies-sidebar a:hover,",
	".col-md-3 > .nav-stacked > li > a:hover {",
	"    background: none !important;",
	"    color: #FF8C00 !important;",
	"}",
	".policies-sidebar a,",
	".col-md-3 > .nav-stacked > li > a {",
	"    background: none !important;",
	"}",
	".hidden-xs .nav > li > a:focus {",
	"    background: none;",
	"    color: #FFF !important;",
	"}",
	".col-sm-6 .form-control {",
	"    color: #FFF",
	"}",
	".modal-body div.row {",
	"    background: #333 !important;",
	"    color: #ccc;",
	"}",
	".close.pull-right,",
	".col-xs-11.col-sm-4 .close {",
	"    color: #FFF",
	"}",
	".showSweetAlert,",
	".hideSweetAlert {",
	"    background: #333 !important;",
	"    color: #FFF !important;",
	"}",
	".types > .btn-group-vertical label {",
	"    background: #333 !important;",
	"    border-color: #333 !important;",
	"}",
	".col-xs-11.col-sm-4 {",
	"    background: #222 !important;",
	"    border-color: #000 !important;",
	"}",
	".permission-modal .permissions hr,",
	".permission-modal .modal-footer {",
	"    border-color: #000 !important;",
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
