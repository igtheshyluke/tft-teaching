var arrowl=document.getElementById("left");
var arrowr=document.getElementById("right");
var hl=document.getElementsByClassName("it");
arrowl.addEventListener("click",sl,false);
arrowr.addEventListener("click",sr,false);
var items=document.getElementsByTagName("p");
var hls=["https://app.mobalytics.gg/tft/comps-guide/icy-rogue-2ST7ipaAtopFAGD83AgpWh3cokS",
"https://app.mobalytics.gg/tft/comps-guide/vastayans-2RALIiB0HKrdpwYB44tLO7v4vr0",
"https://app.mobalytics.gg/tft/comps-guide/baron-and-friends-2QiBd2oRynU92urm3y8JSUhbitD",
"https://app.mobalytics.gg/tft/comps-guide/icy-deadeyes-2QiAZoiRvOxnNFV1LHr3YJE98SU",
"https://app.mobalytics.gg/tft/comps-guide/shurimas-nomads-2QnwVx10dHzfx0vpuqSuNU9Oc5m",
"https://app.mobalytics.gg/tft/comps-guide/just-slaying-2QnzsREGLu2EXjF9DmoGgE5C93O",
"https://app.mobalytics.gg/tft/comps-guide/noxus-empire-2Qi9L1kpHOoGk0kUNcsZtPe8c9D",
"https://app.mobalytics.gg/tft/comps-guide/squid-game-2R9p2cCbNKxnOt9SJ1IcC9EtRBJ",
"https://app.mobalytics.gg/tft/comps-guide/spear-and-shield-2RvLjaeufrqyrIRRsJFTqDm5riI",
"https://app.mobalytics.gg/tft/comps-guide/mana-karma-2Smeinocp3cNwUkBSUCjHVVS9aI",
"https://app.mobalytics.gg/tft/comps-guide/4-stars-yordle-2RequUh14Ut2TMlueT6Z4Wa7lyb",
"https://app.mobalytics.gg/tft/comps-guide/multi-strategists-2R9TT897p9kWV58uJ9h57IrEkp2",
"https://app.mobalytics.gg/tft/comps-guide/guns-out-2QklJSwBOI9OO20rnrkb8gyJKeK",
"https://app.mobalytics.gg/tft/comps-guide/vastayans-2RALIiB0HKrdpwYB44tLO7v4vr0",
"https://app.mobalytics.gg/tft/comps-guide/demaciaaa-2QiCyWAWEuRnW0xnYURjZ4LvYgf"
];
var comps=["akshan","lonian challengers","voids","deadeyes","shurimans azir","slayer zed","6 noxus","sorcerers","strategists","lonian invokers","tristana","teemo","piltover","lonian emblem","kayle"];
function sl(){
    if(items[0].textContent.trim()=="slayer zed" || items[0].textContent.trim()=="tristana"){
        
        for(var i=0;i<5;i++){
            hl[i].href=hls[comps.indexOf(items[i].textContent)-5];
            items[i].textContent=comps[comps.indexOf(items[i].textContent)-5];
            
        }
    }
}
function sr(){
    if(items[0].textContent.trim()=="slayer zed" || items[0].textContent.trim()=="akshan"){
        for(var i=0;i<5;i++){
            hl[i].href=hls[comps.indexOf(items[i].textContent)+5];
            items[i].textContent=comps[comps.indexOf(items[i].textContent)+5];
            
        }
    }
}