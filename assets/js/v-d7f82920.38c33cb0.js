"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10519],{31175:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-d7f82920",path:"/devices/FK_V02.html",title:"FrankEver FK_V02 control via MQTT",lang:"en-US",frontmatter:{title:"FrankEver FK_V02 control via MQTT",description:"Integrate your FrankEver FK_V02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-05-01T14:47:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Threshold (numeric)",slug:"threshold-numeric",children:[]},{level:3,title:"Timer (numeric)",slug:"timer-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/FK_V02.md",git:{updatedTime:1638627611e3}}},93224:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const d=(0,i(66252).uE)('<h1 id="frankever-fk-v02" tabindex="-1"><a class="header-anchor" href="#frankever-fk-v02" aria-hidden="true">#</a> FrankEver FK_V02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>FK_V02</td></tr><tr><td>Vendor</td><td>FrankEver</td></tr><tr><td>Description</td><td>Zigbee smart water valve</td></tr><tr><td>Exposes</td><td>switch (state), threshold, timer, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/FK_V02.jpg" alt="FrankEver FK_V02"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="threshold-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-numeric" aria-hidden="true">#</a> Threshold (numeric)</h3><p>Valve open percentage (multiple of 10). Value can be found in the published state on the <code>threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="timer-numeric" tabindex="-1"><a class="header-anchor" href="#timer-numeric" aria-hidden="true">#</a> Timer (numeric)</h3><p>Countdown timer in minutes. Value can be found in the published state on the <code>timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>minutes</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),o={},a=(0,i(83744).Z)(o,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);