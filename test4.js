{
  let actor = document.getElementById('actor4');

  let duration = 3000; // ms
  let distance = 300; // pixels

  let forwardBackward = (t) => Math.abs((t * 2) - 1);


  let observable = Rx.Observable.msElapsed()
    .map(ms => ms / duration)
    .takeWhile(t => t <= 1);

  let reverse = false;

  let anim = () => {
    observable.subscribe((t) => {
      // apply easing mapping to t    
      let t1 = forwardBackward(t);
      let t2 = reverse ? 1 - t1 : t1;
      let t3 = module.exports.bounceOut(t2);

      // calculate position
      let x = 50 + t3 * distance;
      let y = 200 - Math.sqrt(x) * 10;

      let transform = `translate3d(${x}px, ${y}px, 0)`;

      actor.style.transform = transform;
      actor.style.webkitTransform = transform;
      actor.style.mozTransform = transform;
    }, () => {},
    () => {
      // completed

      reverse = !reverse;
      setTimeout(anim, 500);
    });
  };

  anim();
}