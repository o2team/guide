<!DOCTYPE html>
<html lang="{{ page.lang }}">
{{ partial('partial/head') }}
<body>
<div class="root">
  <div id="container" class="container">
    {{ partial('partial/header') }}
    {{ body }}
    {{ partial('partial/footer') }}
  </div>
  <div id="mobile-nav-dimmer" class="mobile-nav-dimmer"></div>
  {{ partial('partial/mobile_nav') }}
  {{ partial('partial/after_footer') }}
</div>
</body>
</html>
