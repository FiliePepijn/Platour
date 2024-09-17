
    (function (m, a, z, e) {
    var s, t;
    try {
        t = m.sessionStorage.getItem('maze-us');
    } catch (err) {}

    if (!t) {
        t = new Date().getTime();
        try {
        m.sessionStorage.setItem('maze-us', t);
        } catch (err) {}
    }

    s = a.createElement('script');
    s.src = z + '?apiKey=' + e;
    s.async = true;
    a.getElementsByTagName('head')[0].appendChild(s);
    m.mazeUniversalSnippetApiKey = e;
    })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'c483e583-c0e9-426c-a298-7a62b891a896');

//    Hotjar Tracking Code for Site 4940445 (name missing) 
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:4940445,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


  window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/4381514c-c0f7-4611-af7f-e866b713911b.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
