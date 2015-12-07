(function(){
  'use strict';

  	var toc = document.getElementById('article-toc');
  	var tocTop = document.getElementById('article-toc-top');

  	if (!toc) return;

  	tocTop.addEventListener('click', function(e){
    	e.preventDefault();
    	document.body.scrollTop = 0;
  	});

	$(function(){

		// Scrollspy
        var $window = $(window);
        var $body   = $(document.body);

        $body.scrollspy({
          target: '#article-toc-inner'
        });
        $window.on('load', function () {
          $body.scrollspy('refresh');
        });

        // Sidenav affixing
        setTimeout(function () {

          var $sidebar = $('#article-toc-inner'),
              sideBarOffsetTop = $sidebar.offset().top;

          $sidebar.affix({
            offset: {
              top:sideBarOffsetTop, 
              bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true));
              }
            }
          })
        }, 100);

	});

})();
