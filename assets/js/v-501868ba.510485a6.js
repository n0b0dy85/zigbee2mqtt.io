"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2118],{4786:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-501868ba",path:"/devices/ZNCJMB14LM.html",title:"Xiaomi ZNCJMB14LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNCJMB14LM control via MQTT",description:"Integrate your Xiaomi ZNCJMB14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-05-11T20:10:12.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (center endpoint)",slug:"switch-center-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Standby_enabled (binary)",slug:"standby-enabled-binary",children:[]},{level:3,title:"Theme (enum)",slug:"theme-enum",children:[]},{level:3,title:"Beep_volume (enum)",slug:"beep-volume-enum",children:[]},{level:3,title:"Lcd_brightness (numeric)",slug:"lcd-brightness-numeric",children:[]},{level:3,title:"Language (enum)",slug:"language-enum",children:[]},{level:3,title:"Screen_saver_style (enum)",slug:"screen-saver-style-enum",children:[]},{level:3,title:"Standby_time (numeric)",slug:"standby-time-numeric",children:[]},{level:3,title:"Font_size (enum)",slug:"font-size-enum",children:[]},{level:3,title:"Lcd_auto_brightness_enabled (binary)",slug:"lcd-auto-brightness-enabled-binary",children:[]},{level:3,title:"Homepage (enum)",slug:"homepage-enum",children:[]},{level:3,title:"Screen_saver_enabled (binary)",slug:"screen-saver-enabled-binary",children:[]},{level:3,title:"Standby_lcd_brightness (numeric)",slug:"standby-lcd-brightness-numeric",children:[]},{level:3,title:"Available_switches (enum)",slug:"available-switches-enum",children:[]},{level:3,title:"Switch_1_text_icon (composite)",slug:"switch-1-text-icon-composite",children:[]},{level:3,title:"Switch_2_text_icon (composite)",slug:"switch-2-text-icon-composite",children:[]},{level:3,title:"Switch_3_text_icon (composite)",slug:"switch-3-text-icon-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNCJMB14LM.md",git:{updatedTime:1638627611e3}}},70690:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="xiaomi-zncjmb14lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-zncjmb14lm" aria-hidden="true">#</a> Xiaomi ZNCJMB14LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNCJMB14LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara S1 smart touch panel</td></tr><tr><td>Exposes</td><td>switch (state), standby_enabled, theme, beep_volume, lcd_brightness, language, screen_saver_style, standby_time, font_size, lcd_auto_brightness_enabled, homepage, screen_saver_enabled, standby_lcd_brightness, available_switches, switch_1_text_icon, switch_2_text_icon, switch_3_text_icon, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNCJMB14LM.jpg" alt="Xiaomi ZNCJMB14LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>On initial boot, the device will display a message &quot;Waiting for accessing the network&quot; permit join and the device will be added.</p><p>If the device is already part of a network, swipe down from the top of the screen to access the Settings panel (password may be required), navigate to &quot;Advanced&quot;, navigate to &quot;Access New Gateway&quot; and confirm with &quot;Ok&quot;. Once confirmed, proceed as per initial boot.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="standby-enabled-binary" tabindex="-1"><a class="header-anchor" href="#standby-enabled-binary" aria-hidden="true">#</a> Standby_enabled (binary)</h3><p>Enable standby. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> standby_enabled is ON, if <code>false</code> OFF.</p><h3 id="theme-enum" tabindex="-1"><a class="header-anchor" href="#theme-enum" aria-hidden="true">#</a> Theme (enum)</h3><p>Display theme. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;theme&quot;: NEW_VALUE}</code>. The possible values are: <code>classic</code>, <code>concise</code>.</p><h3 id="beep-volume-enum" tabindex="-1"><a class="header-anchor" href="#beep-volume-enum" aria-hidden="true">#</a> Beep_volume (enum)</h3><p>Beep volume. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;beep_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>mute</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="lcd-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#lcd-brightness-numeric" aria-hidden="true">#</a> Lcd_brightness (numeric)</h3><p>LCD brightness (will not persist if auto-brightness is enabled). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lcd_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="language-enum" tabindex="-1"><a class="header-anchor" href="#language-enum" aria-hidden="true">#</a> Language (enum)</h3><p>Interface language. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;language&quot;: NEW_VALUE}</code>. The possible values are: <code>chinese</code>, <code>english</code>.</p><h3 id="screen-saver-style-enum" tabindex="-1"><a class="header-anchor" href="#screen-saver-style-enum" aria-hidden="true">#</a> Screen_saver_style (enum)</h3><p>Screen saver style. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_saver_style&quot;: NEW_VALUE}</code>. The possible values are: <code>classic</code>, <code>analog clock</code>.</p><h3 id="standby-time-numeric" tabindex="-1"><a class="header-anchor" href="#standby-time-numeric" aria-hidden="true">#</a> Standby_time (numeric)</h3><p>Display standby time. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>. The unit of this value is <code>s</code>.</p><h3 id="font-size-enum" tabindex="-1"><a class="header-anchor" href="#font-size-enum" aria-hidden="true">#</a> Font_size (enum)</h3><p>Display font size. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;font_size&quot;: NEW_VALUE}</code>. The possible values are: <code>small</code>, <code>medium</code>, <code>large</code>.</p><h3 id="lcd-auto-brightness-enabled-binary" tabindex="-1"><a class="header-anchor" href="#lcd-auto-brightness-enabled-binary" aria-hidden="true">#</a> Lcd_auto_brightness_enabled (binary)</h3><p>Enable LCD auto brightness. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lcd_auto_brightness_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lcd_auto_brightness_enabled is ON, if <code>false</code> OFF.</p><h3 id="homepage-enum" tabindex="-1"><a class="header-anchor" href="#homepage-enum" aria-hidden="true">#</a> Homepage (enum)</h3><p>Default display homepage. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;homepage&quot;: NEW_VALUE}</code>. The possible values are: <code>scene</code>, <code>feel</code>, <code>thermostat</code>, <code>switch</code>.</p><h3 id="screen-saver-enabled-binary" tabindex="-1"><a class="header-anchor" href="#screen-saver-enabled-binary" aria-hidden="true">#</a> Screen_saver_enabled (binary)</h3><p>Enable screen saver. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_saver_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> screen_saver_enabled is ON, if <code>false</code> OFF.</p><h3 id="standby-lcd-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#standby-lcd-brightness-numeric" aria-hidden="true">#</a> Standby_lcd_brightness (numeric)</h3><p>Standby LCD brightness. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_lcd_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="available-switches-enum" tabindex="-1"><a class="header-anchor" href="#available-switches-enum" aria-hidden="true">#</a> Available_switches (enum)</h3><p>Control which switches are available in the switches screen (none disables switches screen). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;available_switches&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>1 and 2</code>, <code>1 and 3</code>, <code>2 and 3</code>, <code>all</code>.</p><h3 id="switch-1-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-1-text-icon-composite" aria-hidden="true">#</a> Switch_1_text_icon (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_1_text_icon&quot;: {&quot;switch_1_icon&quot;: VALUE, &quot;switch_1_text&quot;: VALUE}}</code></p><ul><li><code>switch_1_icon</code> (enum): Icon. Allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_1_text</code> (text): Text.</li></ul><h3 id="switch-2-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-2-text-icon-composite" aria-hidden="true">#</a> Switch_2_text_icon (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_2_text_icon&quot;: {&quot;switch_2_icon&quot;: VALUE, &quot;switch_2_text&quot;: VALUE}}</code></p><ul><li><code>switch_2_icon</code> (enum): Icon. Allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_2_text</code> (text): Text.</li></ul><h3 id="switch-3-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-3-text-icon-composite" aria-hidden="true">#</a> Switch_3_text_icon (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_3_text_icon&quot;: {&quot;switch_3_icon&quot;: VALUE, &quot;switch_3_text&quot;: VALUE}}</code></p><ul><li><code>switch_3_icon</code> (enum): Icon. Allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_3_text</code> (text): Text.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',50),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);