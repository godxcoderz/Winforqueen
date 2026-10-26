(() => {
  let ctx = null, muted = false;
  function tone(freq, duration, type = "sine", volume = 0.035) {
    if (muted) return;
    try {
      ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = type; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration);
    } catch (_) {}
  }
  window.QueenAudio = {
    play(kind) {
      const sounds = { hit: [180,.12,"triangle"], jump: [420,.18,"sine"], moon: [620,.25,"sawtooth"], star: [820,.35,"triangle"], step: [300,.12,"sine"], win: [660,.35,"sine"], hurt: [110,.2,"square"] };
      const s = sounds[kind] || sounds.hit; tone(...s);
      if (kind === "win") setTimeout(() => tone(880,.4,"sine"), 180);
    },
    toggle() { muted = !muted; return !muted; }
  };
})();