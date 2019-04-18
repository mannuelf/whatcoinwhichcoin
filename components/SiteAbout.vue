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
        <a href="https://mannuelferreira.com">
          <strong>
            {{ $t('home.say-hello') }}
          </strong>
        </a>
        <a href="https://github.com/mannuelf/whatcoinwhichcoin">
          <strong>
            {{ $t('home.fork-it') }}
          </strong>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteAbout'
}
</script>
