webpackJsonp([1],{GKrx:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var h=s("7+uW"),e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},e,!1,function(t){s("GKrx")},null,null).exports,n=s("/ocq"),r={name:"HelloWorld",data:function(){return{digit:[[[0,1,1,1,1,1,0],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[0,1,1,1,1,1,0]],[[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,1,1,1,1,1,0],[0,1,1,1,1,1,0]],[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,1,1,1,0],[0,0,0,1,1,1,0],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,0,1,0,0],[0,1,1,0,1,0,0],[1,1,0,0,1,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0]],[[0,1,1,1,1,1,0],[0,1,1,1,1,1,0],[0,1,1,0,0,0,0],[0,1,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,1,1,0,1,1,0],[0,1,1,1,1,0,0]],[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[0,1,1,0,0,0,0],[0,1,1,0,0,0,0],[0,1,1,1,1,1,0],[0,1,1,0,1,1,0],[0,1,1,0,0,1,1],[0,1,1,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,1,1,1,1,1,0],[1,1,1,1,1,1,0],[1,1,0,0,1,1,0],[1,1,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0]],[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,0,1,1],[0,0,1,1,1,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,0,1,1],[0,0,1,1,1,1,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],R:8,D:17,END_TIME:new Date(2019,3,15,5,30,0),WIDTH:0,HEIGHT:0,TOP_MARGIN:0,LEFT_MARGIN:0,curShowTimeSeconds:0,ballColor:["#33b5e5","#0099cc","#aa66cc","#9933cc","#9900cc","#669900","#ffbb33","#ff8800","#ff4444","#cc0000"],balls:[]}},mounted:function(){this.WIDTH=document.documentElement.clientWidth,this.HEIGHT=3*document.documentElement.clientHeight/5,this.TOP_MARGIN=this.HEIGHT/5,this.LEFT_MARGIN=this.WIDTH/6;var t=document.getElementById("canvas");t.width=this.WIDTH,t.height=this.HEIGHT;var i=t.getContext("2d");this.curShowTimeSeconds=this.getCurrentShowTimeSeconds();var s=this;setInterval(function(){s.drawDigit(i),s.update()},50)},methods:{getCurrentShowTimeSeconds:function(){var t=new Date,i=this.END_TIME.getTime()-t.getTime();return(i=Math.round(i/1e3))>=0?i:0},drawDigit:function(t){var i=parseInt(this.curShowTimeSeconds/3600),s=parseInt(this.curShowTimeSeconds/60-60*i),h=this.curShowTimeSeconds%60;t.clearRect(0,0,this.WIDTH,this.HEIGHT),this.randDigit(this.LEFT_MARGIN,this.TOP_MARGIN,parseInt(i/10),t),this.randDigit(this.LEFT_MARGIN+8*this.D,this.TOP_MARGIN,i%10,t),this.randDigit(this.LEFT_MARGIN+15*this.D,this.TOP_MARGIN,10,t),this.randDigit(this.LEFT_MARGIN+19*this.D,this.TOP_MARGIN,parseInt(s/10),t),this.randDigit(this.LEFT_MARGIN+27*this.D,this.TOP_MARGIN,s%10,t),this.randDigit(this.LEFT_MARGIN+34*this.D,this.TOP_MARGIN,10,t),this.randDigit(this.LEFT_MARGIN+38*this.D,this.TOP_MARGIN,parseInt(h/10),t),this.randDigit(this.LEFT_MARGIN+46*this.D,this.TOP_MARGIN,h%10,t);for(var e=0;e<this.balls.length;e++){var a=this.balls[e];t.fillStyle=a.color,t.beginPath(),t.arc(a.x,a.y,this.R,0,2*Math.PI,!0),t.closePath(),t.fill()}},randDigit:function(t,i,s,h){for(var e=this.digit[s],a=0;a<e.length;a++)for(var n=0;n<e[a].length;n++)if(1==e[a][n]){var r=this.D*n+t,l=this.D*a+i;h.fillStyle="#303030",h.beginPath(),h.arc(r,l,this.R,0,2*Math.PI),h.closePath(),h.fill()}},update:function(){var t=this.getCurrentShowTimeSeconds(),i=parseInt(t/3600),s=parseInt(t/60-60*i),h=t%60,e=parseInt(this.curShowTimeSeconds/3600),a=parseInt(this.curShowTimeSeconds/60-60*e),n=this.curShowTimeSeconds%60;h!=n&&(parseInt(i/10)!=parseInt(e/10)&&this.addBall(this.LEFT_MARGIN,this.TOP_MARGIN,parseInt(i/10)),i%10!=e%10&&this.addBall(this.LEFT_MARGIN+8*this.D,this.TOP_MARGIN,i%10),parseInt(s/10)!=parseInt(a/10)&&this.addBall(this.LEFT_MARGIN+19*this.D,this.TOP_MARGIN,parseInt(s/10)),s%10!=a%10&&this.addBall(this.LEFT_MARGIN+27*this.D,this.TOP_MARGIN,s%10),parseInt(h/10)!=parseInt(n/10)&&this.addBall(this.LEFT_MARGIN+38*this.D,this.TOP_MARGIN,parseInt(h/10)),h%10!=n%10&&this.addBall(this.LEFT_MARGIN+46*this.D,this.TOP_MARGIN,h%10),this.curShowTimeSeconds=t),this.updateBalls()},addBall:function(t,i,s){for(var h=this.digit[s],e=0;e<h.length;e++)for(var a=0;a<h[e].length;a++)if(1==h[e][a]){var n={x:this.D*a+t,y:this.D*e+i,color:this.ballColor[Math.floor(Math.random()*this.ballColor.length)],vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-5,g:1.5+Math.random()};this.balls.push(n)}},updateBalls:function(){for(var t=0,i=0;i<this.balls.length;i++)this.balls[i].x+=this.balls[i].vx,this.balls[i].y+=this.balls[i].vy,this.balls[i].vy+=this.balls[i].g,this.balls[i].y>=this.HEIGHT-this.R&&(this.balls[i].y=this.HEIGHT-this.R,this.balls[i].vy=.2*-this.balls[i].vy),this.balls[i].x+this.R>=0&&this.balls[i].x+this.R<=this.WIDTH&&(this.balls[t++]=this.balls[i]);for(;this.balls.length>Math.min(350,t);)this.balls.pop()}}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"main"},[i("canvas",{staticStyle:{border:"1px solid #000",margin:"0 auto"},attrs:{id:"canvas"}})])}]};var o=s("VU/8")(r,l,!1,function(t){s("rUUp")},"data-v-861db1e4",null).exports;h.a.use(n.a);var c=new n.a({routes:[{path:"/",name:"HelloWorld",component:o}]});h.a.config.productionTip=!1,new h.a({el:"#app",router:c,components:{App:a},template:"<App/>"})},rUUp:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.da86b3fbeeb16170ec40.js.map