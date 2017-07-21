{
    let actor = document.getElementById('actor3');

    let distance = (dist) => {
      return (t) => t * dist;
    }

    let observable = Rx.Observable.duration(2000)
      .map(module.exports.bounceOut)
      .map(distance(200));

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