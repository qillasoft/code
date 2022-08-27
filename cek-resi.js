let d01 = document.getElementById('cp_widget_free');
d01.insertAdjacentHTML('afterend', '<style>.widgetMainCP{font:normal 12px arial;color:#404040;min-width:270px;background:#fff;margin:0 auto 25px;padding:10px 15px 7px;overflow:hidden;border-radius:2px;box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);text-align:left;}.widgetMainCP .clear{clear:both;position:static !important;}.widgetMainCP .tabs{padding:0!important;margin:0!important;border-bottom:1px solid #dfdfdf;background:none;}.widgetMainCP .tabs .tab-link{float:left;padding:10px 0;cursor:pointer;margin:0 0 -1px;text-transform:uppercase;font-size:10px;font-weight:700;color:#888;width:50%;text-align:center}.widgetMainCP .tabs .tab-link.current{border-bottom:2px solid #f96d01;color:#f96d01}.widgetMainCP .tabs-content .top{background:#fff;margin:15px 0 0;position:relative}.widgetMainCP .tabs-content .tab-content{display:none}.widgetMainCP .tabs-content .tab-content.current{display:block}.widgetMainCP .tabs-content .tab-content .column{float:left}.widgetMainCP .tabs-content .tab-content .column input[type="text"],.widgetMainCP .tabs-content .tab-content .column input[type="number"],.widgetMainCP .tabs-content .tab-content .column button,.widgetMainCP .tabs-content .tab-content .column select,.widgetMainCP .tabs-content .column.filter .wrapFilter{width:100%;border:none;padding:0 10px !important;margin:0 !important;line-height:48px;height:48px;outline:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;}.widgetMainCP .tabs-content .tab-content .column input[type="number"]{width:calc(100% - 10px)}.widgetMainCP .tabs-content .tab-content .column input::-webkit-outer-spin-button,.widgetMainCP .tabs-content .tab-content .column input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.widgetMainCP .tabs-content .tab-content .column input[type=number]{-moz-appearance:textfield}.widgetMainCP .tabs-content .tab-content .column select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPScjOTk5OTk5Jz48cG9seWdvbiBwb2ludHM9JzAsMCAxMDAsMCA1MCw1MCcvPjwvc3ZnPg==") no-repeat;background-size:12px;background-position:calc(100% - 8px) 22px;background-repeat:no-repeat;background-color:#fff}.widgetMainCP .tabs-content #resi .column.nomor{border-right:1px solid #e9e9e9}.widgetMainCP .tabs-content #ongkir .column.asal,.widgetMainCP .tabs-content #ongkir .column.tujuan{border-right:1px solid #e9e9e9}.widgetMainCP .tabs-content #ongkir .column.berat{position:relative}.widgetMainCP .tabs-content #ongkir .column.berat input{padding-right:50px}.widgetMainCP .tabs-content #ongkir .column.filter{position:relative}.widgetMainCP .tabs-content #ongkir .column.berat span{position:absolute;right:5px;top:5px;bottom:5px;padding:0 10px;line-height:38px;color:#999;font-size:11px}.widgetMainCP .tabs-content .column.filter .wrapFilter .titleFilter{background:#f2f2f2;width:100%;right:0;top:0;bottom:0;text-transform:uppercase;padding:5px;text-indent:30px;color:#999;line-height:38px;position:absolute;font-size:10px;font-weight:700;cursor:pointer;}.widgetMainCP .tabs-content .column.filter .wrapFilter .titleFilter span{width:22px;height:22px;background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDUxMiA1MTInPjx0aXRsZT5pb25pY29ucy12NS1pPC90aXRsZT48bGluZSB4MT0nMzY4JyB5MT0nMTI4JyB4Mj0nNDQ4JyB5Mj0nMTI4JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojOTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCcvPjxsaW5lIHgxPSc2NCcgeTE9JzEyOCcgeDI9JzMwNCcgeTI9JzEyOCcgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6Izk5OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgnLz48bGluZSB4MT0nMzY4JyB5MT0nMzg0JyB4Mj0nNDQ4JyB5Mj0nMzg0JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojOTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCcvPjxsaW5lIHgxPSc2NCcgeTE9JzM4NCcgeDI9JzMwNCcgeTI9JzM4NCcgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6Izk5OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgnLz48bGluZSB4MT0nMjA4JyB5MT0nMjU2JyB4Mj0nNDQ4JyB5Mj0nMjU2JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojOTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCcvPjxsaW5lIHgxPSc2NCcgeTE9JzI1NicgeDI9JzE0NCcgeTI9JzI1Nicgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6Izk5OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgnLz48Y2lyY2xlIGN4PSczMzYnIGN5PScxMjgnIHI9JzMyJyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTojOTk5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCcvPjxjaXJjbGUgY3g9JzE3NicgY3k9JzI1Nicgcj0nMzInIHN0eWxlPSdmaWxsOm5vbmU7c3Ryb2tlOiM5OTk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4Jy8+PGNpcmNsZSBjeD0nMzM2JyBjeT0nMzg0JyByPSczMicgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6Izk5OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgnLz48L3N2Zz4=") no-repeat 0 0;display:inline-block;position:absolute;left:8px;top:14px}.widgetMainCP.flexdatalist-results{position:absolute;top:0;left:0;border:none!important;background:#fff;z-index:100000;max-height:300px;overflow-y:auto;box-shadow:0 4px 5px rgba(0,0,0,0.15);color:#333;list-style:none;margin:0;padding:0;font:normal 12px arial}.widgetMainCP.flexdatalist-results li{border-bottom:1px solid #f2f2f2;padding:8px 15px;font-size:14px;line-height:20px;text-align:left}.widgetMainCP.flexdatalist-results li span.highlight{font-weight:700;color:#f96d01}.widgetMainCP.flexdatalist-results li.active{background:#dfdfdf;cursor:pointer}.widgetMainCP.flexdatalist-results li.no-results{color:#888}.widgetMainCP.flexdatalist-results .item.item-type,.widgetMainCP.flexdatalist-results .item.item-city{color:#999;display:block;}.widgetMainCP .showFilterWrap{position:absolute;right:0;top:63px;display:none}.widgetMainCP .showFilter{background:#fff;padding:0!important;margin:0!important;box-shadow:none!important;display:flex;flex-wrap:wrap}.widgetMainCP .listCheckbox{position:relative;font-size:12px;width:50%;margin:5px 0}.widgetMainCP .listCheckbox label{cursor:pointer;vertical-align:top;line-height:26px;color:#777;text-transform:uppercase;}.widgetMainCP .listCheckbox input::-ms-check{-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity:0}.widgetMainCP .listCheckbox input.apple-switch{position:relative;-webkit-appearance:none;outline:none;width:35px;height:20px;background-color:#fff;border:1px solid #dfdfdf;border-radius:35px;box-shadow:inset -15px 0 0 0 #fff;cursor:pointer;transition:all .1s ease-in-out}.widgetMainCP .listCheckbox input.apple-switch:after{content:"";position:absolute;top:1px;left:1px;background:transparent;width:16px;height:16px;border-radius:50%;box-shadow:1px 2px 3px rgba(0,0,0,0.2);transition:.2s cubic-bezier(0,1.1,1,1.1)}.widgetMainCP .listCheckbox input.apple-switch:checked{box-shadow:inset 15px 0 0 0 #f96d01;border-color:#f96d01;transition:.2s cubic-bezier(0,1.1,1,1.1)}.widgetMainCP .listCheckbox input.apple-switch:checked:after{left:10px;box-shadow:-1px 2px 1.5px rgba(0,0,0,0.05);transition:.2s cubic-bezier(0,1.1,1,1.1)}.widgetMainCP .tabs-content #ongkir .column.filter,.showFilterWrap{width:100%}.widgetMainCP .showFilter{border-radius:2px}.widgetMainCP .showFilterWrap{margin:0 0 15px;position:static;right:auto;top:auto}.widgetMainCP .title .right,.widgetMainCP .title .left,.widgetMainCP .tabs-content .tab-content .column{float:none;display:block}.widgetMainCP .title .left{margin:0 0 15px}.widgetMainCP .tabs-content #resi .column.nomor,.widgetMainCP .tabs-content #resi .column.kurir,.widgetMainCP .tabs-content #resi .column.action,.widgetMainCP .tabs-content #ongkir .column.action,.widgetMainCP .tabs-content #ongkir .column.asal,.widgetMainCP .tabs-content #ongkir .column.tujuan,.widgetMainCP .tabs-content #ongkir .column.berat,.widgetMainCP .tabs-content #ongkir .column.berat{width:100%;display:block;margin:0 0 10px;border:none;box-shadow:1px 2px 10px rgba(0,0,0,.1)}.widgetMainCP .tabs-content #resi .column.action, .widgetMainCP .tabs-content #ongkir .column.action{box-shadow:none}.widgetMainCP .tabs-content .tab-content .column input[type="text"],.widgetMainCP .tabs-content .tab-content .column input[type="number"],.widgetMainCP .tabs-content .tab-content .column select{border-radius:2px;overflow:hidden;border:1px solid transparent}.widgetMainCP .tabs-content .tab-content .column input[type="number"]{width:100%}.widgetMainCP .tabs-content .tab-content .column button{background:#1ba0e2 url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+") no-repeat center;margin:0 0 0 1px;color:#fff;text-transform:uppercase;font-size:12px;padding:0;text-align:center;border-radius:2px;overflow:hidden;border:none;box-shadow:1px 2px 10px rgba(0,0,0,.1);cursor:pointer;}.widgetMainCP .tabs-content .tab-content .column button:hover{background-color:#328ebc}.widgetMainCP .tabs-content .column.filter .wrapFilter .titleFilter{background:none;bottom:auto}.widgetMainCP .tabs-content .column.filter .wrapFilter .titleFilter span{top:12px}.widgetMainCP .tabs-content .column.filter .wrapFilter{margin:0 0 5px}.widgetMainCP .tabs-content .tab-content .listSwitchType{margin:5px 0 15px;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch{float:left;width:33.3333%;position:relative;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch label{display:inline-block;cursor: pointer;padding:4px 0;color:#ccc;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch label span{height:8px;margin:0 0 0 5px;width:8px;border-radius:50%;background:#1ba0e2;display:none;animation: blinking 1s infinite;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch input{display:none;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch input:checked + label{font-weight:bold;color:#666;}.widgetMainCP .tabs-content .tab-content .listSwitchType .listSwitch input:checked + label span{display:inline-block;}@keyframes blinking{ 0% { background: #1ba0e2;} 50% { background: transparent;}}</style><div class="widgetMainCP"><div class="tabs"><div class="resiTab tab-link current" data-tab="resi">Cek Resi</div><div class="ongkirTab tab-link" data-tab="ongkir">Cek Ongkir</div><div class="clear"></div></div><div class="tabs-content"><div id="resi" class="tab-content current"><div class="top"><div class="column nomor"><input type="text" id="nomor" class="normalShadow" name="nomor" placeholder="Nomor resi" /></div><div class="column kurir"><select id="kurir" name="kurir" class="normalShadow"><option selected disabled value="">Ekspedisi</option></select></div><div class="column action"><button></button></div><div class="clear"></div></div></div><div id="ongkir" class="tab-content"><div class="top"><div class="listSwitchType"><div class="listSwitch"><input name="typeOrigDes" type="radio" id="kecamatan" value="kecamatan" checked/><label for="kecamatan">Kecamatan<span></span></label></div><div class="listSwitch"><input name="typeOrigDes" id="kota" value="kota" type="radio" /><label for="kota">Kota/Kab.<span></span></label></div><div class="listSwitch"><input name="typeOrigDes" id="manca" value="manca" type="radio" /><label for="manca">Manca<span></span></label></div><div class="clear"></div></div><div class="column asal"><input type="text" placeholder="Asal Pengiriman" class="flexdatalistOrigin normalShadow" id="origin" name="origin" data-selection-required="true" data-min-length="2" /></div><div class="column tujuan"><input type="text" placeholder="Tujuan Pengiriman" class="flexdatalistDestination normalShadow" id="destination" name="destination" data-selection-required="true" data-min-length="2"/></div><div class="column berat"><input type="number" id="weightDomestik" class="normalShadow" name="weight" placeholder="Berat" /><span>/Kg</span></div><div class="column filter"><div class="wrapFilter"><div class="titleFilter"><span></span>Ekspedisi</div></div><div class="showFilterWrap"><div class="showFilter"></div></div></div><div class="column action"><button></button></div><div class="clear"></div></div></div></div></div>');
let script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/qillasoft/code/cek-resi.min.js';
script.async = true;
document.body.appendChild(script);