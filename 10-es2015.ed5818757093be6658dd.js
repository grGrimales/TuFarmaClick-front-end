(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{x6po:function(t,e,s){"use strict";s.r(e),s.d(e,"UsersModule",(function(){return h}));var r=s("ofXK"),i=s("tyNb"),o=s("fXoL"),n=s("AytR"),a=s("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.baseUrl=n.a.baseUrl}getUsuarios(){return this.http.get(`${this.baseUrl}usuarios`)}deleteUsuario(t){const e=(new a.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.delete(`${this.baseUrl}usuarios/${t}`,{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(o.ac(a.a))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=s("oOf3");function u(t,e){if(1&t){const t=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td"),o.sc(2),o.Vb(),o.Wb(3,"td"),o.sc(4),o.Vb(),o.Wb(5,"td"),o.sc(6),o.Vb(),o.Wb(7,"td",8),o.Wb(8,"button",9),o.ec("click",(function(){o.oc(t);const s=e.$implicit;return o.gc().deleteUsuario(s.uid)})),o.sc(9,"Eliminar"),o.Vb(),o.Wb(10,"button",10),o.sc(11,"Detalle"),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=e.$implicit;o.Hb(2),o.vc("",t.nombre," ",t.apellido,""),o.Hb(2),o.tc(t.email),o.Hb(2),o.tc(t.rol)}}const l=function(t){return{itemsPerPage:5,currentPage:t}},p=[{path:"",component:(()=>{class t{constructor(t,e){this.usuariosService=t,this.router=e,this.titulo="Usuarios",this.page=1}ngOnInit(){this.usuariosService.getUsuarios().subscribe(t=>{this.actualizarUsuarios(),this.usuarios=t.usuarios})}deleteUsuario(t){this.usuariosService.deleteUsuario(t).subscribe(t=>{console.log(t),this.actualizarUsuarios(),this.router.navigate(["/admin/users"])})}actualizarUsuarios(){this.usuariosService.getUsuarios().subscribe(t=>{console.log(t),this.usuarios=t.usuarios})}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(c),o.Rb(i.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-listar"]],decls:21,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-sm-4"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["autoHide","true","responsive","true","previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],[2,"width","20%"],["type","button",1,"btn","btn-danger","btn-sm","m-1",3,"click"],["type","button",1,"btn","btn-info","btn-sm"]],template:function(t,e){1&t&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"h1"),o.sc(4),o.Vb(),o.Sb(5,"hr"),o.Sb(6,"br"),o.Vb(),o.Vb(),o.Wb(7,"table",3),o.Wb(8,"thead"),o.Wb(9,"tr"),o.Wb(10,"th",4),o.sc(11,"Nombre"),o.Vb(),o.Wb(12,"th",4),o.sc(13,"Email"),o.Vb(),o.Wb(14,"th",4),o.sc(15,"Rol"),o.Vb(),o.Vb(),o.Vb(),o.Wb(16,"tbody"),o.rc(17,u,12,4,"tr",5),o.hc(18,"paginate"),o.Vb(),o.Vb(),o.Vb(),o.Wb(19,"div",6),o.Wb(20,"pagination-controls",7),o.ec("pageChange",(function(t){return e.page=t})),o.Vb(),o.Vb()),2&t&&(o.Hb(4),o.tc(e.titulo),o.Hb(13),o.jc("ngForOf",o.ic(18,2,e.usuarios,o.lc(5,l,e.page))))},directives:[r.i,b.c],pipes:[b.b],styles:["*[_ngcontent-%COMP%]{color:#398adb}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[i.d.forChild(p)],i.d]}),t})(),h=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[r.b,d,b.a]]}),t})()}}]);