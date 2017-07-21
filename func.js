Rx.Observable.msElapsed = (scheduler = Rx.Scheduler.animationFrame) => {
    return Rx.Observable.defer(() => {
        let start = scheduler.now();

        return new Rx.Observable.interval(0, scheduler)
            .map(x => scheduler.now() - start);
    });
};

Rx.Observable.degPerSecond = (deg, scheduler = Rx.Scheduler.animationFrame) => {
    return Rx.Observable.msElapsed(scheduler)
        .map((ms) => deg * ms / 1000);
};


Rx.Observable.duration = (ms, scheduler = Rx.Scheduler.animationFrame) => {
    return Rx.Observable.msElapsed(scheduler)
        .map((ems) => ems / ms)
        .takeWhile(t => t <= 1);
};

Rx.Observable.distanceOverTime = (dist, ms, scheduler = Rx.Scheduler.animationFrame) => {
    return Rx.Observable.duration(ms, scheduler)
        .map((t) => t * dist);
};