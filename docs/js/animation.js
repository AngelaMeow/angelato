    var params = {
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "data.json",
    };

    var anim;

    anim = lottie.loadAnimation(params);