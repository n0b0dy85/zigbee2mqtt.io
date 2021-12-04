"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67844],{19902:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-a4d66a36",path:"/devices/MEG5113-0300_MEG5165-0000.html",title:"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT",lang:"en-US",frontmatter:{title:"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT",description:"Integrate your Schneider Electric MEG5113-0300/MEG5165-0000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-09-13T15:34:31.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Control",slug:"control",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MEG5113-0300_MEG5165-0000.md",git:{updatedTime:1638627611e3}}},66213:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var i=o(66252);const r=(0,i.uE)('<h1 id="schneider-electric-meg5113-0300-meg5165-0000" tabindex="-1"><a class="header-anchor" href="#schneider-electric-meg5113-0300-meg5165-0000" aria-hidden="true">#</a> Schneider Electric MEG5113-0300/MEG5165-0000</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MEG5113-0300/MEG5165-0000</td></tr><tr><td>Vendor</td><td>Schneider Electric</td></tr><tr><td>Description</td><td>Merten PlusLink Shutter insert with Merten Wiser System M Push Button</td></tr><tr><td>Exposes</td><td>cover (state, position), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MEG5113-0300-MEG5165-0000.jpg" alt="Schneider Electric MEG5113-0300/MEG5165-0000"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To get the device into pairing mode, press the up button 3 times briefly and then hold it for a long time (almost 20s). After about 10s the LED starts blinking slowly, continue to hold until it starts blinking rapidly. Now you can release it. Pairing will take a while to complete. The LED will blink and change color during this process.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control" aria-hidden="true">#</a> Control</h3><p>The shutter control uses a simple timer to control the duration to open/close the shutter. Unfortunately the Zigbee command to set the timer is not known yet. Even if you set the timer via Bluetooth, it will be reset to the default 2 minutes every time you bring it back to Zigbee mode. The consequence is, that if your shutter is faster than 2 minutes, the position information will not match with the shutter position (since the transition from 0% to 100% takes 120s). Example: If your shutter motor needs 20 seconds to move from open to closed, it will already be closed at 1/6 of the time, i.e. at position 85. It will still take 120s for the position information to go from 100 down to 0.</p><p>If you use a shutter motor with positional switches, that stops at the Open or closed position, this will not be an issue. If you rely on the control to shut of the motor, the current implementation will keep the motor pulling until the timer has elapsed, that might not be a good idea. If your shutter motor needs more than 2 minutes, I suppose it will stop before reaching the final position.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',9),n=(0,i.Uk)("How to use device type specific configuration"),a=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),s={},d=(0,o(83744).Z)(s,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[n])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);