(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(16)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(6),c=a.n(i),o=(a(13),a(7)),p=a(1),s=a(2),m=a(3),l=a(4),d=(a(14),function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(p.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:n})),r.a.createElement("div",{className:"Pokecard-data"},"Type:",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"Exp:",this.props.exp))}}]),a}(t.Component)),u=(a(15),function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(p.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Hand"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Hand"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total Experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(d,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),a}(t.Component));u.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var h=u,b=function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){return Object(p.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){for(var e=[],n=Object(o.a)(this.props.pokemon);e.length<n.length;){var a=Math.floor(Math.random()*n.length),t=n.splice(a,1)[0];e.push(t)}var i=e.reduce((function(e,n){return e+n.base_experience}),0),c=n.reduce((function(e,n){return e+n.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(h,{pokemon:e,exp:i,isWinner:i>c}),r.a.createElement(h,{pokemon:n,exp:c,isWinner:c>i}))}}]),a}(t.Component);b.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=b;var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9ab54c3e.chunk.js.map