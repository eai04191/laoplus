// ==UserScript==
// @name        process.env.NAME
// @namespace   net.mizle
// @version     process.env.VERSION
// @author      process.env.AUTHOR
// @description ブラウザ版ラストオリジンのプレイを支援する Userscript
// @homepageURL https://github.com/eai04191/laoplus
// @supportURL  https://github.com/eai04191/laoplus/issues
// @run-at      document-end
// @match       https://pc-play.games.dmm.co.jp/play/lastorigin_r/*
// @match       https://pc-play.games.dmm.com/play/lastorigin/*
// @match       https://osapi.dmm.com/gadgets/ifr?synd=dmm&container=dmm&owner=*&viewer=*&aid=616121&*
// @match       https://osapi.dmm.com/gadgets/ifr?synd=dmm&container=dmm&owner=*&viewer=*&aid=699297&*
// @match       https://adult-client.last-origin.com/
// @match       https://normal-client.last-origin.com/
// @require     https://cdn-tailwindcss.vercel.app?plugins=forms
// @require     https://unpkg.com/lodash@4.17.21/lodash.js
// @require     https://unpkg.com/classnames@2.3.1/index.js
// @require     https://unpkg.com/react@17.0.2/umd/react.production.min.js
// @require     https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js
// @require     https://unpkg.com/react-modal@3.14.4/dist/react-modal.js
// @require     https://unpkg.com/@headlessui/react@1.4.3/dist/headlessui.umd.development.js
// @require     https://unpkg.com/react-hook-form@7.27.0/dist/index.umd.js
// @require     https://unpkg.com/chroma-js@2.1.2/chroma.js
// @require     https://unpkg.com/dayjs@1.10.7/dayjs.min.js
// @require     https://unpkg.com/dayjs@1.10.7/plugin/relativeTime.js
// @require     https://unpkg.com/dayjs@1.10.7/plugin/isSameOrBefore.js
// @require     https://unpkg.com/dayjs@1.10.7/plugin/duration.js
// @require     https://unpkg.com/mitt@3.0.0/dist/mitt.umd.js
// ==/UserScript==

/**
 * The @grant's used in your source code will be added automatically by rollup-plugin-userscript.
 * However you have to add explicitly those used in required resources.
 */
