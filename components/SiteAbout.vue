<template>
  <div>
    <div class="about-site">
      <p>
        {{ $t('home.description') }}
      </p>
    </div>
    <div class="footer-note">
      <p>
        {{ $t('home.built-with') }}
        <a href="https://mannuelferreira.com" target="_blank">
          <strong>
            {{ $t('home.say-hello') }}
          </strong>
        </a>
        <a href="https://github.com/mannuelf/whatcoinwhichcoin" target="_blank">
          <strong>
            {{ $t('home.fork-it') }}
          </strong>
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SiteAbout'
}
</script>
