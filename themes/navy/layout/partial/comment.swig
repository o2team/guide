{% if page.comments && config.disqus_shortname %}
<section id="comments">
  <div id="disqus_thread"></div>
</section>
<script>
  var disqus_shortname = '{{ config.disqus_shortname }}';
  var disqus_url = '{{ url }}';
  var disqus_title = {{ JSON.stringify(page.title) }};
  var disqus_config = function(){
    this.language = '{{ disqus_lang() }}';
  };
  (function(){
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//go.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
</script>
{% endif %}

{% if page.comments && config.duoshuo_shortname %}
<!-- 多说评论框 start -->
<div class="ds-thread" data-thread-key="{{ url }}" data-title="{{ title }}" data-url="{{ url }}"></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
    var duoshuoQuery = {short_name:"{{ config.duoshuo_shortname }}"};
    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.unstable.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
         || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
</script>
<!-- 多说公共JS代码 end -->
{% endif %}
