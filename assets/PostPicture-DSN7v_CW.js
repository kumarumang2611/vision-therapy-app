import{a9 as te,B as ne,_ as ie}from"./index-RwuyMp8J.js";import{f as b,j as e,R as I}from"./vendor-react-utLNktYj.js";const se=`---
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
`,re=`---
title: Amblyopia is a brain thing, not a lazy eye
date: 2026-10-11
summary: Why the "lazy eye" usually works fine, what the brain is really doing, and what practice can and can't do.
tags: [amblyopia, basics]
featured: true
illustration: amblyopia
games: [dot-challenge, letter-click, contrast-hunter]
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
`,oe=`---
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
`;function le(t){const n=t.trim().match(/[^\s"]+="[^"]*"|[^\s"]+=\S*|"[^"]*"|\S+/g)??[],[i="",...s]=n,r=[],o={};for(const l of s){const d=/^([A-Za-z][\w-]*)=(.*)$/.exec(l);d?o[d[1].toLowerCase()]=d[2].replace(/^"(.*)"$/,"$1"):r.push(l.replace(/^"(.*)"$/,"$1"))}return{type:i.toLowerCase(),words:r,args:o}}function C(t){return t.split(`
`).map(n=>n.trim()).filter(n=>n&&!n.startsWith("//")).map(n=>n.replace(/^[-*]\s+/,"").split("|").map(i=>i.trim()))}function ae(t){const n=[];let i=null;for(const s of t.split(`
`)){const r=/^\s*#{1,3}\s+(.*)$/.exec(s);r?(i&&n.push({title:i.title,body:i.lines.join(`
`).trim()}),i={title:r[1].trim(),lines:[]}):(i||(i={title:"",lines:[]}),i.lines.push(s))}return i&&n.push({title:i.title,body:i.lines.join(`
`).trim()}),n.filter(s=>s.title||s.body)}function Z(t){const n=/^([^\d-]*)(-?\d[\d,]*(?:\.\d+)?)(\D*)$/.exec(t.trim());if(!n)return null;const i=n[2].replace(/,/g,""),s=Number(i);return Number.isFinite(s)?{value:s,prefix:n[1],suffix:n[3],decimals:(i.split(".")[1]??"").length}:null}function R(t,n,i,s){const r=Number(t);return Number.isFinite(r)?Math.min(s,Math.max(i,r)):n}function T(){const{settings:t}=te(),[n,i]=b.useState(()=>{var s;return((s=_())==null?void 0:s.matches)??!1});return b.useEffect(()=>{var o;const s=_();if(!s)return;const r=()=>i(s.matches);return(o=s.addEventListener)==null||o.call(s,"change",r),()=>{var l;return(l=s.removeEventListener)==null?void 0:l.call(s,"change",r)}},[]),n||!!(t!=null&&t.reducedMotion)}function _(){return typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null}function M(t=.25){const n=b.useRef(null),[i,s]=b.useState(()=>typeof IntersectionObserver>"u");return b.useEffect(()=>{if(i||!n.current||typeof IntersectionObserver>"u")return;const r=new IntersectionObserver(o=>{o.some(l=>l.isIntersecting)&&(s(!0),r.disconnect())},{threshold:t});return r.observe(n.current),()=>r.disconnect()},[i,t]),[n,i]}function Q(t,n,i){const[s,r]=b.useState(i?1:0);return b.useEffect(()=>{if(i){r(1);return}if(!t)return;let o=0;const l=performance.now(),d=h=>{const f=Math.min(1,(h-l)/n);r(1-Math.pow(1-f,3)),f<1&&(o=requestAnimationFrame(d))};return o=requestAnimationFrame(d),()=>cancelAnimationFrame(o)},[t,n,i]),s}const a={ink:"#e2e8f0",dim:"#94a3b8",faint:"#334155",red:"#e94560",blue:"#3b82f6",cyan:"#22d3ee",yellow:"#facc15",green:"#34d399",panel:"#0f172a"},E={fontFamily:"inherit",fontWeight:700};function m({x:t,y:n,children:i,color:s=a.dim,size:r=22,anchor:o="middle"}){return e.jsx("text",{x:t,y:n,fill:s,fontSize:r,textAnchor:o,style:E,children:i})}function L({x:t,y:n,r:i=34,irisColor:s=a.blue,look:r=0,children:o,dim:l}){const d=i*1.9,h=`eye-${t}-${n}`;return e.jsxs("g",{opacity:l?.55:1,children:[e.jsx("clipPath",{id:h,children:e.jsx("path",{d:`M${t-d} ${n} Q${t} ${n-i*1.25} ${t+d} ${n} Q${t} ${n+i*1.25} ${t-d} ${n}Z`})}),e.jsx("path",{d:`M${t-d} ${n} Q${t} ${n-i*1.25} ${t+d} ${n} Q${t} ${n+i*1.25} ${t-d} ${n}Z`,fill:"#f8fafc"}),e.jsx("g",{clipPath:`url(#${h})`,children:e.jsxs("g",{transform:`translate(${r} 0)`,children:[e.jsx("circle",{cx:t,cy:n,r:i*.62,fill:s}),e.jsx("circle",{cx:t,cy:n,r:i*.28,fill:"#05050a"}),e.jsx("circle",{cx:t-i*.18,cy:n-i*.2,r:i*.1,fill:"#fff",opacity:.85}),o]})}),e.jsx("path",{d:`M${t-d} ${n} Q${t} ${n-i*1.25} ${t+d} ${n}`,fill:"none",stroke:a.ink,strokeWidth:3,strokeLinecap:"round"})]})}function ce({x:t,y:n,s:i=1}){return e.jsxs("g",{transform:`translate(${t} ${n}) scale(${i})`,fill:"none",stroke:a.dim,strokeWidth:3,strokeLinecap:"round",children:[e.jsx("path",{d:"M0 -38 C-26 -44 -48 -26 -44 -6 C-60 4 -50 34 -26 32 C-16 46 6 44 0 30 Z",fill:"#1e293b"}),e.jsx("path",{d:"M0 -38 C26 -44 48 -26 44 -6 C60 4 50 34 26 32 C16 46 -6 44 0 30 Z",fill:"#1e293b"}),e.jsx("path",{d:"M-30 -12 C-20 -4 -32 8 -20 14 M30 -12 C20 -4 32 8 20 14 M0 -38 V30"})]})}function de({animate:t}){const n={x:230,y:285},i={x:410,y:285};return e.jsxs(e.Fragment,{children:[e.jsx(m,{x:320,y:34,color:a.ink,size:24,children:"Both eyes aim at the same point"}),e.jsxs("g",{children:[[n,i].map((s,r)=>e.jsxs("line",{x1:s.x,y1:s.y-30,x2:320,y2:110,stroke:r?a.cyan:a.red,strokeWidth:3,strokeDasharray:"6 6",children:[t&&e.jsx("animate",{attributeName:"y2",values:"110;190;110",dur:"5s",repeatCount:"indefinite"}),t&&e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;-24",dur:"1s",repeatCount:"indefinite"})]},r)),e.jsxs("g",{children:[e.jsx("circle",{cx:320,cy:110,r:14,fill:a.yellow}),e.jsx("circle",{cx:320,cy:110,r:26,fill:"none",stroke:a.yellow,strokeWidth:2,opacity:.5}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;0 80;0 0",dur:"5s",repeatCount:"indefinite"})]})]}),e.jsx(L,{x:n.x,y:n.y,irisColor:a.red,look:6}),e.jsx(L,{x:i.x,y:i.y,irisColor:a.cyan,look:-6}),e.jsx(m,{x:n.x-20,y:350,children:"Left eye"}),e.jsx(m,{x:i.x+20,y:350,children:"Right eye"}),e.jsx(m,{x:292,y:118,anchor:"end",color:a.yellow,children:"target"})]})}function he({animate:t}){return e.jsxs(e.Fragment,{children:[e.jsx("defs",{children:e.jsx("filter",{id:"amb-blur",children:e.jsx("feGaussianBlur",{stdDeviation:"5"})})}),e.jsx(L,{x:110,y:110,irisColor:a.blue}),e.jsx(L,{x:110,y:260,irisColor:a.blue,dim:!0}),e.jsx(m,{x:110,y:174,children:"Strong eye"}),e.jsx(m,{x:110,y:324,children:"Weaker eye"}),[110,260].map((n,i)=>e.jsxs("g",{children:[e.jsx("rect",{x:210,y:n-42,width:84,height:84,rx:12,fill:a.panel,stroke:a.faint}),e.jsx("text",{x:252,y:n+22,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...E,fontWeight:900},filter:i?"url(#amb-blur)":void 0,children:"E"}),e.jsx("path",{d:`M300 ${n} C360 ${n} 380 185 430 185`,fill:"none",stroke:i?a.faint:a.dim,strokeWidth:3,strokeDasharray:i?"4 8":void 0})]},n)),e.jsx(ce,{x:480,y:185}),e.jsx("rect",{x:546,y:140,width:84,height:84,rx:12,fill:a.panel,stroke:a.green,strokeWidth:2}),e.jsx("text",{x:588,y:207,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...E,fontWeight:900},children:"E"}),e.jsxs("text",{x:588,y:207,textAnchor:"middle",fontSize:64,fill:a.ink,style:{...E,fontWeight:900},filter:"url(#amb-blur)",opacity:.15,children:["E",t&&e.jsx("animate",{attributeName:"opacity",values:"0.35;0;0;0.35",keyTimes:"0;0.35;0.8;1",dur:"4s",repeatCount:"indefinite"})]}),e.jsx(m,{x:634,y:126,anchor:"end",color:a.green,children:"What you see"}),e.jsx(m,{x:520,y:270,size:20,children:"brain tunes out"}),e.jsx(m,{x:520,y:294,size:20,children:"the blurry image"})]})}function ue({animate:t}){return e.jsxs(e.Fragment,{children:[e.jsx(m,{x:320,y:34,color:a.ink,size:24,children:"Each eye sees a different dot"}),e.jsx("rect",{x:150,y:60,width:340,height:110,rx:14,fill:a.panel,stroke:a.faint}),e.jsxs("g",{children:[e.jsx("circle",{cx:300,cy:115,r:22,fill:a.red,opacity:.9}),e.jsx("circle",{cx:340,cy:115,r:22,fill:a.blue,opacity:.9,style:{mixBlendMode:"screen"}}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;-14 0;0 0",dur:"4s",repeatCount:"indefinite"})]}),e.jsx(m,{x:510,y:122,anchor:"start",children:"screen"}),e.jsxs("g",{children:[e.jsx("path",{d:"M170 250 H290 M350 250 H470",stroke:a.ink,strokeWidth:4}),e.jsx("path",{d:"M290 250 Q320 236 350 250",stroke:a.ink,strokeWidth:4,fill:"none"}),e.jsx("rect",{x:180,y:226,width:110,height:56,rx:22,fill:a.red,opacity:.75,stroke:a.ink,strokeWidth:3}),e.jsx("rect",{x:350,y:226,width:110,height:56,rx:22,fill:a.blue,opacity:.75,stroke:a.ink,strokeWidth:3})]}),e.jsx("line",{x1:235,y1:226,x2:330,y2:140,stroke:a.blue,strokeWidth:3,strokeDasharray:"5 6"}),e.jsx("line",{x1:405,y1:226,x2:305,y2:140,stroke:a.red,strokeWidth:3,strokeDasharray:"5 6"}),e.jsx(m,{x:235,y:315,color:a.red,children:"red lens"}),e.jsx(m,{x:235,y:341,color:a.ink,size:20,children:"sees blue"}),e.jsx(m,{x:405,y:315,color:a.blue,children:"blue lens"}),e.jsx(m,{x:405,y:341,color:a.ink,size:20,children:"sees red"})]})}function me(){const i=[],s=[];for(let r=0;r<=120;r++){const o=r/120,l=Math.sin(o*Math.PI*2)*.9,d=2+16*Math.min(1,Math.abs(l-.25)/.9),h=r*7%6/6;i.push((l*18+(h-.5)*d).toFixed(1)),s.push((l*230).toFixed(1))}return{eye:i.join(";"),amp:s.join(";")}}function fe({animate:t}){const n=I.useMemo(me,[]),i=320+.25*230;return e.jsxs(e.Fragment,{children:[e.jsx(m,{x:320,y:34,color:a.ink,size:24,children:"The eyes wobble less in one gaze direction"}),e.jsx(L,{x:320,y:120,r:40,irisColor:a.blue,look:t?0:6,children:t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:n.eye.split(";").map(s=>`${s} 0`).join(";"),dur:"6s",repeatCount:"indefinite",additive:"sum"})}),e.jsx("path",{d:`M90 250 Q${i} 236 550 250`,stroke:"none",fill:"none"}),e.jsx("path",{d:`M90 228 L${i} 246 L550 228 L550 272 L${i} 254 L90 272 Z`,fill:a.blue,opacity:.18}),e.jsx("line",{x1:90,y1:250,x2:550,y2:250,stroke:a.dim,strokeWidth:2}),e.jsx("line",{x1:i,y1:215,x2:i,y2:285,stroke:a.green,strokeWidth:3}),e.jsx(m,{x:i,y:205,color:a.green,children:"null point"}),e.jsx(m,{x:90,y:305,anchor:"start",children:"look left"}),e.jsx(m,{x:550,y:305,anchor:"end",children:"look right"}),e.jsx(m,{x:320,y:343,size:20,children:"wider band = more wobble"}),e.jsx("circle",{cx:320,cy:250,r:9,fill:a.yellow,children:t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:n.amp.split(";").map(s=>`${s} 0`).join(";"),dur:"6s",repeatCount:"indefinite"})})]})}function pe({animate:t}){const n=[140,260,380,500];return e.jsxs(e.Fragment,{children:[e.jsx(m,{x:60,y:64,anchor:"start",color:a.ink,size:24,children:"Saccade: quick jumps, then pause"}),n.map(i=>e.jsx("circle",{cx:i,cy:110,r:8,fill:a.faint},i)),e.jsx("circle",{cx:t?140:380,cy:110,r:14,fill:a.yellow,children:t&&e.jsx("animate",{attributeName:"cx",values:"140;260;380;500;140",dur:"3.2s",calcMode:"discrete",repeatCount:"indefinite"})}),e.jsx("path",{d:"M140 140 H200 V128 M260 140 H320 V128 M380 140 H440 V128",fill:"none",stroke:a.dim,strokeWidth:2}),e.jsx(m,{x:60,y:212,anchor:"start",color:a.ink,size:24,children:"Pursuit: smooth following"}),e.jsx("path",{d:"M140 270 C220 220 300 320 380 270 S500 230 520 255",fill:"none",stroke:a.faint,strokeWidth:6,strokeLinecap:"round"}),e.jsx("circle",{r:14,fill:a.cyan,cx:t?0:380,cy:t?0:270,children:t&&e.jsx("animateMotion",{dur:"4s",repeatCount:"indefinite",path:"M140 270 C220 220 300 320 380 270 S500 230 520 255",keyPoints:"0;1;0",keyTimes:"0;0.5;1",calcMode:"linear"})})]})}function ge({animate:t}){const n=({x:s,c:r})=>e.jsxs("g",{transform:`translate(${s} 0)`,children:[e.jsx("ellipse",{cx:0,cy:165,rx:26,ry:18,fill:r}),e.jsx("circle",{cx:22,cy:150,r:11,fill:r}),e.jsx("path",{d:"M32 150 l12 3 l-12 4z",fill:a.yellow})]}),i=({x:s,c:r})=>e.jsxs("g",{transform:`translate(${s} 0)`,fill:"none",stroke:r,strokeWidth:4,children:[e.jsx("path",{d:"M-45 210 V140 Q0 95 45 140 V210 Z"}),[-25,-5,15,35].map(o=>e.jsx("line",{x1:o-5,y1:120,x2:o-5,y2:210},o))]});return e.jsxs(e.Fragment,{children:[e.jsx(m,{x:110,y:50,color:a.red,children:"left eye"}),e.jsx(m,{x:530,y:50,color:a.cyan,children:"right eye"}),e.jsx(m,{x:320,y:50,color:a.green,children:"together"}),e.jsx(n,{x:100,c:a.red}),e.jsx(i,{x:540,c:a.cyan}),e.jsxs("g",{children:[e.jsxs("g",{children:[e.jsx(n,{x:320,c:a.red}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"-220 0;0 0;0 0;-220 0",keyTimes:"0;0.4;0.8;1",dur:"5s",repeatCount:"indefinite"})]}),e.jsxs("g",{children:[e.jsx(i,{x:320,c:a.cyan}),t&&e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"220 0;0 0;0 0;220 0",keyTimes:"0;0.4;0.8;1",dur:"5s",repeatCount:"indefinite"})]})]}),e.jsx("rect",{x:240,y:95,width:160,height:140,rx:16,fill:"none",stroke:a.green,strokeWidth:2,strokeDasharray:"6 6"}),e.jsx(m,{x:320,y:290,color:a.ink,size:24,children:"One picture: bird in the cage"}),e.jsx(m,{x:320,y:322,size:20,children:"needs both eyes working together"})]})}const N={"two-eyes":{title:"Two eyes converging on one target",Comp:de},amblyopia:{title:"Amblyopia: the brain favours the clear image from the stronger eye",Comp:he},anaglyph:{title:"Red-blue glasses: each lens blocks its own colour, so each eye sees a different dot",Comp:ue},nystagmus:{title:"Nystagmus: the eye wobbles less near the null point",Comp:fe},"saccade-pursuit":{title:"Saccades jump between points; pursuit glides along a path",Comp:pe},fusion:{title:"Fusion: each eye sees half the picture and the brain combines them",Comp:ge}},ye=["callout","stats","steps","compare","timeline","bars","grid","flow","illustration","embed","html"];function q(t){return ye.includes(t)}function xe({info:t,body:n,r:i}){const s=le(t),r=Ae[s.type];return r?e.jsx(r,{b:s,body:n,r:i}):null}const y=["#e94560","#22d3ee","#facc15","#34d399","#a78bfa","#3b82f6"];function S({children:t,delay:n=0,style:i}){const s=T(),[r,o]=M(.15),l=s||o;return e.jsx("div",{ref:r,style:{...i,opacity:l?1:0,transform:l?"none":"translateY(14px)",transition:s?void 0:`opacity 500ms ease ${n}ms, transform 500ms ease ${n}ms`},children:t})}const B={tip:{icon:"💡",label:"Tip",color:"#34d399"},note:{icon:"📝",label:"Note",color:"#7dd3fc"},warning:{icon:"⚠️",label:"Careful",color:"#facc15"},science:{icon:"🔬",label:"The science",color:"#a78bfa"},myth:{icon:"❌",label:"Myth",color:"#e94560"},fact:{icon:"✅",label:"Fact",color:"#34d399"},key:{icon:"🔑",label:"Key idea",color:"#e94560"}};function be({b:t,body:n,r:i}){const s=B[(t.words[0]??"").toLowerCase()],r=s??B.note,o=t.args.title??(s?t.words.slice(1):t.words).join(" ");return e.jsxs(S,{style:{...c.block,...c.callout,borderColor:r.color,background:`${r.color}14`},children:[e.jsxs("div",{style:{...c.calloutHead,color:r.color},children:[e.jsx("span",{"aria-hidden":!0,children:r.icon})," ",o||r.label]}),e.jsx("div",{style:c.calloutBody,children:i.md(n)})]})}function je({text:t,run:n,calm:i}){const s=Z(t),r=Q(n&&!!s,1200,i);if(!s)return e.jsx(e.Fragment,{children:t});const o=(s.value*r).toFixed(s.decimals);return e.jsxs(e.Fragment,{children:[s.prefix,Number(o).toLocaleString(void 0,{minimumFractionDigits:s.decimals,maximumFractionDigits:s.decimals}),s.suffix]})}function we({body:t,r:n}){const i=T(),[s,r]=M(.3),o=C(t);return e.jsx("div",{ref:s,style:{...c.block,...c.statsGrid},children:o.map(([l,d,h],f)=>e.jsxs(S,{delay:f*120,style:{...c.stat,borderTopColor:y[f%y.length]},children:[e.jsx("div",{style:{...c.statValue,color:y[f%y.length]},children:e.jsx(je,{text:l,run:r,calm:i})}),d&&e.jsx("div",{style:c.statLabel,children:n.inline(d)}),h&&e.jsx("div",{style:c.statNote,children:n.inline(h)})]},f))})}function ke({body:t,r:n}){const i=C(t);return e.jsx("ol",{style:{...c.block,...c.steps},children:i.map(([s,r],o)=>e.jsx("li",{style:c.stepItem,children:e.jsxs(S,{delay:o*140,style:c.stepRow,children:[e.jsxs("div",{style:c.stepRail,children:[e.jsx("div",{style:{...c.stepDot,background:y[o%y.length]},children:o+1}),o<i.length-1&&e.jsx("div",{style:c.stepLine})]}),e.jsxs("div",{style:c.stepText,children:[e.jsx("div",{style:c.stepTitle,children:n.inline(s)}),r&&e.jsx("div",{style:c.stepBody,children:n.inline(r)})]})]})},o))})}function ve({b:t,body:n,r:i}){const s=ae(n),r=t.words.map(l=>l.toLowerCase()),o=l=>r[l]==="bad"?"#e94560":r[l]==="good"?"#34d399":y[(l+1)%y.length];return e.jsx("div",{style:{...c.block,...c.compare},children:s.map((l,d)=>e.jsxs(S,{delay:d*150,style:{...c.compareCard,borderColor:o(d)},children:[l.title&&e.jsx("div",{style:{...c.compareTitle,color:o(d)},children:i.inline(l.title)}),e.jsx("div",{style:c.compareBody,children:i.md(l.body)})]},d))})}function Se({body:t,r:n}){const i=C(t);return e.jsx("div",{style:{...c.block,...c.timeline},children:i.map(([s,r,o],l)=>e.jsxs(S,{delay:l*120,style:c.tlItem,children:[e.jsx("div",{style:{...c.tlDot,background:y[l%y.length]}}),e.jsx("div",{style:c.tlWhen,children:n.inline(s)}),r&&e.jsx("div",{style:c.tlTitle,children:n.inline(r)}),o&&e.jsx("div",{style:c.tlText,children:n.inline(o)})]},l))})}function Ce({b:t,body:n,r:i}){const s=T(),[r,o]=M(.3),l=Q(o,1100,s),d=C(n).map(([u,g,p])=>{var j;return{label:u,value:((j=Z(g??""))==null?void 0:j.value)??0,raw:g??"",note:p}}),h=R(t.args.max,Math.max(1,...d.map(u=>u.value)),1e-4,1e12),f=t.args.unit??"";return e.jsxs("figure",{ref:r,style:{...c.block,margin:"0 0 1.6em"},children:[t.args.title&&e.jsx("figcaption",{style:c.blockTitle,children:t.args.title}),e.jsx("div",{role:"list",style:c.bars,children:d.map((u,g)=>e.jsxs("div",{role:"listitem",style:c.barRow,children:[e.jsxs("div",{style:c.barLabel,children:[e.jsx("span",{children:i.inline(u.label)}),e.jsx("span",{style:c.barValue,children:/[^\d.,-]/.test(u.raw)?u.raw:`${u.raw}${f}`})]}),e.jsx("div",{style:c.barTrack,children:e.jsx("div",{style:{...c.barFill,width:`${Math.min(100,u.value/h*100)*l}%`,background:y[g%y.length]}})}),u.note&&e.jsx("div",{style:c.barNote,children:i.inline(u.note)})]},g))}),t.args.source&&e.jsxs("div",{style:c.source,children:["Source: ",i.inline(t.args.source)]})]})}function Te({body:t,r:n}){const i=C(t);return e.jsx("div",{style:{...c.block,...c.grid},children:i.map(([s,r,o],l)=>e.jsxs(S,{delay:l*90,style:c.gridCard,children:[e.jsx("div",{style:c.gridIcon,"aria-hidden":!0,children:s}),e.jsx("div",{style:c.gridTitle,children:n.inline(r??"")}),o&&e.jsx("div",{style:c.gridText,children:n.inline(o)})]},l))})}function $e({body:t,r:n}){const i=C(t);return e.jsx("div",{className:"blog-flow",style:{...c.block,...c.flow},role:"list",children:i.map(([s,r],o)=>e.jsxs(I.Fragment,{children:[e.jsx(S,{delay:o*160,style:{...c.flowNode,borderColor:y[o%y.length]},children:e.jsxs("div",{role:"listitem",children:[e.jsx("div",{style:c.flowTitle,children:n.inline(s)}),r&&e.jsx("div",{style:c.flowText,children:n.inline(r)})]})}),o<i.length-1&&e.jsx("div",{className:"blog-flow-arrow",style:c.flowArrow,"aria-hidden":!0,children:"→"})]},o))})}function Le({b:t,body:n,r:i}){const s=T(),[r,o]=M(.2),l=(t.words[0]??"").toLowerCase(),d=N[l];if(!d)return null;const h=n.trim();return e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[e.jsx("div",{ref:r,style:c.illus,children:e.jsx("svg",{viewBox:"0 0 640 360",role:"img","aria-label":d.title,style:{display:"block",width:"100%",height:"auto"},children:e.jsx(d.Comp,{animate:o&&!s})})}),h&&e.jsx("figcaption",{style:c.caption,children:i.inline(h)})]})}const Me=`<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{color-scheme:dark;--red:#e94560;--cyan:#22d3ee;--yellow:#facc15;--green:#34d399;--blue:#3b82f6;--ink:#e2e8f0;--dim:#94a3b8;--panel:#0f172a;--line:#1e293b}
  html,body{margin:0;background:transparent;color:var(--ink);font:17px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  *{box-sizing:border-box} button{font:inherit;min-height:44px}
  @media (prefers-reduced-motion: reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
</style>`,ze=`<script>(function(){var last=0;function send(){var h=Math.ceil(document.documentElement.getBoundingClientRect().height);if(h!==last){last=h;parent.postMessage({samasightEmbedHeight:h},'*')}}
addEventListener('load',send);new ResizeObserver(send).observe(document.documentElement);setTimeout(send,50)})()<\/script>`;function We(t,n){return`<!doctype html><html><head>${Me}${n?"<style>*,*::before,*::after{animation:none!important;transition:none!important}</style><script>window.SAMASIGHT_CALM=true<\/script>":"<script>window.SAMASIGHT_CALM=false<\/script>"}</head><body>${t}${ze}</body></html>`}function J({html:t,height:n,title:i}){const s=T(),r=b.useRef(null),[o,l]=b.useState(n);return b.useEffect(()=>{const d=h=>{var u,g;if(h.source!==((u=r.current)==null?void 0:u.contentWindow))return;const f=Number((g=h.data)==null?void 0:g.samasightEmbedHeight);Number.isFinite(f)&&f>20&&l(Math.min(4e3,f))};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]),e.jsx("iframe",{ref:r,title:i,sandbox:"allow-scripts",srcDoc:We(t,s),loading:"lazy",style:{...c.frame,height:o}})}function Ee({b:t,body:n}){return e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[e.jsx(J,{html:n,height:R(t.args.height,360,60,4e3),title:t.args.title??"Interactive illustration"}),t.args.caption&&e.jsx("figcaption",{style:c.caption,children:t.args.caption})]})}function Re({b:t,body:n,r:i}){const s=t.words[0]??"",[r,o]=b.useState(void 0);b.useEffect(()=>{let d=!0;if(!i.loadEmbed||!s){o(null);return}return i.loadEmbed(s).then(h=>{d&&o(h)}),()=>{d=!1}},[s,i]);const l=n.trim();return r===null?null:e.jsxs("figure",{style:{...c.block,margin:"0 0 1.6em"},children:[r===void 0?e.jsx("div",{style:{...c.frame,height:R(t.args.height,360,60,4e3)}}):e.jsx(J,{html:r,height:R(t.args.height,360,60,4e3),title:t.args.title??l??"Interactive illustration"}),l&&e.jsx("figcaption",{style:c.caption,children:i.inline(l)})]})}const Ae={callout:be,stats:we,steps:ke,compare:ve,timeline:Se,bars:Ce,grid:Te,flow:$e,illustration:Le,embed:Re,html:Ee},c={block:{margin:"0 0 1.6em"},blockTitle:{margin:"0 0 12px",fontSize:18,fontWeight:800,color:"#f8fafc"},caption:{marginTop:10,fontSize:15,lineHeight:1.5,color:"#94a3b8",textAlign:"center"},source:{marginTop:10,fontSize:14,color:"#94a3b8"},callout:{padding:"14px 18px",borderRadius:12,border:"1px solid",borderLeftWidth:5},calloutHead:{fontSize:15,fontWeight:800,letterSpacing:.5,textTransform:"uppercase",marginBottom:6},calloutBody:{marginBottom:-18},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:12},stat:{padding:"16px 16px 14px",borderRadius:12,background:"#0b1120",border:"1px solid #1e293b",borderTop:"4px solid"},statValue:{fontSize:38,overflowWrap:"anywhere",lineHeight:1.1,fontWeight:900,fontVariantNumeric:"tabular-nums"},statLabel:{marginTop:6,fontSize:16,lineHeight:1.45,color:"#e2e8f0"},statNote:{marginTop:4,fontSize:14,lineHeight:1.4,color:"#94a3b8"},steps:{listStyle:"none",padding:0},stepItem:{margin:0},stepRow:{display:"flex",gap:14},stepRail:{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0},stepDot:{width:36,height:36,borderRadius:999,display:"grid",placeItems:"center",color:"#05050a",fontWeight:900,fontSize:17},stepLine:{width:3,flex:1,minHeight:16,background:"#1e293b",margin:"4px 0"},stepText:{paddingBottom:18,minWidth:0},stepTitle:{fontSize:19,lineHeight:1.4,fontWeight:800,color:"#f8fafc",paddingTop:5},stepBody:{marginTop:4,fontSize:17,lineHeight:1.6,color:"#cbd5e1"},compare:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",gap:12},compareCard:{padding:"14px 16px",borderRadius:12,border:"2px solid",background:"#0b1120"},compareTitle:{fontSize:18,fontWeight:900,marginBottom:8},compareBody:{marginBottom:-18},timeline:{position:"relative",paddingLeft:26,borderLeft:"3px solid #1e293b",marginLeft:8},tlItem:{position:"relative",padding:"0 0 22px"},tlDot:{position:"absolute",left:-37,top:4,width:18,height:18,borderRadius:999,border:"3px solid #05050a"},tlWhen:{fontSize:14,fontWeight:800,letterSpacing:1,textTransform:"uppercase",color:"#94a3b8"},tlTitle:{fontSize:19,fontWeight:800,color:"#f8fafc",marginTop:2},tlText:{fontSize:17,lineHeight:1.6,color:"#cbd5e1",marginTop:2},bars:{display:"grid",gap:14},barRow:{},barLabel:{display:"flex",justifyContent:"space-between",gap:12,fontSize:16,color:"#e2e8f0",marginBottom:6},barValue:{fontWeight:800,fontVariantNumeric:"tabular-nums",flexShrink:0},barTrack:{height:14,borderRadius:999,background:"#1e293b",overflow:"hidden"},barFill:{height:"100%",borderRadius:999},barNote:{marginTop:4,fontSize:14,color:"#94a3b8"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12},gridCard:{padding:16,borderRadius:12,background:"#0b1120",border:"1px solid #1e293b",height:"100%",boxSizing:"border-box"},gridIcon:{fontSize:30,lineHeight:1},gridTitle:{marginTop:10,fontSize:18,fontWeight:800,color:"#f8fafc"},gridText:{marginTop:4,fontSize:16,lineHeight:1.55,color:"#cbd5e1"},flow:{display:"flex",flexWrap:"wrap",alignItems:"stretch",gap:8},flowNode:{flex:"1 1 140px",padding:"12px 14px",borderRadius:12,border:"2px solid",background:"#0b1120",minWidth:0},flowTitle:{fontSize:17,fontWeight:800,color:"#f8fafc"},flowText:{marginTop:4,fontSize:15,lineHeight:1.5,color:"#cbd5e1"},flowArrow:{alignSelf:"center",fontSize:24,color:"#64748b",flex:"0 0 auto"},illus:{borderRadius:14,background:"#0b1120",border:"1px solid #1e293b",padding:8},frame:{display:"block",width:"100%",border:"1px solid #1e293b",borderRadius:14,background:"#0b1120"}},Ie=/^(https?:\/\/|mailto:|#\/|\/|\.{0,2}\/?[a-z0-9_-])/i;function X(t){const n=t.trim();return!n||n.startsWith("//")||/^[a-z][a-z0-9+.-]*:/i.test(n)&&!/^(https?|mailto):/i.test(n)?null:Ie.test(n)?n:null}function Y(t,n){var s;return/^https?:\/\//i.test(t)?X(t):((s=n.resolveImage)==null?void 0:s.call(n,t))??null}const Ne=/(`[^`]+`)|(!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\))|(\[[^\]]+\]\([^)\s]+\))|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*|_[^_\s][^_]*_)/;function v(t,n={},i="i"){const s=[];let r=t,o=0;for(;r.length;){const l=Ne.exec(r);if(!l){s.push(r);break}l.index>0&&s.push(r.slice(0,l.index));const d=l[0],h=`${i}-${o++}`;if(l[1])s.push(e.jsx("code",{style:x.inlineCode,children:d.slice(1,-1)},h));else if(l[2]){const f=/^!\[([^\]]*)\]\(([^)\s]+)/.exec(d),u=Y(f[2],n);s.push(u?e.jsx("img",{src:u,alt:f[1],loading:"lazy",style:x.inlineImg},h):f[1])}else if(l[3]){const f=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(d),u=X(f[2]),g=v(f[1],n,h);if(!u)s.push(e.jsx(I.Fragment,{children:g},h));else{const p=/^https?:\/\//i.test(u);s.push(e.jsx("a",{href:u,style:x.link,...p?{target:"_blank",rel:"noopener noreferrer"}:{},children:g},h))}}else l[4]?s.push(e.jsx("strong",{children:v(d.slice(2,-2),n,h)},h)):s.push(e.jsx("em",{children:v(d.slice(1,-1),n,h)},h));r=r.slice(l.index+d.length)}return s}const W=/^\s*[-*+]\s+(.*)$/,A=/^\s*\d+[.)]\s+(.*)$/,H=/^(#{1,4})\s+(.*?)\s*#*\s*$/,P=/^\s*([-*_])(\s*\1){2,}\s*$/,O=/^\s*!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/;function D(t,n={}){var d;const i=t.replace(/\r\n?/g,`
`).split(`
`),s=[];let r=0,o=0;const l=()=>`b${o++}`;for(;r<i.length;){const h=i[r];if(!h.trim()){r++;continue}if(/^\s*```/.test(h)){const p=h.trim().slice(3).trim(),j=[];for(r++;r<i.length&&!/^\s*```\s*$/.test(i[r]);)j.push(i[r++]);r++;const k=((d=p.split(/\s+/)[0])==null?void 0:d.toLowerCase())??"";q(k)?s.push(e.jsx(xe,{info:p,body:j.join(`
`),r:{md:$=>D($,n),inline:$=>v($,n),loadEmbed:n.loadEmbed}},l())):s.push(e.jsx("pre",{style:x.pre,children:e.jsx("code",{children:j.join(`
`)})},l()));continue}const f=H.exec(h);if(f){const j=`h${Math.max(2,f[1].length)}`;s.push(e.jsx(j,{style:x[j],children:v(f[2],n)},l())),r++;continue}if(P.test(h)){s.push(e.jsx("hr",{style:x.hr},l())),r++;continue}const u=O.exec(h);if(u){const p=Y(u[2],n);p&&s.push(e.jsxs("figure",{style:x.figure,children:[e.jsx("img",{src:p,alt:u[1],loading:"lazy",style:x.figureImg}),u[3]&&e.jsx("figcaption",{style:x.caption,children:u[3]})]},l())),r++;continue}if(/^\s*>/.test(h)){const p=[];for(;r<i.length&&/^\s*>/.test(i[r]);)p.push(i[r++].replace(/^\s*>\s?/,""));s.push(e.jsx("blockquote",{style:x.quote,children:D(p.join(`
`),n)},l()));continue}if(W.test(h)||A.test(h)){const p=!W.test(h),j=p?A:W,k=[];for(;r<i.length&&i[r].trim();){const z=j.exec(i[r]);if(z)k.push(z[1]);else if(/^\s{2,}\S/.test(i[r])&&k.length)k[k.length-1]+=" "+i[r].trim();else break;r++}const $=p?"ol":"ul";s.push(e.jsx($,{style:x.list,children:k.map((z,F)=>e.jsx("li",{style:x.li,children:v(z,n,`l${F}`)},F))},l()));continue}const g=[];for(;r<i.length&&i[r].trim()&&!H.test(i[r])&&!/^\s*```/.test(i[r])&&!/^\s*>/.test(i[r])&&!W.test(i[r])&&!A.test(i[r])&&!P.test(i[r])&&!O.test(i[r]);)g.push(i[r++].trim());s.push(e.jsx("p",{style:x.p,children:v(g.join(" "),n)},l()))}return s}function Fe(t){return t.replace(/```([^\n]*)\n([\s\S]*?)```/g,(n,i,s)=>{var r;return q(((r=i.trim().split(/\s+/)[0])==null?void 0:r.toLowerCase())??"")?` ${s.replace(/\|/g," ")} `:" "}).replace(/[#>*_`[\]()!-]/g," ").split(/\s+/).filter(Boolean).length}const x={p:{margin:"0 0 1.1em",fontSize:19,lineHeight:1.7,color:"#e2e8f0"},h2:{margin:"1.6em 0 0.6em",fontSize:26,lineHeight:1.3,fontWeight:800,color:"#f8fafc"},h3:{margin:"1.4em 0 0.5em",fontSize:22,lineHeight:1.35,fontWeight:800,color:"#f8fafc"},h4:{margin:"1.2em 0 0.4em",fontSize:19,lineHeight:1.4,fontWeight:800,color:"#f8fafc"},list:{margin:"0 0 1.1em",paddingLeft:"1.4em",fontSize:19,lineHeight:1.7,color:"#e2e8f0"},li:{margin:"0 0 0.35em"},quote:{margin:"0 0 1.1em",padding:"4px 0 4px 18px",borderLeft:"4px solid #e94560",color:"#cbd5e1"},pre:{margin:"0 0 1.1em",padding:16,borderRadius:10,background:"#0f172a",border:"1px solid #1e293b",overflowX:"auto",fontSize:15,lineHeight:1.5,color:"#e2e8f0"},inlineCode:{padding:"1px 6px",borderRadius:6,background:"#1e293b",fontSize:"0.9em"},link:{color:"#7dd3fc",textDecoration:"underline",textUnderlineOffset:3},hr:{margin:"2em 0",border:0,borderTop:"1px solid #334155"},figure:{margin:"0 0 1.4em"},figureImg:{display:"block",width:"100%",height:"auto",borderRadius:12,background:"#0f172a"},inlineImg:{maxWidth:"100%",height:"auto",verticalAlign:"middle"},caption:{marginTop:8,fontSize:15,lineHeight:1.5,color:"#94a3b8",textAlign:"center"}};function _e(t){const n=t.replace(/^﻿/,"").replace(/\r\n?/g,`
`),i=/^---\n([\s\S]*?)\n---\n?/.exec(n);if(!i)return{meta:{},body:n};const s={};for(const r of i[1].split(`
`)){const o=/^([A-Za-z][\w-]*)\s*:\s*(.*)$/.exec(r.trim());if(!o)continue;const l=o[1].toLowerCase();let d=o[2].trim();/^\[.*\]$/.test(d)?s[l]=d.slice(1,-1).split(",").map(h=>V(h.trim())).filter(Boolean):/^(true|false)$/i.test(d)?s[l]=d.toLowerCase()==="true":(d=V(d),s[l]=d)}return{meta:s,body:n.slice(i[0].length)}}function V(t){return/^(['"]).*\1$/.test(t)?t.slice(1,-1):t}const w=t=>typeof t=="string"?t:"",G=t=>Array.isArray(t)?t:w(t)?w(t).split(",").map(n=>n.trim()).filter(Boolean):[];function Be(t){return(t.split("/").pop()??t).replace(/\.md$/i,"").toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function He(t,n,i=()=>null){const{meta:s,body:r}=_e(n),o=Be(t),l=G(s.tags),d=/^\d{4}-\d{2}-\d{2}/.test(w(s.date))?w(s.date).slice(0,10):"",h=w(s.cover)?/^https?:\/\//i.test(w(s.cover))?w(s.cover):i(w(s.cover)):null;return{slug:o,title:w(s.title)||o.replace(/-/g," "),date:d,summary:w(s.summary),tags:l,cover:h,draft:s.draft===!0,unlisted:s.unlisted===!0,featured:s.featured===!0,illustration:w(s.illustration).toLowerCase()||null,games:G(s.games),body:r,minutes:Math.max(1,Math.round(Fe(r)/200))}}function Pe(t){return[...t].sort((n,i)=>(i.date||"0").localeCompare(n.date||"0")||n.slug.localeCompare(i.slug))}function Oe(t){const n=new Map;for(const[i,s]of Object.entries(t))n.set((i.split("/").pop()??"").toLowerCase(),s);return i=>n.get((i.split(/[?#]/)[0].split("/").pop()??"").toLowerCase())??null}const De=Object.assign({"../../content/blog/_template.md":se,"../../content/blog/amblyopia-is-a-brain-thing.md":re,"../../content/blog/visual-toolkit.md":oe}),Ve=Object.assign({}),Ge=Oe(Ve),U=Object.assign({"../../content/blog/embeds/patching-demo.html":()=>ie(()=>import("./patching-demo-DDUiJP4U.js"),[]).then(t=>t.default)});async function Je(t){var s;const n=(s=t.split("/").pop())==null?void 0:s.toLowerCase(),i=Object.keys(U).find(r=>{var o;return((o=r.split("/").pop())==null?void 0:o.toLowerCase())===n});if(!i)return null;try{return await U[i]()}catch{return null}}const Ue=ne==="dev",K=Pe(Object.entries(De).filter(([t])=>!(t.split("/").pop()??"").startsWith("_")).map(([t,n])=>He(t,n,Ge)).filter(t=>Ue||!t.draft)),ee=Ze(K.filter(t=>!t.unlisted)),Xe=ee.find(t=>t.featured);function Ze(t){return[...t.filter(n=>n.featured),...t.filter(n=>!n.featured)]}function Ye(t,n=ee,i=3){const s=n.filter(o=>o.slug!==t.slug),r=o=>o.tags.filter(l=>t.tags.includes(l)).length;return[...s].sort((o,l)=>r(l)-r(o)).slice(0,i)}function Ke(t){return t?K.find(n=>n.slug===t.toLowerCase()):void 0}function et(t){if(!t)return"";const[n,i,s]=t.split("-").map(Number);return`${s} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i-1]??""} ${n}`}function tt({post:t,still:n=!1,style:i}){const s=T(),[r,o]=M(.2),l=t.illustration?N[t.illustration]:void 0;return t.cover?e.jsx("img",{src:t.cover,alt:"",loading:"lazy",style:{display:"block",width:"100%",aspectRatio:"16 / 9",objectFit:"cover",background:"#0f172a",...i}}):l?e.jsx("div",{ref:r,style:{background:"#0b1120",...i},children:e.jsx("svg",{viewBox:"0 0 640 360","aria-hidden":!0,focusable:"false",style:{display:"block",width:"100%",height:"auto"},children:e.jsx(l.Comp,{animate:!n&&o&&!s})})}):null}function nt(t){return!!t.cover||!!(t.illustration&&N[t.illustration])}export{Xe as F,ee as L,tt as P,et as a,D as b,Ge as c,Ke as f,nt as h,Je as l,Ye as r};
