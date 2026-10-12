const e=`<!-- Interactive: why covering the stronger eye matters. Sandboxed frame (ADR-033/035). -->
<style>
  .wrap{padding:22px 20px 20px;display:grid;gap:20px}
  .views{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .view{padding:14px 6px 12px;text-align:center}
  .view + .view{border-left:1px solid var(--line)}
  .view h3{margin:0 0 6px;font-size:14px;font-weight:600;color:var(--dim)}
  .view.out h3{color:var(--heading)}
  svg{display:block;margin:0 auto;width:min(84px,22vw);height:auto;transition:filter .5s ease,opacity .5s ease}
  .row{display:grid;gap:8px}
  label{font-size:16px;color:var(--ink)}
  .scale{display:flex;justify-content:space-between;font-size:14px;color:var(--dim)}
  input[type=range]{width:100%;height:44px;margin:0;accent-color:var(--cyan);background:transparent}
  button{justify-self:start;border-radius:999px;border:1px solid var(--line-strong);background:transparent;color:var(--heading);padding:0 20px;font-weight:600;font-size:16px;cursor:pointer}
  button[aria-pressed=true]{background:var(--cyan);border-color:var(--cyan);color:#101419}
  button:focus-visible,input:focus-visible{outline:2px solid var(--cyan);outline-offset:3px}
  .msg{margin:0;font-size:16px;line-height:1.55;color:var(--ink);min-height:50px}
  @media (max-width:380px){.view h3{font-size:13px}}
</style>
<div class="wrap">
  <div class="views">
    <div class="view"><h3>Stronger eye</h3><svg id="strong" viewBox="0 0 100 100" aria-hidden="true"><path d="M78 38 A32 32 0 1 0 78 62" fill="none" stroke="var(--heading)" stroke-width="12"/></svg></div>
    <div class="view"><h3>Weaker eye</h3><svg id="weak" viewBox="0 0 100 100" aria-hidden="true"><path d="M78 38 A32 32 0 1 0 78 62" fill="none" stroke="var(--heading)" stroke-width="12"/></svg></div>
    <div class="view out"><h3>What you see</h3><svg id="seen" viewBox="0 0 100 100" aria-hidden="true"><path d="M78 38 A32 32 0 1 0 78 62" fill="none" stroke="var(--heading)" stroke-width="12"/></svg></div>
  </div>
  <div class="row">
    <label for="blur">How blurred the weaker eye's image is</label>
    <input id="blur" type="range" min="0" max="10" value="6" aria-describedby="msg">
    <div class="scale" aria-hidden="true"><span>Clear</span><span>Very blurred</span></div>
  </div>
  <button id="patch" type="button" aria-pressed="false">Cover the stronger eye</button>
  <p class="msg" id="msg" aria-live="polite"></p>
</div>
<script>
  var blur = document.getElementById('blur'), patch = document.getElementById('patch')
  var strong = document.getElementById('strong'), weak = document.getElementById('weak'), seen = document.getElementById('seen'), msg = document.getElementById('msg')
  function draw(){
    var b = +blur.value, p = patch.getAttribute('aria-pressed') === 'true', px = (b * 0.75).toFixed(1)
    strong.style.opacity = p ? 0.12 : 1
    weak.style.filter = 'blur(' + px + 'px)'
    var useWeak = p || b < 2
    seen.style.filter = useWeak ? 'blur(' + px + 'px)' : 'none'
    patch.textContent = p ? 'Uncover the stronger eye' : 'Cover the stronger eye'
    msg.textContent = p
      ? 'With the stronger eye covered, the brain has only the weaker eye to work with. That forced practice is the idea behind patching.'
      : b < 2
        ? 'Both images are sharp, so the brain combines them into one.'
        : 'The two images don’t match, so the brain quietly relies on the sharper one and tunes the other out.'
  }
  blur.addEventListener('input', draw)
  patch.addEventListener('click', function(){ patch.setAttribute('aria-pressed', patch.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); draw() })
  draw()
<\/script>
`;export{e as default};
