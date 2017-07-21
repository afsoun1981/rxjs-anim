{
    let actor = document.getElementById('actor1');

    let observable = Rx.Observable.degPerSecond(360);

    let subscription;

    let fn = () => {
        if (subscription && !subscription.closed) {
            subscription.unsubscribe();
        }

        subscription = observable.subscribe((deg) => {
            var rad = deg * (Math.PI / 180),
                radius = 50,
                x = Math.round(Math.cos(rad) * radius),
                y = Math.round(Math.sin(rad) * radius)
                t = (`translate3d(${x}px, ${y}px, 0)`);

            actor.style.transform = t;
            actor.style.webkitTransform = t;
            actor.style.mozTransform = t;

            if (deg > 360) {
                subscription.unsubscribe();
            }
        });
    }

    fn();
    setInterval(fn, 4000);
}