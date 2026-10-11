import{f as y,j as e,R as F,i as ne,L as C}from"./vendor-react-utLNktYj.js";import{a9 as ie,B as se,_ as oe,af as re,d as le}from"./index-CApmkCng.js";import"./vendor-supabase-Be25SE7n.js";const ae=`---
title: Your post title
date: 2026-10-11
summary: One or two sentences that appear in the post list.
tags: [amblyopia, routine]
cover: images/example-cover.jpg
draft: true
---

Files starting with \`_\` are never published. Copy this file to
\`content/blog/<your-slug>.md\` (the file name becomes the link:
\`#/blog/<your-slug>\`), fill in the front matter and write below.

## A section heading

Plain paragraphs, **bold**, *italic*, \`code\` and [links](https://example.com).
Link to a game in the app with an in-app link: [Letter Click](#/letter-click).

- bullet lists
- like this

1. numbered lists
2. like this

> A quote.

![What the picture shows (for screen readers)](images/example.jpg "Optional caption")

Put images in \`content/blog/images/\` and refer to them as \`images/<file>\`.
`,ce=`---
title: Amblyopia is a brain thing, not a lazy eye
date: 2026-10-11
summary: Why the "lazy eye" usually works fine, what the brain is really doing, and what practice can and can't do.
tags: [amblyopia, basics]
unlisted: true
---

People call it a "lazy eye", but that name points at the wrong place. In amblyopia the eye itself is usually healthy. The difference is in how the brain treats the picture coming from that eye.

\`\`\`compare bad good
## The common idea
One eye is weak or lazy, so it doesn't see well.

## What's actually going on
Early in life one eye sent the brain a worse picture. The brain learned to lean on the other eye and to tune the weaker one down.
\`\`\`

## The brain picks a favourite

When the two eyes send pictures that don't match well, for example one is blurrier because it needs a stronger glasses prescription, the brain has a problem: it can't merge them cleanly. Its solution is to trust the clearer picture and quietly ignore the other one.

\`\`\`illustration amblyopia
The brain keeps the clear image and tunes out the blurry one.
\`\`\`

Done for long enough while vision is still developing, that habit sticks. Even after the blur is corrected with glasses, the brain keeps underusing that eye.

\`\`\`flow
Unequal pictures | one eye blurrier or turned
Brain picks one | ignores the weaker image
Habit forms | weaker eye's pathway is underused
\`\`\`

## Why both eyes matter

Seeing well with each eye alone is only part of it. When the brain combines both eyes into one picture, you get depth: judging distance, catching a ball, pouring water into a glass.

\`\`\`illustration fusion
Each eye contributes part of the picture; together they make one.
\`\`\`

## How common it is

\`\`\`stats
1.44% | of people worldwide have amblyopia | pooled from 60 studies
99 million | people affected in 2019 | estimate
\`\`\`

These figures come from a 2020 review of 60 studies ([Fu et al., British Journal of Ophthalmology](https://bjo.bmj.com/content/104/8/1164)). Roughly 1 person in 70.

## Why covering the strong eye helps

The classic treatment is patching: cover the strong eye for part of the day, so the brain has no choice but to use the weaker one. Try it below.

\`\`\`embed patching-demo.html height=420
Move the slider, then cover the strong eye.
\`\`\`

Newer approaches, including the red-blue glasses games in SamaSight, try to get both eyes working *together* instead of switching one off. Each eye is shown different parts of the picture, so the brain has to combine them.

\`\`\`illustration anaglyph
With red-blue glasses each eye sees a different dot, so neither can be ignored.
\`\`\`

## What practice looks like

\`\`\`steps
Put on the red-blue glasses | for the games that need them
Calibrate your screen | once on each device
Play short sessions | about 15 minutes, a few times a week
Watch the trend | progress shows over weeks, not single days
\`\`\`

\`\`\`grid
🎯 | Little and often | Regular short sessions beat rare long ones.
😌 | Stop when tired | Strained eyes don't train well.
👓 | Wear your glasses | Correct the blur first; training builds on top.
📈 | Be patient | Changes, if they come, are gradual.
\`\`\`

\`\`\`callout science
Getting better at a game is not the same as seeing better in daily life. Improvements in a trained task don't always carry over, and results vary a lot between people, especially adults.
\`\`\`

\`\`\`callout warning
SamaSight is a practice tool, not a treatment. Amblyopia should be diagnosed and managed with an eye-care professional; ask them before changing glasses, patching or any treatment plan.
\`\`\`
`,de=`---
title: Visual toolkit — every block the blog can use
date: 2026-10-11
summary: A preview of the visual blocks for blog posts. Unlisted; for the owner and for Claude.
tags: [toolkit]
unlisted: true
---

This page isn't in the post list. It shows every visual block a post can use, so you can say "use a timeline here" or "make this a myth vs fact". The numbers and examples below are placeholders, not clinical facts. The Markdown for each block is in \`docs/BLOG.md\`.

## Illustrations

Six built-in animated drawings. They move only once you scroll to them, and stay still for anyone with reduced motion turned on.

\`\`\`illustration two-eyes
Binocular vision: both eyes turn to aim at the same point, more as it comes closer.
\`\`\`

\`\`\`illustration amblyopia
In amblyopia the brain learns to rely on the clearer image.
\`\`\`

\`\`\`illustration fusion
Fusion: each eye sees half the picture; together they make one.
\`\`\`

\`\`\`illustration anaglyph
Red-blue glasses give each eye its own picture.
\`\`\`

\`\`\`illustration nystagmus
Many people with nystagmus have a gaze direction where the eyes are calmer: the null point.
\`\`\`

\`\`\`illustration saccade-pursuit
Two kinds of eye movement the games train.
\`\`\`

## Interactive piece

Custom HTML, made for one post, running in a sealed-off frame.

\`\`\`embed patching-demo.html height=420
Try it: move the slider, then cover the strong eye.
\`\`\`

## Numbers

\`\`\`stats
3 | sessions a week | example value
15 min | per session
84% | accuracy this month | example value
\`\`\`

\`\`\`bars unit=% max=100 title="Accuracy by week (example)"
Week 1 | 52
Week 2 | 61
Week 3 | 70
Week 4 | 78 | best so far
\`\`\`

## Steps and processes

\`\`\`steps
Put the glasses on | red lens over the left eye
Calibrate the screen | once per device, takes a minute
Play one track for 15 minutes | stop early if your eyes get tired
Check your stats | look at the trend, not one day
\`\`\`

\`\`\`flow
See | eyes take in two images
Match | brain lines them up
Fuse | one picture, with depth
\`\`\`

## Comparing ideas

\`\`\`compare bad good
## Myth
It's too late to train an adult eye.

## What research suggests
Adults can still improve with practice, though usually less than children, and results vary.
\`\`\`

\`\`\`grid
🎯 | Focus | Short, regular sessions beat long rare ones.
👓 | Glasses | Red-blue glasses split the image between the eyes.
😌 | Comfort | Stop when your eyes feel strained.
📈 | Progress | Look at weeks, not single sessions.
\`\`\`

## A story over time

\`\`\`timeline
June | Started | first sessions, lots of misses
August | Found my null point | head turned slightly right
October | Steadier reading | fewer lost lines
\`\`\`

## Callouts

\`\`\`callout tip
Play at the same time each day so it becomes a habit.
\`\`\`

\`\`\`callout science
**Perceptual learning**: getting better at a task by practising it. Gains may not fully carry over to everyday vision.
\`\`\`

\`\`\`callout warning
This is a practice tool, not a treatment plan. Talk to your eye-care professional.
\`\`\`

\`\`\`callout key Your own title here
Any callout can have its own heading.
\`\`\`
`;function he(t){const i=t.trim().match(/[^\s"]+="[^"]*"|[^\s"]+=\S*|"[^"]*"|\S+/g)??[],[n="",...s]=i,o=[],r={};for(const l of s){const d=/^([A-Za-z][\w-]*)=(.*)$/.exec(l);d?r[d[1].toLowerCase()]=d[2].replace(/^"(.*)"$/,"$1"):o.push(l.replace(/^"(.*)"$/,"$1"))}return{type:n.toLowerCase(),words:o,args:r}}function z(t){return t.split(`
`).map(i=>i.trim()).filter(i=>i&&!i.startsWith("//")).map(i=>i.replace(/^[-*]\s+/,"").split("|").map(n=>n.trim()))}function ue(t){const i=[];let n=null;for(const s of t.split(`
`)){const o=/^\s*#{1,3}\s+(.*)$/.exec(s);o?(n&&i.push({title:n.title,body:n.lines.join(`
`).trim()}),n={title:o[1].trim(),lines:[]}):(n||(n={title:"",lines:[]}),n.lines.push(s))}return n&&i.push({title:n.title,body:n.lines.join(`
`).trim()}),i.filter(s=>s.title||s.body)}function Q(t){const i=/^([^\d-]*)(-?\d[\d,]*(?:\.\d+)?)(\D*)$/.exec(t.trim());if(!i)return null;const n=i[2].replace(/,/g,""),s=Number(n);return Number.isFinite(s)?{value:s,prefix:i[1],suffix:i[3],decimals:(n.split(".")[1]??"").length}:null}function A(t,i,n,s){const o=Number(t);return Number.isFinite(o)?Math.min(s,Math.max(n,o)):i}function M(){const{settings:t}=ie(),[i,n]=y.useState(()=>{var s;return((s=_())==null?void 0:s.matches)??!1});return y.useEffect(()=>{var r;const s=_();if(!s)return;const o=()=>n(s.matches);return(r=s.addEventListener)==null||r.call(s,"change",o),()=>{var l;return(l=s.removeEventListener)==null?void 0:l.call(s,"change",o)}},[]),i||!!(t!=null&&t.reducedMotion)}function _(){return typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null}function E(t=.25){const i=y.useRef(null),[n,s]=y.useState(()=>typeof IntersectionObserver>"u");return y.useEffect(()=>{if(n||!i.current||typeof IntersectionObserver>"u")return;const o=new IntersectionObserver(r=>{r.some(l=>l.isIntersecting)&&(s(!0),o.disconnect())},{threshold:t});return o.observe(i.current),()=>o.disconnect()},[n,t]),[i,n]}function q(t,i,n){const[s,o]=y.useState(n?1:0);return y.useEffect(()=>{if(n){o(1);return}if(!t)return;let r=0;const l=performance.now(),d=h=>{const p=Math.min(1,(h-l)/i);o(1-Math.pow(1-p,3)),p<1&&(r=requestAnimationFrame(d))};return r=requestAnimationFrame(d),()=>cancelAnimationFrame(r)},[t,i,n]),s}const a={ink:"#e2e8f0",dim:"#94a3b8",faint:"#334155",red:"#e94560",blue:"#3b82f6",cyan:"#22d3ee",yellow:"#facc15",green:"#34d399",panel:"#0f172a"},R={fontFamily:"inherit",fontWeight:700};function f({x:t,y:i,children:n,color:s=a.dim,size:o=22,anchor:r="middle"}){return e.jsx("text",{x:t,y:i,fill:s,fontSize:o,textAnchor:r,style:R,children:n})}function W({x:t,y:i,r:n=34,irisColor:s=a.blue,look:o=0,children:r,dim:l}){const d=n*1.9,h=`eye-${t}-${i}`;return e.jsxs("g",{opacity:l?.55:1,children:[e.jsx("clipPath",{id:h,children:e.jsx("path",{d:`M${t-d} ${i} Q${t} ${i-n*1.25} ${t+d} ${i} Q${t} ${i+n*1.25} ${t-d} ${i}Z`})}),e.jsx("path",{d:`M${t-d} ${i} Q${t} ${i-n*1.25} ${t+d} ${i} Q${t} ${i+n*1.25} ${t-d} ${i}Z`,fill:"#f8fafc"}),e.jsx("g",{clipPath:`url(#${h})`,children:e.jsxs("g",{transform:`translate(${o} 0)`,children:[e.jsx("circle",{cx:t,cy:i,r:n*.62,fill:s}),e.jsx("circle",{cx:t,cy:i,r:n*.28,fill:"#05050a"}),e.jsx("circle",{cx:t-n*.18,cy:i-n*.2,r:n*.1,fill:"#fff",opacity:.85}),r]})}),e.jsx("path",{d:`M${t-d} ${i} Q${t} ${i-n*1.25} ${t+d} ${i}`,fill:"none",stroke:a.ink,strokeWidth:3,strokeLinecap:"round"})]})}function me({x:t,y:i,s:n=1}){return e.jsxs("g",{transform:`translate(${t} ${i}) scale(${n})`,fill:"none",stroke:a.dim,strokeWidth:3,strokeLinecap:"round",children:[e.jsx("path",{d:"M0 -38 C-26 -44 -48 -26 -44 -6 C-60 4 -50 34 -26 32 C-16 46 6 44 0 30 Z",fill:"#1e293b"}),e.jsx("path",{d:"M0 -38 C26 -44 48 -26 44 -6 C60 4 50 34 26 32 C16 46 -6 44 0 30 Z",fill:"#1e293b"}),e.jsx("path",{d:"M-30 -12 C-20 -4 -32 8 -20 14 M30 -12 C20 -4 32 8 20 14 M0 -38 V30"})]})}function fe({animate:t}){const i={x:230,y:285},n={x:410,y:285};return e.jsxs(e.Fragment,{children:[e.jsx(f,{x:320,y:34,color:a.ink,size:24,children:"Both eyes aim at the same point"}),e.jsxs("g",{children:[[i,n].map((s,o)=>e.jsxs("line",{x1:s.x,y1:s.y-30,x2:320,y2:110,stroke:o?a.cyan:a.red,strokeWidth:3,strokeDasharray:"6 6",children:[t&&e.jsx("animate",{attributeName:"y2",values:"110;190;110",dur:"5s",repeatCount:"indefinite"}),t&&e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;-24",dur:"1s",repeatCount:"indefinite"})]},o)),e.jsxs("g",{children:[e.jsx("circle",{cx:320,cy:110,r:14,fill:a.yellow}),e.jsx("circle",{cx:320,cy:110,r:26,fill:"none",stroke:a.yellow,strokeWidth:2,opacity:.5}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;0 80;0 0",dur:"5s",repeatCount:"indefinite"})]})]}),e.jsx(W,{x:i.x,y:i.y,irisColor:a.red,look:6}),e.jsx(W,{x:n.x,y:n.y,irisColor:a.cyan,look:-6}),e.jsx(f,{x:i.x-20,y:350,children:"Left eye"}),e.jsx(f,{x:n.x+20,y:350,children:"Right eye"}),e.jsx(f,{x:292,y:118,anchor:"end",color:a.yellow,children:"target"})]})}function pe({animate:t}){return e.jsxs(e.Fragment,{children:[e.jsx("defs",{children:e.jsx("filter",{id:"amb-blur",children:e.jsx("feGaussianBlur",{stdDeviation:"5"})})}),e.jsx(W,{x:110,y:110,irisColor:a.blue}),e.jsx(W,{x:110,y:260,irisColor:a.blue,dim:!0}),e.jsx(f,{x:110,y:174,children:"Strong eye"}),e.jsx(f,{x:110,y:324,children:"Weaker eye"}),[110,260].map((i,n)=>e.jsxs("g",{children:[e.jsx("rect",{x:210,y:i-42,width:84,height:84,rx:12,fill:a.panel,stroke:a.faint}),e.jsx("text",{x:252,y:i+22,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...R,fontWeight:900},filter:n?"url(#amb-blur)":void 0,children:"E"}),e.jsx("path",{d:`M300 ${i} C360 ${i} 380 185 430 185`,fill:"none",stroke:n?a.faint:a.dim,strokeWidth:3,strokeDasharray:n?"4 8":void 0})]},i)),e.jsx(me,{x:480,y:185}),e.jsx("rect",{x:546,y:140,width:84,height:84,rx:12,fill:a.panel,stroke:a.green,strokeWidth:2}),e.jsx("text",{x:588,y:207,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...R,fontWeight:900},children:"E"}),e.jsxs("text",{x:588,y:207,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...R,fontWeight:900},filter:"url(#amb-blur)",opacity:.15,children:["E",t&&e.jsx("animate",{attributeName:"opacity",values:"0.35;0;0;0.35",keyTimes:"0;0.35;0.8;1",dur:"4s",repeatCount:"indefinite"})]}),e.jsx(f,{x:634,y:126,anchor:"end",color:a.green,children:"What you see"}),e.jsx(f,{x:520,y:270,size:20,children:"brain tunes out"}),e.jsx(f,{x:520,y:294,size:20,children:"the blurry image"})]})}function ge({animate:t}){return e.jsxs(e.Fragment,{children:[e.jsx(f,{x:320,y:34,color:a.ink,size:24,children:"Each eye sees a different dot"}),e.jsx("rect",{x:150,y:60,width:340,height:110,rx:14,fill:a.panel,stroke:a.faint}),e.jsxs("g",{children:[e.jsx("circle",{cx:300,cy:115,r:22,fill:a.red,opacity:.9}),e.jsx("circle",{cx:340,cy:115,r:22,fill:a.blue,opacity:.9,style:{mixBlendMode:"screen"}}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;-14 0;0 0",dur:"4s",repeatCount:"indefinite"})]}),e.jsx(f,{x:510,y:122,anchor:"start",children:"screen"}),e.jsxs("g",{children:[e.jsx("path",{d:"M170 250 H290 M350 250 H470",stroke:a.ink,strokeWidth:4}),e.jsx("path",{d:"M290 250 Q320 236 350 250",stroke:a.ink,strokeWidth:4,fill:"none"}),e.jsx("rect",{x:180,y:226,width:110,height:56,rx:22,fill:a.red,opacity:.75,stroke:a.ink,strokeWidth:3}),e.jsx("rect",{x:350,y:226,width:110,height:56,rx:22,fill:a.blue,opacity:.75,stroke:a.ink,strokeWidth:3})]}),e.jsx("line",{x1:235,y1:226,x2:330,y2:140,stroke:a.blue,strokeWidth:3,strokeDasharray:"5 6"}),e.jsx("line",{x1:405,y1:226,x2:305,y2:140,stroke:a.red,strokeWidth:3,strokeDasharray:"5 6"}),e.jsx(f,{x:235,y:315,color:a.red,children:"red lens"}),e.jsx(f,{x:235,y:341,color:a.ink,size:20,children:"sees blue"}),e.jsx(f,{x:405,y:315,color:a.blue,children:"blue lens"}),e.jsx(f,{x:405,y:341,color:a.ink,size:20,children:"sees red"})]})}function ye(){const n=[],s=[];for(let o=0;o<=120;o++){const r=o/120,l=Math.sin(r*Math.PI*2)*.9,d=2+16*Math.min(1,Math.abs(l-.25)/.9),h=o*7%6/6;n.push((l*18+(h-.5)*d).toFixed(1)),s.push((l*230).toFixed(1))}return{eye:n.join(";"),amp:s.join(";")}}function xe({animate:t}){const i=F.useMemo(ye,[]),n=320+.25*230;return e.jsxs(e.Fragment,{children:[e.jsx(f,{x:320,y:34,color:a.ink,size:24,children:"The eyes wobble less in one gaze direction"}),e.jsx(W,{x:320,y:120,r:40,irisColor:a.blue,look:t?0:6,children:t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:i.eye.split(";").map(s=>`${s} 0`).join(";"),dur:"6s",repeatCount:"indefinite",additive:"sum"})}),e.jsx("path",{d:`M90 250 Q${n} 236 550 250`,stroke:"none",fill:"none"}),e.jsx("path",{d:`M90 228 L${n} 246 L550 228 L550 272 L${n} 254 L90 272 Z`,fill:a.blue,opacity:.18}),e.jsx("line",{x1:90,y1:250,x2:550,y2:250,stroke:a.dim,strokeWidth:2}),e.jsx("line",{x1:n,y1:215,x2:n,y2:285,stroke:a.green,strokeWidth:3}),e.jsx(f,{x:n,y:205,color:a.green,children:"null point"}),e.jsx(f,{x:90,y:305,anchor:"start",children:"look left"}),e.jsx(f,{x:550,y:305,anchor:"end",children:"look right"}),e.jsx(f,{x:320,y:343,size:20,children:"wider band = more wobble"}),e.jsx("circle",{cx:320,cy:250,r:9,fill:a.yellow,children:t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:i.amp.split(";").map(s=>`${s} 0`).join(";"),dur:"6s",repeatCount:"indefinite"})})]})}function be({animate:t}){const i=[140,260,380,500];return e.jsxs(e.Fragment,{children:[e.jsx(f,{x:60,y:64,anchor:"start",color:a.ink,size:24,children:"Saccade: quick jumps, then pause"}),i.map(n=>e.jsx("circle",{cx:n,cy:110,r:8,fill:a.faint},n)),e.jsx("circle",{cx:t?140:380,cy:110,r:14,fill:a.yellow,children:t&&e.jsx("animate",{attributeName:"cx",values:"140;260;380;500;140",dur:"3.2s",calcMode:"discrete",repeatCount:"indefinite"})}),e.jsx("path",{d:"M140 140 H200 V128 M260 140 H320 V128 M380 140 H440 V128",fill:"none",stroke:a.dim,strokeWidth:2}),e.jsx(f,{x:60,y:212,anchor:"start",color:a.ink,size:24,children:"Pursuit: smooth following"}),e.jsx("path",{d:"M140 270 C220 220 300 320 380 270 S500 230 520 255",fill:"none",stroke:a.faint,strokeWidth:6,strokeLinecap:"round"}),e.jsx("circle",{r:14,fill:a.cyan,cx:t?0:380,cy:t?0:270,children:t&&e.jsx("animateMotion",{dur:"4s",repeatCount:"indefinite",path:"M140 270 C220 220 300 320 380 270 S500 230 520 255",keyPoints:"0;1;0",keyTimes:"0;0.5;1",calcMode:"linear"})})]})}function je({animate:t}){const i=({x:s,c:o})=>e.jsxs("g",{transform:`translate(${s} 0)`,children:[e.jsx("ellipse",{cx:0,cy:165,rx:26,ry:18,fill:o}),e.jsx("circle",{cx:22,cy:150,r:11,fill:o}),e.jsx("path",{d:"M32 150 l12 3 l-12 4z",fill:a.yellow})]}),n=({x:s,c:o})=>e.jsxs("g",{transform:`translate(${s} 0)`,fill:"none",stroke:o,strokeWidth:4,children:[e.jsx("path",{d:"M-45 210 V140 Q0 95 45 140 V210 Z"}),[-25,-5,15,35].map(r=>e.jsx("line",{x1:r-5,y1:120,x2:r-5,y2:210},r))]});return e.jsxs(e.Fragment,{children:[e.jsx(f,{x:110,y:50,color:a.red,children:"left eye"}),e.jsx(f,{x:530,y:50,color:a.cyan,children:"right eye"}),e.jsx(f,{x:320,y:50,color:a.green,children:"together"}),e.jsx(i,{x:100,c:a.red}),e.jsx(n,{x:540,c:a.cyan}),e.jsxs("g",{children:[e.jsxs("g",{children:[e.jsx(i,{x:320,c:a.red}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"-220 0;0 0;0 0;-220 0",keyTimes:"0;0.4;0.8;1",dur:"5s",repeatCount:"indefinite"})]}),e.jsxs("g",{children:[e.jsx(n,{x:320,c:a.cyan}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"220 0;0 0;0 0;220 0",keyTimes:"0;0.4;0.8;1",dur:"5s",repeatCount:"indefinite"})]})]}),e.jsx("rect",{x:240,y:95,width:160,height:140,rx:16,fill:"none",stroke:a.green,strokeWidth:2,strokeDasharray:"6 6"}),e.jsx(f,{x:320,y:290,color:a.ink,size:24,children:"One picture: bird in the cage"}),e.jsx(f,{x:320,y:322,size:20,children:"needs both eyes working together"})]})}const ke={"two-eyes":{title:"Two eyes converging on one target",Comp:fe},amblyopia:{title:"Amblyopia: the brain favours the clear image from the stronger eye",Comp:pe},anaglyph:{title:"Red-blue glasses: each lens blocks its own colour, so each eye sees a different dot",Comp:ge},nystagmus:{title:"Nystagmus: the eye wobbles less near the null point",Comp:xe},"saccade-pursuit":{title:"Saccades jump between points; pursuit glides along a path",Comp:be},fusion:{title:"Fusion: each eye sees half the picture and the brain combines them",Comp:je}},we=["callout","stats","steps","compare","timeline","bars","grid","flow","illustration","embed","html"];function ve(t){return we.includes(t)}function Se({info:t,body:i,r:n}){const s=he(t),o=_e[s.type];return o?e.jsx(o,{b:s,body:i,r:n}):null}const b=["#e94560","#22d3ee","#facc15","#34d399","#a78bfa","#3b82f6"];function T({children:t,delay:i=0,style:n}){const s=M(),[o,r]=E(.15),l=s||r;return e.jsx("div",{ref:o,style:{...n,opacity:l?1:0,transform:l?"none":"translateY(14px)",transition:s?void 0:`opacity 500ms ease ${i}ms, transform 500ms ease ${i}ms`},children:t})}const D={tip:{icon:"💡",label:"Tip",color:"#34d399"},note:{icon:"📝",label:"Note",color:"#7dd3fc"},warning:{icon:"⚠️",label:"Careful",color:"#facc15"},science:{icon:"🔬",label:"The science",color:"#a78bfa"},myth:{icon:"❌",label:"Myth",color:"#e94560"},fact:{icon:"✅",label:"Fact",color:"#34d399"},key:{icon:"🔑",label:"Key idea",color:"#e94560"}};function Te({b:t,body:i,r:n}){const s=D[(t.words[0]??"").toLowerCase()],o=s??D.note,r=t.args.title??(s?t.words.slice(1):t.words).join(" ");return e.jsxs(T,{style:{...c.block,...c.callout,borderColor:o.color,background:`${o.color}14`},children:[e.jsxs("div",{style:{...c.calloutHead,color:o.color},children:[e.jsx("span",{"aria-hidden":!0,children:o.icon})," ",r||o.label]}),e.jsx("div",{style:c.calloutBody,children:n.md(i)})]})}function Ce({text:t,run:i,calm:n}){const s=Q(t),o=q(i&&!!s,1200,n);if(!s)return e.jsx(e.Fragment,{children:t});const r=(s.value*o).toFixed(s.decimals);return e.jsxs(e.Fragment,{children:[s.prefix,Number(r).toLocaleString(void 0,{minimumFractionDigits:s.decimals,maximumFractionDigits:s.decimals}),s.suffix]})}function ze({body:t,r:i}){const n=M(),[s,o]=E(.3),r=z(t);return e.jsx("div",{ref:s,style:{...c.block,...c.statsGrid},children:r.map(([l,d,h],p)=>e.jsxs(T,{delay:p*120,style:{...c.stat,borderTopColor:b[p%b.length]},children:[e.jsx("div",{style:{...c.statValue,color:b[p%b.length]},children:e.jsx(Ce,{text:l,run:o,calm:n})}),d&&e.jsx("div",{style:c.statLabel,children:i.inline(d)}),h&&e.jsx("div",{style:c.statNote,children:i.inline(h)})]},p))})}function $e({body:t,r:i}){const n=z(t);return e.jsx("ol",{style:{...c.block,...c.steps},children:n.map(([s,o],r)=>e.jsx("li",{style:c.stepItem,children:e.jsxs(T,{delay:r*140,style:c.stepRow,children:[e.jsxs("div",{style:c.stepRail,children:[e.jsx("div",{style:{...c.stepDot,background:b[r%b.length]},children:r+1}),r<n.length-1&&e.jsx("div",{style:c.stepLine})]}),e.jsxs("div",{style:c.stepText,children:[e.jsx("div",{style:c.stepTitle,children:i.inline(s)}),o&&e.jsx("div",{style:c.stepBody,children:i.inline(o)})]})]})},r))})}function We({b:t,body:i,r:n}){const s=ue(i),o=t.words.map(l=>l.toLowerCase()),r=l=>o[l]==="bad"?"#e94560":o[l]==="good"?"#34d399":b[(l+1)%b.length];return e.jsx("div",{style:{...c.block,...c.compare},children:s.map((l,d)=>e.jsxs(T,{delay:d*150,style:{...c.compareCard,borderColor:r(d)},children:[l.title&&e.jsx("div",{style:{...c.compareTitle,color:r(d)},children:n.inline(l.title)}),e.jsx("div",{style:c.compareBody,children:n.md(l.body)})]},d))})}function Me({body:t,r:i}){const n=z(t);return e.jsx("div",{style:{...c.block,...c.timeline},children:n.map(([s,o,r],l)=>e.jsxs(T,{delay:l*120,style:c.tlItem,children:[e.jsx("div",{style:{...c.tlDot,background:b[l%b.length]}}),e.jsx("div",{style:c.tlWhen,children:i.inline(s)}),o&&e.jsx("div",{style:c.tlTitle,children:i.inline(o)}),r&&e.jsx("div",{style:c.tlText,children:i.inline(r)})]},l))})}function Le({b:t,body:i,r:n}){const s=M(),[o,r]=E(.3),l=q(r,1100,s),d=z(i).map(([m,x,g])=>{var k;return{label:m,value:((k=Q(x??""))==null?void 0:k.value)??0,raw:x??"",note:g}}),h=A(t.args.max,Math.max(1,...d.map(m=>m.value)),1e-4,1e12),p=t.args.unit??"";return e.jsxs("figure",{ref:o,style:{...c.block,margin:"0 0 1.6em"},children:[t.args.title&&e.jsx("figcaption",{style:c.blockTitle,children:t.args.title}),e.jsx("div",{role:"list",style:c.bars,children:d.map((m,x)=>e.jsxs("div",{role:"listitem",style:c.barRow,children:[e.jsxs("div",{style:c.barLabel,children:[e.jsx("span",{children:n.inline(m.label)}),e.jsx("span",{style:c.barValue,children:/[^\d.,-]/.test(m.raw)?m.raw:`${m.raw}${p}`})]}),e.jsx("div",{style:c.barTrack,children:e.jsx("div",{style:{...c.barFill,width:`${Math.min(100,m.value/h*100)*l}%`,background:b[x%b.length]}})}),m.note&&e.jsx("div",{style:c.barNote,children:n.inline(m.note)})]},x))}),t.args.source&&e.jsxs("div",{style:c.source,children:["Source: ",n.inline(t.args.source)]})]})}function Ie({body:t,r:i}){const n=z(t);return e.jsx("div",{style:{...c.block,...c.grid},children:n.map(([s,o,r],l)=>e.jsxs(T,{delay:l*90,style:c.gridCard,children:[e.jsx("div",{style:c.gridIcon,"aria-hidden":!0,children:s}),e.jsx("div",{style:c.gridTitle,children:i.inline(o??"")}),r&&e.jsx("div",{style:c.gridText,children:i.inline(r)})]},l))})}function Re({body:t,r:i}){const n=z(t);return e.jsx("div",{className:"blog-flow",style:{...c.block,...c.flow},role:"list",children:n.map(([s,o],r)=>e.jsxs(F.Fragment,{children:[e.jsx(T,{delay:r*160,style:{...c.flowNode,borderColor:b[r%b.length]},children:e.jsxs("div",{role:"listitem",children:[e.jsx("div",{style:c.flowTitle,children:i.inline(s)}),o&&e.jsx("div",{style:c.flowText,children:i.inline(o)})]})}),r<n.length-1&&e.jsx("div",{className:"blog-flow-arrow",style:c.flowArrow,"aria-hidden":!0,children:"→"})]},r))})}function Ae({b:t,body:i,r:n}){const s=M(),[o,r]=E(.2),l=(t.words[0]??"").toLowerCase(),d=ke[l];if(!d)return null;const h=i.trim();return e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[e.jsx("div",{ref:o,style:c.illus,children:e.jsx("svg",{viewBox:"0 0 640 360",role:"img","aria-label":d.title,style:{display:"block",width:"100%",height:"auto"},children:e.jsx(d.Comp,{animate:r&&!s})})}),h&&e.jsx("figcaption",{style:c.caption,children:n.inline(h)})]})}const Ee=`<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{color-scheme:dark;--red:#e94560;--cyan:#22d3ee;--yellow:#facc15;--green:#34d399;--blue:#3b82f6;--ink:#e2e8f0;--dim:#94a3b8;--panel:#0f172a;--line:#1e293b}
  html,body{margin:0;background:transparent;color:var(--ink);font:17px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  *{box-sizing:border-box} button{font:inherit;min-height:44px}
  @media (prefers-reduced-motion: reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
</style>`,Ne=`<script>(function(){var last=0;function send(){var h=Math.ceil(document.documentElement.getBoundingClientRect().height);if(h!==last){last=h;parent.postMessage({samasightEmbedHeight:h},'*')}}
addEventListener('load',send);new ResizeObserver(send).observe(document.documentElement);setTimeout(send,50)})()<\/script>`;function Be(t,i){return`<!doctype html><html><head>${Ee}${i?"<style>*,*::before,*::after{animation:none!important;transition:none!important}</style><script>window.SAMASIGHT_CALM=true<\/script>":"<script>window.SAMASIGHT_CALM=false<\/script>"}</head><body>${t}${Ne}</body></html>`}function J({html:t,height:i,title:n}){const s=M(),o=y.useRef(null),[r,l]=y.useState(i);return y.useEffect(()=>{const d=h=>{var m,x;if(h.source!==((m=o.current)==null?void 0:m.contentWindow))return;const p=Number((x=h.data)==null?void 0:x.samasightEmbedHeight);Number.isFinite(p)&&p>20&&l(Math.min(4e3,p))};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]),e.jsx("iframe",{ref:o,title:n,sandbox:"allow-scripts",srcDoc:Be(t,s),loading:"lazy",style:{...c.frame,height:r}})}function Fe({b:t,body:i}){return e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[e.jsx(J,{html:i,height:A(t.args.height,360,60,4e3),title:t.args.title??"Interactive illustration"}),t.args.caption&&e.jsx("figcaption",{style:c.caption,children:t.args.caption})]})}function He({b:t,body:i,r:n}){const s=t.words[0]??"",[o,r]=y.useState(void 0);y.useEffect(()=>{let d=!0;if(!n.loadEmbed||!s){r(null);return}return n.loadEmbed(s).then(h=>{d&&r(h)}),()=>{d=!1}},[s,n]);const l=i.trim();return o===null?null:e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[o===void 0?e.jsx("div",{style:{...c.frame,height:A(t.args.height,360,60,4e3)}}):e.jsx(J,{html:o,height:A(t.args.height,360,60,4e3),title:t.args.title??l??"Interactive illustration"}),l&&e.jsx("figcaption",{style:c.caption,children:n.inline(l)})]})}const _e={callout:Te,stats:ze,steps:$e,compare:We,timeline:Me,bars:Le,grid:Ie,flow:Re,illustration:Ae,embed:He,html:Fe},c={block:{margin:"0 0 1.6em"},blockTitle:{margin:"0 0 12px",fontSize:18,fontWeight:800,color:"#f8fafc"},caption:{marginTop:10,fontSize:15,lineHeight:1.5,color:"#94a3b8",textAlign:"center"},source:{marginTop:10,fontSize:14,color:"#94a3b8"},callout:{padding:"14px 18px",borderRadius:12,border:"1px solid",borderLeftWidth:5},calloutHead:{fontSize:15,fontWeight:800,letterSpacing:.5,textTransform:"uppercase",marginBottom:6},calloutBody:{marginBottom:-18},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:12},stat:{padding:"16px 16px 14px",borderRadius:12,background:"#0b1120",border:"1px solid #1e293b",borderTop:"4px solid"},statValue:{fontSize:38,overflowWrap:"anywhere",lineHeight:1.1,fontWeight:900,fontVariantNumeric:"tabular-nums"},statLabel:{marginTop:6,fontSize:16,lineHeight:1.45,color:"#e2e8f0"},statNote:{marginTop:4,fontSize:14,lineHeight:1.4,color:"#94a3b8"},steps:{listStyle:"none",padding:0},stepItem:{margin:0},stepRow:{display:"flex",gap:14},stepRail:{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0},stepDot:{width:36,height:36,borderRadius:999,display:"grid",placeItems:"center",color:"#05050a",fontWeight:900,fontSize:17},stepLine:{width:3,flex:1,minHeight:16,background:"#1e293b",margin:"4px 0"},stepText:{paddingBottom:18,minWidth:0},stepTitle:{fontSize:19,lineHeight:1.4,fontWeight:800,color:"#f8fafc",paddingTop:5},stepBody:{marginTop:4,fontSize:17,lineHeight:1.6,color:"#cbd5e1"},compare:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",gap:12},compareCard:{padding:"14px 16px",borderRadius:12,border:"2px solid",background:"#0b1120"},compareTitle:{fontSize:18,fontWeight:900,marginBottom:8},compareBody:{marginBottom:-18},timeline:{position:"relative",paddingLeft:26,borderLeft:"3px solid #1e293b",marginLeft:8},tlItem:{position:"relative",padding:"0 0 22px"},tlDot:{position:"absolute",left:-37,top:4,width:18,height:18,borderRadius:999,border:"3px solid #05050a"},tlWhen:{fontSize:14,fontWeight:800,letterSpacing:1,textTransform:"uppercase",color:"#94a3b8"},tlTitle:{fontSize:19,fontWeight:800,color:"#f8fafc",marginTop:2},tlText:{fontSize:17,lineHeight:1.6,color:"#cbd5e1",marginTop:2},bars:{display:"grid",gap:14},barRow:{},barLabel:{display:"flex",justifyContent:"space-between",gap:12,fontSize:16,color:"#e2e8f0",marginBottom:6},barValue:{fontWeight:800,fontVariantNumeric:"tabular-nums",flexShrink:0},barTrack:{height:14,borderRadius:999,background:"#1e293b",overflow:"hidden"},barFill:{height:"100%",borderRadius:999},barNote:{marginTop:4,fontSize:14,color:"#94a3b8"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12},gridCard:{padding:16,borderRadius:12,background:"#0b1120",border:"1px solid #1e293b",height:"100%",boxSizing:"border-box"},gridIcon:{fontSize:30,lineHeight:1},gridTitle:{marginTop:10,fontSize:18,fontWeight:800,color:"#f8fafc"},gridText:{marginTop:4,fontSize:16,lineHeight:1.55,color:"#cbd5e1"},flow:{display:"flex",flexWrap:"wrap",alignItems:"stretch",gap:8},flowNode:{flex:"1 1 140px",padding:"12px 14px",borderRadius:12,border:"2px solid",background:"#0b1120",minWidth:0},flowTitle:{fontSize:17,fontWeight:800,color:"#f8fafc"},flowText:{marginTop:4,fontSize:15,lineHeight:1.5,color:"#cbd5e1"},flowArrow:{alignSelf:"center",fontSize:24,color:"#64748b",flex:"0 0 auto"},illus:{borderRadius:14,background:"#0b1120",border:"1px solid #1e293b",padding:8},frame:{display:"block",width:"100%",border:"1px solid #1e293b",borderRadius:14,background:"#0b1120"}},De=/^(https?:\/\/|mailto:|#\/|\/|\.{0,2}\/?[a-z0-9_-])/i;function X(t){const i=t.trim();return!i||i.startsWith("//")||/^[a-z][a-z0-9+.-]*:/i.test(i)&&!/^(https?|mailto):/i.test(i)?null:De.test(i)?i:null}function Y(t,i){var s;return/^https?:\/\//i.test(t)?X(t):((s=i.resolveImage)==null?void 0:s.call(i,t))??null}const Pe=/(`[^`]+`)|(!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\))|(\[[^\]]+\]\([^)\s]+\))|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*|_[^_\s][^_]*_)/;function S(t,i={},n="i"){const s=[];let o=t,r=0;for(;o.length;){const l=Pe.exec(o);if(!l){s.push(o);break}l.index>0&&s.push(o.slice(0,l.index));const d=l[0],h=`${n}-${r++}`;if(l[1])s.push(e.jsx("code",{style:j.inlineCode,children:d.slice(1,-1)},h));else if(l[2]){const p=/^!\[([^\]]*)\]\(([^)\s]+)/.exec(d),m=Y(p[2],i);s.push(m?e.jsx("img",{src:m,alt:p[1],loading:"lazy",style:j.inlineImg},h):p[1])}else if(l[3]){const p=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(d),m=X(p[2]),x=S(p[1],i,h);if(!m)s.push(e.jsx(F.Fragment,{children:x},h));else{const g=/^https?:\/\//i.test(m);s.push(e.jsx("a",{href:m,style:j.link,...g?{target:"_blank",rel:"noopener noreferrer"}:{},children:x},h))}}else l[4]?s.push(e.jsx("strong",{children:S(d.slice(2,-2),i,h)},h)):s.push(e.jsx("em",{children:S(d.slice(1,-1),i,h)},h));o=o.slice(l.index+d.length)}return s}const I=/^\s*[-*+]\s+(.*)$/,N=/^\s*\d+[.)]\s+(.*)$/,P=/^(#{1,4})\s+(.*?)\s*#*\s*$/,O=/^\s*([-*_])(\s*\1){2,}\s*$/,V=/^\s*!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/;function B(t,i={}){var d;const n=t.replace(/\r\n?/g,`
`).split(`
`),s=[];let o=0,r=0;const l=()=>`b${r++}`;for(;o<n.length;){const h=n[o];if(!h.trim()){o++;continue}if(/^\s*```/.test(h)){const g=h.trim().slice(3).trim(),k=[];for(o++;o<n.length&&!/^\s*```\s*$/.test(n[o]);)k.push(n[o++]);o++;const v=((d=g.split(/\s+/)[0])==null?void 0:d.toLowerCase())??"";ve(v)?s.push(e.jsx(Se,{info:g,body:k.join(`
`),r:{md:$=>B($,i),inline:$=>S($,i),loadEmbed:i.loadEmbed}},l())):s.push(e.jsx("pre",{style:j.pre,children:e.jsx("code",{children:k.join(`
`)})},l()));continue}const p=P.exec(h);if(p){const k=`h${Math.max(2,p[1].length)}`;s.push(e.jsx(k,{style:j[k],children:S(p[2],i)},l())),o++;continue}if(O.test(h)){s.push(e.jsx("hr",{style:j.hr},l())),o++;continue}const m=V.exec(h);if(m){const g=Y(m[2],i);g&&s.push(e.jsxs("figure",{style:j.figure,children:[e.jsx("img",{src:g,alt:m[1],loading:"lazy",style:j.figureImg}),m[3]&&e.jsx("figcaption",{style:j.caption,children:m[3]})]},l())),o++;continue}if(/^\s*>/.test(h)){const g=[];for(;o<n.length&&/^\s*>/.test(n[o]);)g.push(n[o++].replace(/^\s*>\s?/,""));s.push(e.jsx("blockquote",{style:j.quote,children:B(g.join(`
`),i)},l()));continue}if(I.test(h)||N.test(h)){const g=!I.test(h),k=g?N:I,v=[];for(;o<n.length&&n[o].trim();){const L=k.exec(n[o]);if(L)v.push(L[1]);else if(/^\s{2,}\S/.test(n[o])&&v.length)v[v.length-1]+=" "+n[o].trim();else break;o++}const $=g?"ol":"ul";s.push(e.jsx($,{style:j.list,children:v.map((L,H)=>e.jsx("li",{style:j.li,children:S(L,i,`l${H}`)},H))},l()));continue}const x=[];for(;o<n.length&&n[o].trim()&&!P.test(n[o])&&!/^\s*```/.test(n[o])&&!/^\s*>/.test(n[o])&&!I.test(n[o])&&!N.test(n[o])&&!O.test(n[o])&&!V.test(n[o]);)x.push(n[o++].trim());s.push(e.jsx("p",{style:j.p,children:S(x.join(" "),i)},l()))}return s}function Oe(t){return t.replace(/```[\s\S]*?```/g," ").replace(/[#>*_`[\]()!-]/g," ").split(/\s+/).filter(Boolean).length}const j={p:{margin:"0 0 1.1em",fontSize:19,lineHeight:1.7,color:"#e2e8f0"},h2:{margin:"1.6em 0 0.6em",fontSize:26,lineHeight:1.3,fontWeight:800,color:"#f8fafc"},h3:{margin:"1.4em 0 0.5em",fontSize:22,lineHeight:1.35,fontWeight:800,color:"#f8fafc"},h4:{margin:"1.2em 0 0.4em",fontSize:19,lineHeight:1.4,fontWeight:800,color:"#f8fafc"},list:{margin:"0 0 1.1em",paddingLeft:"1.4em",fontSize:19,lineHeight:1.7,color:"#e2e8f0"},li:{margin:"0 0 0.35em"},quote:{margin:"0 0 1.1em",padding:"4px 0 4px 18px",borderLeft:"4px solid #e94560",color:"#cbd5e1"},pre:{margin:"0 0 1.1em",padding:16,borderRadius:10,background:"#0f172a",border:"1px solid #1e293b",overflowX:"auto",fontSize:15,lineHeight:1.5,color:"#e2e8f0"},inlineCode:{padding:"1px 6px",borderRadius:6,background:"#1e293b",fontSize:"0.9em"},link:{color:"#7dd3fc",textDecoration:"underline",textUnderlineOffset:3},hr:{margin:"2em 0",border:0,borderTop:"1px solid #334155"},figure:{margin:"0 0 1.4em"},figureImg:{display:"block",width:"100%",height:"auto",borderRadius:12,background:"#0f172a"},inlineImg:{maxWidth:"100%",height:"auto",verticalAlign:"middle"},caption:{marginTop:8,fontSize:15,lineHeight:1.5,color:"#94a3b8",textAlign:"center"}};function Ve(t){const i=t.replace(/^﻿/,"").replace(/\r\n?/g,`
`),n=/^---\n([\s\S]*?)\n---\n?/.exec(i);if(!n)return{meta:{},body:i};const s={};for(const o of n[1].split(`
`)){const r=/^([A-Za-z][\w-]*)\s*:\s*(.*)$/.exec(o.trim());if(!r)continue;const l=r[1].toLowerCase();let d=r[2].trim();/^\[.*\]$/.test(d)?s[l]=d.slice(1,-1).split(",").map(h=>G(h.trim())).filter(Boolean):/^(true|false)$/i.test(d)?s[l]=d.toLowerCase()==="true":(d=G(d),s[l]=d)}return{meta:s,body:i.slice(n[0].length)}}function G(t){return/^(['"]).*\1$/.test(t)?t.slice(1,-1):t}const w=t=>typeof t=="string"?t:"";function Ge(t){return(t.split("/").pop()??t).replace(/\.md$/i,"").toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Ue(t,i,n=()=>null){const{meta:s,body:o}=Ve(i),r=Ge(t),l=Array.isArray(s.tags)?s.tags:w(s.tags)?w(s.tags).split(",").map(p=>p.trim()).filter(Boolean):[],d=/^\d{4}-\d{2}-\d{2}/.test(w(s.date))?w(s.date).slice(0,10):"",h=w(s.cover)?/^https?:\/\//i.test(w(s.cover))?w(s.cover):n(w(s.cover)):null;return{slug:r,title:w(s.title)||r.replace(/-/g," "),date:d,summary:w(s.summary),tags:l,cover:h,draft:s.draft===!0,unlisted:s.unlisted===!0,body:o,minutes:Math.max(1,Math.round(Oe(o)/200))}}function Ze(t){return[...t].sort((i,n)=>(n.date||"0").localeCompare(i.date||"0")||i.slug.localeCompare(n.slug))}function Qe(t){const i=new Map;for(const[n,s]of Object.entries(t))i.set((n.split("/").pop()??"").toLowerCase(),s);return n=>i.get((n.split(/[?#]/)[0].split("/").pop()??"").toLowerCase())??null}const qe=Object.assign({"../../content/blog/_template.md":ae,"../../content/blog/amblyopia-is-a-brain-thing.md":ce,"../../content/blog/visual-toolkit.md":de}),Je=Object.assign({}),K=Qe(Je),U=Object.assign({"../../content/blog/embeds/patching-demo.html":()=>oe(()=>import("./patching-demo-DDUiJP4U.js"),[]).then(t=>t.default)});async function Xe(t){var s;const i=(s=t.split("/").pop())==null?void 0:s.toLowerCase(),n=Object.keys(U).find(o=>{var r;return((r=o.split("/").pop())==null?void 0:r.toLowerCase())===i});if(!n)return null;try{return await U[n]()}catch{return null}}const Ye=se==="dev",ee=Ze(Object.entries(qe).filter(([t])=>!(t.split("/").pop()??"").startsWith("_")).map(([t,i])=>Ue(t,i,K)).filter(t=>Ye||!t.draft)),Z=ee.filter(t=>!t.unlisted);function Ke(t){return t?ee.find(i=>i.slug===t.toLowerCase()):void 0}function et(t){if(!t)return"";const[i,n,s]=t.split("-").map(Number);return`${s} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n-1]??""} ${i}`}function lt(){const{slug:t}=ne(),{user:i}=re(),n=t?Ke(t):void 0;return y.useEffect(()=>{const s=document.title;return document.title=n?`${n.title} · SamaSight`:t?"Post not found · SamaSight":"Blog · SamaSight",()=>{document.title=s}},[n,t]),y.useEffect(()=>{window.scrollTo(0,0)},[t]),e.jsxs("div",{style:u.page,children:[!i&&e.jsxs("header",{style:u.header,children:[e.jsxs(C,{to:"/",style:u.brand,"aria-label":"SamaSight home",children:[e.jsx(le,{color:"#e94560",size:22}),e.jsx("span",{children:"SAMASIGHT"})]}),e.jsx(C,{to:"/",style:u.headerCta,children:"Sign in"})]}),e.jsxs("div",{style:u.column,children:[t?n?e.jsx(nt,{post:n}):e.jsx(it,{}):e.jsx(tt,{}),e.jsx("p",{style:u.disclaimer,children:"SamaSight is a practice tool, not a medical device. These posts share personal experience and general information, not medical advice. Talk to your eye-care professional before changing any treatment."})]})]})}function tt(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{style:u.listTitle,children:"Blog"}),e.jsx("p",{style:u.listIntro,children:"Notes on amblyopia, nystagmus, binocular vision and practising at home."}),Z.length===0?e.jsx("p",{style:u.empty,children:"No posts yet. Check back soon."}):e.jsx("ul",{style:u.cards,children:Z.map(t=>e.jsx("li",{children:e.jsxs(C,{to:`/blog/${t.slug}`,style:u.card,children:[t.cover&&e.jsx("img",{src:t.cover,alt:"",loading:"lazy",style:u.cardCover}),e.jsxs("div",{style:u.cardBody,children:[e.jsxs("div",{style:u.meta,children:[t.draft&&e.jsx("span",{style:u.draft,children:"DRAFT"}),e.jsx(te,{post:t})]}),e.jsx("h2",{style:u.cardTitle,children:t.title}),t.summary&&e.jsx("p",{style:u.cardSummary,children:t.summary})]})]})},t.slug))})]})}function te({post:t}){return e.jsxs("span",{children:[t.date&&e.jsx("time",{dateTime:t.date,children:et(t.date)}),t.date&&" · ",t.minutes," min read"]})}function nt({post:t}){const i=y.useMemo(()=>B(t.body,{resolveImage:K,loadEmbed:Xe}),[t]),[n,s]=y.useState(null),o=async()=>{const r=window.location.href;try{if(navigator.share){await navigator.share({title:t.title,url:r});return}await navigator.clipboard.writeText(r),s("Link copied")}catch(l){l.name!=="AbortError"&&s("Could not share. Copy the address bar link instead.")}};return e.jsxs("article",{children:[e.jsx(C,{to:"/blog",style:u.back,children:"← All posts"}),e.jsx("h1",{style:u.postTitle,children:t.title}),e.jsxs("div",{style:u.postMeta,children:[t.draft&&e.jsx("span",{style:u.draft,children:"DRAFT"}),e.jsx(te,{post:t})]}),t.tags.length>0&&e.jsx("div",{style:u.tags,children:t.tags.map(r=>e.jsx("span",{style:u.tag,children:r},r))}),t.cover&&e.jsx("img",{src:t.cover,alt:"",style:u.cover}),e.jsx("div",{children:i}),e.jsxs("div",{style:u.footerRow,children:[e.jsx("button",{type:"button",onClick:o,style:u.shareBtn,children:"Share this post"}),e.jsx(C,{to:"/blog",style:u.back,children:"← All posts"})]}),n&&e.jsx("p",{role:"status",style:u.sharedNote,children:n})]})}function it(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{style:u.listTitle,children:"Post not found"}),e.jsx("p",{style:u.listIntro,children:"It may have been renamed or taken down."}),e.jsx(C,{to:"/blog",style:u.back,children:"← All posts"})]})}const u={page:{minHeight:"100dvh",background:"#05050a",color:"#e2e8f0",boxSizing:"border-box"},header:{position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"10px 16px",background:"rgba(5,5,10,0.94)",borderBottom:"1px solid #1e293b"},brand:{display:"flex",alignItems:"center",gap:8,minHeight:44,color:"#f8fafc",textDecoration:"none",fontWeight:900,letterSpacing:3,fontSize:15},headerCta:{display:"inline-flex",alignItems:"center",minHeight:44,padding:"0 16px",borderRadius:999,border:"1px solid #334155",color:"#f8fafc",textDecoration:"none",fontWeight:700,fontSize:15},column:{maxWidth:720,margin:"0 auto",padding:"24px 16px 48px",boxSizing:"border-box"},listTitle:{margin:"8px 0 8px",fontSize:36,lineHeight:1.15,fontWeight:900,color:"#f8fafc"},listIntro:{margin:"0 0 24px",fontSize:18,lineHeight:1.6,color:"#94a3b8"},empty:{fontSize:18,color:"#94a3b8",padding:"32px 0"},cards:{listStyle:"none",margin:0,padding:0,display:"grid",gap:16},card:{display:"block",overflow:"hidden",borderRadius:14,border:"1px solid #1e293b",background:"#0b1120",color:"inherit",textDecoration:"none"},cardCover:{display:"block",width:"100%",aspectRatio:"16 / 9",objectFit:"cover",background:"#0f172a"},cardBody:{padding:"16px 18px 18px"},meta:{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"#94a3b8"},cardTitle:{margin:"6px 0 6px",fontSize:22,lineHeight:1.3,fontWeight:800,color:"#f8fafc"},cardSummary:{margin:0,fontSize:17,lineHeight:1.55,color:"#cbd5e1"},draft:{padding:"2px 8px",borderRadius:999,background:"#facc15",color:"#05050a",fontSize:12,fontWeight:800,letterSpacing:1},back:{display:"inline-flex",alignItems:"center",minHeight:44,color:"#7dd3fc",textDecoration:"none",fontSize:16,fontWeight:600},postTitle:{margin:"8px 0 10px",fontSize:34,lineHeight:1.2,fontWeight:900,color:"#f8fafc",overflowWrap:"anywhere"},postMeta:{display:"flex",alignItems:"center",gap:8,fontSize:15,color:"#94a3b8",marginBottom:12},tags:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:20},tag:{padding:"4px 10px",borderRadius:999,border:"1px solid #334155",fontSize:13,color:"#cbd5e1"},cover:{display:"block",width:"100%",height:"auto",borderRadius:14,margin:"0 0 24px",background:"#0f172a"},footerRow:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:12,marginTop:32},shareBtn:{minHeight:44,padding:"0 20px",borderRadius:999,border:"none",background:"#e94560",color:"#fff",fontWeight:800,fontSize:16,cursor:"pointer"},sharedNote:{marginTop:8,fontSize:15,color:"#94a3b8"},disclaimer:{marginTop:48,paddingTop:16,borderTop:"1px solid #1e293b",fontSize:14,lineHeight:1.6,color:"#94a3b8"}};export{lt as default};
