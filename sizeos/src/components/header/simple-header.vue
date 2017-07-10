<template>
  <page-header>
    <header-link  :isback="backLink" v-if="backLink" :left="true" :edge="true" >
      <icon icon="arrowleft"></icon>{{backText}}
    </header-link>
    <page-title :titleclass="titleclass">{{title}}</page-title>
    <slot></slot>
  </page-header>
</template>

<script>
const Header = resolve => require(['./header'], resolve)
const Title = resolve => require(['./title'], resolve)
const HeaderLink = resolve => require(['./link'], resolve)
import {Icon} from '../icons'
export default {
  components: {
    'page-header': Header,
    'page-title': Title,
    'header-link': HeaderLink,
    Icon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    titleclass: {
      type: String,
      required: true
    },
    backLink: {
      type: Boolean,
      default: false
    },
    backText: {
      type: String,
      default: 'Back'
    }
  }
}
</script>
