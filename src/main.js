'use strict';

// vendor
import Vue from 'vue/dist/vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery-input-mask-phone-number/dist/jquery-input-mask-phone-number.min'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.min'
import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'

AOS.init({
  disable: function () {
    return window.innerWidth < 576;
  }
});

// common
import './common/styles/global-variables.scss'
import './common/styles/style.scss'
import './common/styles/mixins.scss'
import './common/styles/fonts.scss'

// bem components

import './bem-components/section/section.scss'
import './bem-components/section/section'
import './bem-components/first-screen/first-screen.scss'
import './bem-components/first-screen/first-screen'
import './bem-components/section-reasons/section-reasons.scss'
import './bem-components/section-rosaburgh/section-rosaburgh.scss'
import './bem-components/section-rosaburgh/section-rosaburgh'
import './bem-components/section-gerryville/section-gerryville.scss'
import './bem-components/section-gerryville/section-gerryville'
import './bem-components/section-indicators/section-indicators.scss'
import './bem-components/section-questions/section-questions.scss'
import './bem-components/section-questions/section-questions'
import './bem-components/section-two-parts/section-two-parts.scss'
import './bem-components/section-two-parts/section-two-parts'


import './bem-components/site-header/site-header.scss'

import './bem-components/languages-switch/languages-switch.scss'
import './bem-components/main-menu/main-menu.scss'
import './bem-components/logo/logo.scss'
import './bem-components/search-btn/search-btn.scss'
import './bem-components/button/button.scss'
import './bem-components/site-select/site-select.scss'
import './bem-components/site-select/site-select'

// vue components

new Vue({
  el: '#app',

  components: {

  }
});