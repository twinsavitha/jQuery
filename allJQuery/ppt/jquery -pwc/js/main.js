Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	theme: Reveal.getQueryHash().theme,
	transition: Reveal.getQueryHash.transition || "default",

	dependencies: [
	    { src: 'js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
	    { src: 'js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	    { src: 'js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	    { src: 'js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	    { src: 'js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	    { src: 'js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});
