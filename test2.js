{
    let actor = document.getElementById('actor2');

    let observable = Rx.Observable.distanceOverTime(200, 2000);

    let subscription;

    let fn = () => {
        if (subscription && !subscription.closed) {
            subscription.unsubscribe();
        }

        subscription = observable.subscribe((dist) => {
            var x = dist,
                y = dist,
                t = (`translate3d(${x}px, ${y}px, 0)`);

            actor.style.transform = t;
            actor.style.webkitTransform = t;
            actor.style.mozTransform = t;
        });
    }

    fn();
    setInterval(fn, 3000);
}