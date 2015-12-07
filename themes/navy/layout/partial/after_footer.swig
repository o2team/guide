<!-- Scripts -->
<!-- build:js js/dist.main.js -->
{{ js('js/jquery') }}
{{ js('js/hammer') }}
{{ js('assets/bootstrap/js/bootstrap') }}
{{ js('js/lang_select') }}
{{ js('js/toc') }}
{{ js('js/mobile_nav') }}
<!-- endbuild -->
{% if page.layout === 'plugins' %}
<!-- build:js js/dist.plugins.js -->
{{ js('js/lunr') }}
{{ js('js/plugins') }}
<!-- endbuild -->
{% endif %}
<!-- Swiftype -->
<script type="text/javascript">
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  })(window,document,'script','//s.swiftypecdn.com/install/v1/st.js','_st');

  _st('install','{{ config.swiftype_key }}');
</script>
