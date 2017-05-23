var pinchZoom = new PinchZoomCanvas({
    canvas: document.getElementById('mycanvas'),
    path: "images/menu.jpg",
    momentum: true,
    zoomMax: 2,
    doubletap: true,
    onZoomEnd: function (zoom, zoomed) {
        console.log("---> is zoomed: %s", zoomed);
        console.log("---> zoom end at %s", zoom);
    },
    onZoom: function (zoom) {
        console.log("---> zoom is %s", zoom);
    }
    });