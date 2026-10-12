const e=`<!-- Interactive: what each eye sees through red-blue glasses on a dark screen. Sandboxed
     frame (ADR-033/035). Physics: a filter passes its own colour and darkens the other,
     so through the red filter the red marks show and the blue ones vanish into the dark
     background (the Worth four-dot principle). -->
<style>
  .wrap{padding:22px 20px 20px;display:grid;gap:18px}
  .screen{position:relative;border-radius:6px;background:#0c0f13;border:1px solid var(--line);aspect-ratio:16/8;overflow:hidden}
  .screen svg{position:absolute;inset:0;width:100%;height:100%}
  .tint{position:absolute;inset:0;pointer-events:none;mix-blend-mode:multiply;opacity:0;transition:opacity .45s ease,background-color .45s ease}
  .seg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid var(--line-strong);border-radius:999px;overflow:hidden}
  .seg button{min-height:46px;border:0;background:transparent;color:var(--ink);font-size:15px;font-weight:600;cursor:pointer;padding:0 6px;white-space:nowrap}
  .seg button + button{border-left:1px solid var(--line-strong)}
  .seg button[aria-pressed=true]{background:var(--raised);color:var(--heading);box-shadow:inset 0 -2px 0 var(--cyan)}
  button:focus-visible{outline:2px solid var(--cyan);outline-offset:-3px}
  .msg{margin:0;font-size:16px;line-height:1.55;color:var(--ink);min-height:50px}
  g{transition:opacity .45s ease}
</style>
<div class="wrap">
  <div class="screen" role="img" aria-label="A screen with red rings and blue dots, as seen through the selected view">
    <svg viewBox="0 0 320 160" aria-hidden="true">
      <g id="red" fill="none" stroke="var(--red)" stroke-width="3">
        <circle cx="70" cy="56" r="16"/><circle cx="160" cy="96" r="16"/><circle cx="250" cy="52" r="16"/>
      </g>
      <g id="blue" fill="var(--cyan)">
        <circle cx="70" cy="56" r="5"/><circle cx="160" cy="96" r="5"/><circle cx="250" cy="52" r="5"/>
        <circle cx="115" cy="122" r="5"/><circle cx="210" cy="118" r="5"/>
      </g>
    </svg>
    <div class="tint" id="tint"></div>
  </div>
  <div class="seg" role="group" aria-label="Choose a view">
    <button type="button" data-v="both" aria-pressed="true">No filter</button>
    <button type="button" data-v="left" aria-pressed="false">Red filter</button>
    <button type="button" data-v="right" aria-pressed="false">Blue filter</button>
  </div>
  <p class="msg" id="msg" aria-live="polite"></p>
</div>
<script>
  var red = document.getElementById('red'), blue = document.getElementById('blue'), tint = document.getElementById('tint'), msg = document.getElementById('msg')
  var buttons = document.querySelectorAll('.seg button')
  var copy = {
    both: 'Without glasses you see everything: red rings and blue dots, three of them sitting inside the rings.',
    left: 'The red filter passes red and darkens blue, so this eye sees only the rings. The dots have vanished into the dark background.',
    right: 'The blue filter passes blue and darkens red, so this eye sees only the dots. It has no idea where the rings are.'
  }
  function show(v){
    buttons.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.v === v ? 'true' : 'false') })
    red.style.opacity = v === 'right' ? 0.06 : 1
    blue.style.opacity = v === 'left' ? 0.06 : 1
    tint.style.opacity = v === 'both' ? 0 : 0.35
    tint.style.backgroundColor = v === 'left' ? '#c47f74' : '#7aaebb'
    msg.textContent = copy[v] + (v === 'both' ? '' : ' Only with both eyes open does the brain have to put the two halves together.')
  }
  buttons.forEach(function(b){ b.addEventListener('click', function(){ show(b.dataset.v) }) })
  show('both')
<\/script>
`;export{e as default};
