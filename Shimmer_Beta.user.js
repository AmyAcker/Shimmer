// ==UserScript==
// @name        Shimmer Beta
// @description	A NightMode for Skimur!
// @author      Amy
// @include     http://skimur.com/*
// @include     https://skimur.com/*
// @include     http://*.skimur.com/*
// @include     https://*.skimur.com/*
// @run-at      document-start
// @version     1.2.7.1
// ==/UserScript==
(function() {var css = [
	"/*------------------------------------------------------------------",
	"Project:	Shimmer Beta",
	"Version:	1.2.7.1",
	"Last change:	12/16/15",
	"License: CC BY-SA",
	"Designer: /u/Amy",
	"-------------------------------------------------------------------*/",
	"",
	"a:hover,",
	"a:active,",
	"a:focus {",
	"    text-decoration: none;",
	"}",
	".link:visited {",
	"    color: #715099;",
	"}",
	".link:visited:hover,",
	".link:visited:active,",
	".link:visited:focus {",
	"    color: #44305B;",
	"}",
	".row,",
	".subbans-bans {",
	"    color: #aaa;",
	"}",
	".nav-tabs>li.active>a,",
	".nav-tabs>li.active>a:focus,",
	".nav-tabs>li.active>a:hover {",
	"    color: #fff;",
	"    background-color: #212121;",
	"    border: 1px solid #000 !important;",
	"    border-bottom-color: transparent !important;",
	"}",
	".nav-tabs>li.active>a:hover,",
	".row .nav-tabs > li > a:focus {",
	"    background: #212121 !important;",
	"    border-color: #000 !important;",
	"    border-bottom-color: transparent !important;",
	"}",
	".nav-tabs > li > a:hover {",
	"    background: transparent !important;",
	"    border-color: transparent !important;",
	"}",
	".col-md-3 .nav .active {",
	"    border: none !important;",
	"}",
	".layout-topbar {",
	"    background: #212121",
	"}",
	".layout-announcement {",
	"    background: transparent;",
	"    border-color: #000;",
	"    border-radius: 1px !important;",
	"    color: #c7254e;",
	"}",
	".layout-header .layout-header-account ul.account-nav > li.inbox.has-mail a {",
	"    color: #C94720 !important;",
	"}",
	".layout-header .layout-header-account ul.account-nav > li.inbox.has-mail a:hover {",
	"    color: #983618 !important;",
	"}",
	".layout-header-banner {",
	"    filter: brightness(0.8);",
	"    -webkit-filter: brightness(0.8);",
	"}",
	".topbar-edit {",
	"    background: #212121 !important;",
	"    border-color: #000 !important;",
	"}",
	".btn-default:active,",
	".btn-default:focus {",
	"    background: #15334F !important;",
	"    border-color: #15334F !important;",
	"}",
	".btn-primary {",
	"    background: #204d74;",
	"    border-color: #204d74",
	"}",
	".btn-primary:hover {",
	"    background: #1A3E5F;",
	"    border-color: #1A3E5F;",
	"}",
	".subscribed {",
	"    background: #204d74 !important;",
	"    border-color: #204d74 !important;",
	"    color: #FFF !important;",
	"}",
	".subscribed:hover {",
	"    background: #1A3E5F !important;",
	"    border-color: #1A3E5F !important;",
	"    color: #FFF !important;",
	"}",
	".btn-primary:active,",
	".btn-primary:focus,",
	".subscribed:active,",
	".subscribed:focus {",
	"    background: #15334F !important;",
	"    border-color: #15334F !important;",
	"}",
	".layout-header,",
	".sub-description,",
	".dropdown-toggle,",
	".form-control,",
	".report-summary,",
	"#invite-prompt {",
	"    background: #252525 !important;",
	"    border-color: #000 !important;",
	"}",
	".account-nav {",
	"    background: #252525 !important;",
	"    border-color: #171717 !important;",
	"}",
	".account-nav .divider {",
	"    border-color: #191919 !important",
	"}",
	"ul.account-nav a {",
	"    color: #888 !important;",
	"}",
	"ul.account-nav a:hover {",
	"    color: #555 !important;",
	"}",
	".dropdown-toggle {",
	"    color: #FFF !important;",
	"}",
	".dropdown-menu a:hover {",
	"    color: #888 !important;",
	"    background: none !important;",
	"}",
	".dropdown-menu a {",
	"    color: #FFF !important;",
	"}",
	"ul.dropdown-menu a:focus {",
	"    background: none;",
	"}",
	".dropdown-menu {",
	"    background: #292929 !important",
	"}",
	".dropdown-toggle:hover,",
	".dropdown-toggle:focus {",
	"    background: #212121 !important;",
	"    color: #FFF !important;",
	"    border-color: #000 !important;",
	"}",
	"body {",
	"    background: #212121;",
	"}",
	"hr,",
	".nav-tabs,",
	".panel-info,",
	".page-header.comments-header,",
	".footer,",
	".col-sm-4 .panel-default,",
	".col-sm-8 .page-header,",
	".col-sm-8 .panel-default,",
	".col-md-9 .page-header,",
	".col-md-9 td,",
	".table>thead>tr>th,",
	".moderator > .permissions,",
	".moderator > .added-on,",
	".moderator > .invited-on,",
	".moderator > .actions,",
	".moderator > .user,",
	".styles-edit h1.page-header {",
	"    border-color: #000 !important;",
	"}",
	".reports-unignored,",
	".disc.comment {",
	"    border-color: #191919 !important;",
	"}",
	".account-nav a:hover,",
	".md-control-fullscreen:hover,",
	".md-editor.md-fullscreen-mode .btn-primary:hover,",
	".md-editor.md-fullscreen-mode .btn-primary.active:hover,",
	".types > .btn-group-vertical label:hover,",
	".exit-fullscreen:hover {",
	"    color: #555 !important;",
	"}",
	"::-moz-selection {",
	"    background: rgba(255, 255, 255, 0.6);",
	"    color: #000 !important;",
	"}",
	".post .disc-body .thumb a {",
	"    background: #333;",
	"    border: #333;",
	"}",
	".types > .btn-group-vertical label:hover {",
	"    color: #777 !important;",
	"}",
	".btn-default {",
	"    background: #204d74;",
	"    border-color: #204d74;",
	"    color: #FFF !important;",
	"}",
	".btn-default:hover {",
	"    background: #1A3E5F;",
	"    border-color: #1A3E5F;",
	"}",
	".col-md-9 .btn-default.focus,",
	".col-md-9 .btn-default:focus {",
	"    background: #15334F !important;",
	"    border-color: #15334F !important;",
	"}",
	".domain:hover {",
	"    color: #777 !important;",
	"}",
	".domain {",
	"    color: #aaa !important;",
	"}",
	".panel {",
	"    background: transparent;",
	"}",
	".panel-search-info {",
	"    margin-top: 5px;",
	"    background: #292929;",
	"    color: #c3c3c3;",
	"    border-color: #000;",
	"}",
	".sub-info {",
	"    margin-bottom: 8px;",
	"}",
	".panel-heading {",
	"    background: #272727 !important;",
	"    border-color: #000 !important;",
	"    color: #FFF !important;",
	"}",
	".list-group-item {",
	"    background: #252525 !important;",
	"    border-color: #000;",
	"}",
	".btn-sm {",
	"    background: #292929 !important;",
	"    border: 1px solid #171717 !important;",
	"    color: #FFF;",
	"}",
	".btn-default.btn-sm.btn {",
	"    border-color: #171717!important;",
	"    background: #292929 !important;",
	"}",
	".panel .btn-default.btn-sm.btn {",
	"    border-color: #171717 !important;",
	"}",
	".btn-default.btn-sm.btn:hover,",
	".btn-sm:hover {",
	"    background: #202020 !important;",
	"    border-color: #171717 !important;",
	"}",
	".btn-default.btn-sm.btn:active,",
	".btn-sm:active {",
	"    background: #171717 !important;",
	"    border-color: #111 !important;",
	"}",
	"blockquote {",
	"    border-color: #272727;",
	"}",
	".disc .disc-body .disc-left .disc-voting.voted-up .down,",
	".disc .disc-body .disc-left .disc-voting.voted-down .up {",
	"    color: #292929;",
	"}",
	"span.up.login-required,",
	"span.down.login-required {",
	"    color: #474747;",
	"}",
	".disc .disc-body .disc-left .disc-voting.voted-up .up,",
	".disc .disc-body .disc-left .disc-voting.voted-up .votes {",
	"    color: #1B641B !important;",
	"}",
	".disc .disc-body .disc-left .disc-voting.voted-down .down,",
	".disc .disc-body .disc-left .disc-voting.voted-down .votes {",
	"    color: #5B2525 !important;",
	"}",
	"pre {",
	"    background: #171717;",
	"    color: #c7254e;",
	"    border-color: #232323;",
	"}",
	".md-header.btn-toolbar {",
	"    background: #242424;",
	"}",
	".md-header .btn-primary {",
	"    border: none;",
	"}",
	".md-input,",
	".md-input.form-control,",
	".md-preview {",
	"    background: #272727 !important;",
	"    border: none !important;",
	"}",
	".btn-toolbar .btn-primary.active {",
	"    background: #212121 !important;",
	"}",
	".md-editor {",
	"    border: none !important;",
	"    background: #222;",
	"}",
	".md-editor.active {",
	"    box-shadow: none;",
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
	"    color: #FFF !important;",
	"}",
	".form-control {",
	"    box-shadow: none !important;",
	"    color: #FFF;",
	"    background: #232323 !important;",
	"}",
	".input-group-addon {",
	"    background: #232323 !important;",
	"    border-color: #000 !important;",
	"}",
	".input-group-addon:hover {",
	"    color: #373737 !important;",
	"}",
	".input-group-addon:active {",
	"    background: #212121 !important;",
	"    border-color: #000 !important;",
	"    color: #373737 !important;",
	"}",
	"#invite-permissions-display {",
	"    background: #171717 !important;",
	"}",
	".message.message-unread {",
	"    background: #252525 !important;",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a {",
	"    color: #959595;",
	"}",
	".disc .disc-body .disc-main:hover .disc-options>li a:hover {",
	"    color: #555;",
	"}",
	"span.nsfw {",
	"    background: transparent;",
	"    border-color: transparent;",
	"}",
	"code {",
	"    background: #000;",
	"}",
	".permission-modal > .modal-dialog .btn-default,",
	".disc-main a.btn-default,",
	".showSweetAlert .cancel,",
	".hideSweetAlert .cancel,",
	".disc .btn-default,",
	".unsubscribed,",
	".btn-danger {",
	"    background: #611919 !important;",
	"    border-color: #611919 !important;",
	"    color: #FFF !important;",
	"}",
	".permission-modal > .modal-dialog .btn-default:hover,",
	".disc-main a.btn-default:hover,",
	".showSweetAlert .cancel:hover,",
	".disc .btn-default:hover,",
	".unsubscribed:hover,",
	".btn-danger:hover {",
	"    background: #501515 !important;",
	"    border-color: #501515 !important;",
	"}",
	".permission-modal > .modal-dialog .btn-default:active,",
	".disc-main a.btn-default:active,",
	".showSweetAlert .cancel:active,",
	".disc .btn-default:active,",
	".unsubscribed:active,",
	".btn-danger:active {",
	"    background: #411111 !important;",
	"    border-color: #411111 !important;",
	"    box-shadow: none !important;",
	"}",
	".dropdown-menu-right a,",
	".dropdown-menu-right a:hover {",
	"    background: #292929 !important;",
	"}",
	".modal-body,",
	".modal-footer {",
	"    background: #212121;",
	"    color: #FFF;",
	"}",
	".nav-pills > li.active > a {",
	"    background: none !important;",
	"}",
	"td.actions .btn-sm {",
	"    border: none;",
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
	"    color: #FFF;",
	"}",
	".modal-body div.row {",
	"    background: #212121 !important;",
	"    color: #ccc;",
	"}",
	".close.pull-right,",
	".col-xs-11.col-sm-4 .close {",
	"    color: #FFF;",
	"}",
	".showSweetAlert,",
	".hideSweetAlert {",
	"    background: #202020 !important;",
	"    color: #FFF !important;",
	"}",
	".types > .btn-group-vertical label {",
	"    background: #252525 !important;",
	"    border-color: #212121 !important;",
	"}",
	".types > .btn-group-vertical label:hover,",
	".types > .btn-group-vertical label:active,",
	".types > .btn-group-vertical label:focus {",
	"    background: #252525 !important;",
	"    border-color: transparent !important;",
	"    color: #999 !important;",
	"}",
	".col-xs-11.col-sm-4 {",
	"    background: #222 !important;",
	"    border-color: #000 !important;",
	"}",
	".permission-modal .permissions hr,",
	".permission-modal .modal-footer {",
	"    border-color: #000 !important;",
	"}",
	".styles-edit h1.page-header {",
	"    border-color: #000",
	"}",
	".styles-edit .alert-warning,",
	".validation-summary-infos,",
	".preview-alert {",
	"    background: #292929;",
	"    border-color: #171717;",
	"}",
	"#embedded-editor {",
	"    background-color: #292929;",
	"    color: #c7254e;",
	"}",
	".ace_gutter {",
	"    background: #333 !important;",
	"    color: #FFF;",
	"}",
	".ace-github.ace_focus .ace_marker-layer .ace_active-line {",
	"    background: #333 !important;",
	"}",
	".ace-github .ace_marker-layer .ace_active-line {",
	"    background: #393939 !important;",
	"}",
	".ace-github .ace_cursor {",
	"    color: #999 !important;",
	"}",
	"span.sticky {",
	"    background-color: #a11919;",
	"    border-color: #a11919;",
	"    padding: 1px 6px;",
	"    border-radius: 2px !important;",
	"    color: #fff;",
	"    display: inline-block;",
	"    margin-bottom: -3px;",
	"    font-size: 11px;",
	"    overflow: hidden;",
	"}",
	".sticky .link {",
	"    color: #279c27 !important;",
	"}",
	".sticky .link:visited {",
	"    color: #282 !important;",
	"}",
	".sticky .link:hover {",
	"    color: #1d731d !important;",
	"}",
	".sticky .link:visited:hover {",
	"    color: #185f18 !important;",
	"}",
	".account-forgotpassword  {",
	"    color: #aaa;",
	"}",
	".dropdown-menu-left a {",
	"    background: transparent !important;",
	"}",
	".alert:nth-child(1) {",
	"    background: #333;",
	"    border-color: #000;",
	"    color: white;",
	"}",
	".previewed {",
	"    background: #292929 !important;",
	"    border-color: #333 !important;",
	"}",
	".disc .disc-body .disc-main .disc-expando {",
	"	color:#888;",
	"}",
	"pre.well {",
	"    background: #292929;",
	"    border-color: #171717;",
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
