$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var C=$(".site-nav");var D="site-nav-on";var A=C.hasClass(D);var E=A?"slideUp":"slideDown";var B=A?"removeClass":"addClass";C.stop()[E]("fast",function(){C[B](D)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});