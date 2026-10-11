const e=`<!-- Interactive: what patching does. Runs in a sandboxed frame (ADR-033). -->
<style>
  .wrap{display:grid;gap:14px;padding:16px}
  .views{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 6px}
  .card b{display:block;font-size:14px;color:var(--dim);letter-spacing:.5px}
  .letter{font-weight:900;font-size:64px;line-height:1.2;transition:filter .4s,opacity .4s}
  .row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
  label{font-size:16px;color:var(--ink)}
  input[type=range]{flex:1;min-width:160px;height:44px;accent-color:var(--red)}
  button{border-radius:999px;border:2px solid var(--yellow);background:transparent;color:var(--yellow);padding:0 18px;font-weight:800;cursor:pointer}
  button[aria-pressed=true]{background:var(--yellow);color:#05050a}
  .msg{font-size:16px;color:var(--dim);min-height:52px}
</style>
<div class="wrap">
  <div class="views">
    <div class="card"><b>STRONG EYE</b><div class="letter" id="strong">E</div></div>
    <div class="card"><b>WEAKER EYE</b><div class="letter" id="weak">E</div></div>
    <div class="card" style="border-color:var(--green)"><b style="color:var(--green)">BRAIN USES</b><div class="letter" id="seen">E</div></div>
  </div>
  <div class="row">
    <label for="blur">How blurry the weaker eye is</label>
    <input id="blur" type="range" min="0" max="10" value="6" aria-describedby="msg">
  </div>
  <div class="row"><button id="patch" aria-pressed="false">Cover the strong eye (patch)</button></div>
  <p class="msg" id="msg" aria-live="polite"></p>
</div>
<script>
  var blur = document.getElementById('blur'), patch = document.getElementById('patch')
  var strong = document.getElementById('strong'), weak = document.getElementById('weak'), seen = document.getElementById('seen'), msg = document.getElementById('msg')
  function draw(){
    var b = +blur.value, p = patch.getAttribute('aria-pressed') === 'true'
    strong.style.opacity = p ? .12 : 1
    weak.style.filter = 'blur(' + (b * .7) + 'px)'
    var useWeak = p || b < 2
    seen.style.filter = useWeak ? 'blur(' + (b * .7) + 'px)' : 'none'
    msg.textContent = p
      ? 'With the strong eye covered, the brain has to work with the weaker eye’s image. That practice is what patching is for.'
      : b < 2
        ? 'Both images are clear, so the brain happily combines them.'
        : 'The images don’t match, so the brain quietly tunes out the blurry one.'
  }
  blur.addEventListener('input', draw)
  patch.addEventListener('click', function(){ patch.setAttribute('aria-pressed', patch.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); draw() })
  draw()
<\/script>
`;export{e as default};
