<template>
  <main>
    <router-view />
    {{ $t('top.search') }}
    <div @click="switchLanguage()">Change</div>
  </main>
</template>

<script>
import {useLanguage} from '@/utils/language';

export default {
  components: {
  },
  setup() {
    return {
      ...useLanguage()
    }
  }
};
</script>

<style lang="scss">
:root {
  // light
  --primary-font-color: #121212;
  --secondary-font-color: #fff;
  --highlight-font-color: #007bff;
  --primary-bg: 255, 255, 255;
  --secondary-bg: 18, 18, 18;
  --background-color: #cecece;
  --foreground-color: #121212;

  // dark
  --primary-font-color: #fff;
  --secondary-font-color: #121212;
  --highlight-font-color: #0063ce;
  --primary-bg: 18, 18, 18;
  --secondary-bg: 255, 255, 255;
  --highlight-bg-color: #0056ba;
  --background-color: #121212;
  --foreground-color: #fff;

  color: var(--primary-font-color);
  font-size: max(16px, 0.73vw);
}

@media screen and (max-width: 992px) {
  :root {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  :root {
  }
}

@media screen and (max-width: 375px) {
  :root {
  }
}

img[alt] {
  color: transparent;
}

img:after {
  font-weight: 900;
  font-family: "Font Awesome 5 Pro";
  content: "\f071"" Broken Image of " attr(alt);
  display: block;
  font-size: 16px;
  font-style: normal;
  color: rgb(100, 100, 100);

  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  border-left: 0.3em solid grey;
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  p {
    padding: 0.6em 2em;
  }
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

i,
em {
  font-style: italic;
}

input,
textarea,
button,
select,
div,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.spinner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lds-spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  background-color: yellow;
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background-color: var(--foreground-color);
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}

@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

html {
  background-color: var(--background-color);
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  // transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
  // transition: all 0.4s ease-in-out;
}

img {
  background-color: lightgray;
  object-fit: cover;
}

.limited-text {
  --snup: 3;
  display: -webkit-box;
  -webkit-line-clamp: var(--snup);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
