<header id="banner" class="wrapper banner">
  <div class="inner">
    <h2 id="banner-title" class="banner-title">{{ page.subtitle }}</h2>
    <div id="banner-start" class="banner-start">
      <span id="banner-start-command" class="banner-start-command">{{ page.slogan }}</span><a id="banner-start-link" class="banner-start-link"  href="docs/"><i class="fa fa-arrow-right"></i></a>
    </div>
    <div id="banner-share" class="banner-share">{{ partial('partial/share') }}</div>
  </div>
</header>
<div id="content-wrap" class="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}
      <div id="intro-get-started-wrap" class="intro-get-started-wrap">
        <a href="docs/" id="intro-get-started-link" class="intro-get-started-link">{{ __('index.get_started') }}</a>
      </div>
    </div>
  </div>
</div>
