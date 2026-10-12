const e=`<!-- Interactive: how nystagmus changes with gaze direction, and the null zone. Sandboxed frame (ADR-033/035).
     Illustrative model only: amplitude is smallest a little right of centre. -->
<style>
  .wrap{padding:22px 20px 20px;display:grid;gap:16px}
  canvas{display:block;width:100%;height:150px;border-radius:6px;background:#0c0f13;border:1px solid var(--line)}
  .row{display:grid;gap:8px}
  label{font-size:16px;color:var(--ink)}
  .scale{display:flex;justify-content:space-between;font-size:14px;color:var(--dim)}
  input[type=range]{width:100%;height:44px;margin:0;accent-color:var(--cyan);background:transparent}
  input:focus-visible{outline:2px solid var(--cyan);outline-offset:3px}
  .readout{display:flex;justify-content:space-between;gap:12px;align-items:baseline;border-top:1px solid var(--line);padding-top:12px}
  .readout b{font-size:15px;font-weight:600;color:var(--heading)}
  .meter{flex:1;height:6px;border-radius:3px;background:var(--line);overflow:hidden;align-self:center}
  .meter i{display:block;height:100%;background:var(--amber);transition:width .25s ease}
  .msg{margin:0;font-size:16px;line-height:1.55;color:var(--ink);min-height:50px}
</style>
<div class="wrap">
  <canvas id="c" width="640" height="300" role="img" aria-label="A trace of eye position over time for the chosen gaze direction"></canvas>
  <div class="row">
    <label for="gaze">Where you look</label>
    <input id="gaze" type="range" min="-30" max="30" value="-22" aria-describedby="msg">
    <div class="scale" aria-hidden="true"><span>Far left</span><span>Straight ahead</span><span>Far right</span></div>
  </div>
  <div class="readout"><b>Movement</b><span class="meter"><i id="m"></i></span></div>
  <p class="msg" id="msg" aria-live="polite"></p>
</div>
<script>
  var c = document.getElementById('c'), ctx = c.getContext('2d'), gaze = document.getElementById('gaze'), m = document.getElementById('m'), msg = document.getElementById('msg')
  var NULL = 8, calm = window.SAMASIGHT_CALM === true, t0 = performance.now()
  function amp(g){ return 4 + 40 * Math.min(1, Math.abs(g - NULL) / 34) }
  function draw(now){
    var g = +gaze.value, a = amp(g), w = c.width, h = c.height, mid = h / 2
    ctx.clearRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid); ctx.stroke()
    var shift = calm ? 0 : ((now - t0) / 1000) * 22
    ctx.strokeStyle = '#e2ded5'; ctx.lineWidth = 2.4; ctx.lineJoin = 'round'
    ctx.beginPath()
    var period = 46
    for (var x = 0; x <= w; x += 2) {
      var p = ((x + shift) % period) / period
      var y = p < 0.82 ? mid + a * (p / 0.82) - a / 2 : mid + a / 2 - a * ((p - 0.82) / 0.18)
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
    if (!calm) requestAnimationFrame(draw)
  }
  function update(){
    var g = +gaze.value, a = amp(g)
    m.style.width = Math.round((a / 44) * 100) + '%'
    msg.textContent = Math.abs(g - NULL) < 7
      ? 'This is the null zone: the eyes are at their steadiest, and fine detail is easier to see.'
      : Math.abs(g - NULL) < 18
        ? 'Getting closer. The beats are smaller here than at the edges.'
        : 'Looking this way, the eyes move the most. Try moving the slider slowly to the right.'
    if (calm) draw(0)
  }
  gaze.addEventListener('input', update)
  update()
  if (calm) draw(0); else requestAnimationFrame(draw)
<\/script>
`;export{e as default};
