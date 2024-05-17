export function animation(obj) {
  const { clear, update, render } = obj;
  let prevTimestamp = 0;
  requestAnimationFrame(everyTick);

  function everyTick(timestamp) {
    requestAnimationFrame(everyTick);

    const difference = timestamp - prevTimestamp;
    prevTimestamp = timestamp;
    const fps = 1000 / difference;
    const secondPart = difference / 1000;

    const params = {
      timestamp,
      prevTimestamp,
      fps,
      secondPart,
      difference,
    };

    update(params);
    clear();
    render(params);
  }
}
