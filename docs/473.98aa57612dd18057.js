"use strict";(self.webpackChunkdirectiveSignalsApp=self.webpackChunkdirectiveSignalsApp||[]).push([[473],{6473:(P,p,i)=>{i.r(p),i.d(p,{SignalsModule:()=>S});var c=i(6814),u=i(4670),e=i(4946);function m(t,o){if(1&t&&(e.TgZ(0,"li",2),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("routerLink",n.route),e.xp6(1),e.hij(" ",n.title," ")}}let d=(()=>{class t{constructor(){this.menuItems=(0,e.tdS)([{title:"Contador",route:"counter"},{title:"Usuario",route:"user-info"},{title:"Mutaciones",route:"properties"}])}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["signals-side-menu"]],decls:2,vars:1,consts:[[1,"list-group"],["routerLinkActive","active","class","list-group-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(n,r){1&n&&(e.TgZ(0,"ul",0),e.YNc(1,m,2,2,"li",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",r.menuItems()))},dependencies:[c.sg,u.rH,u.Od],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"row"],[1,"col-3"],[1,"col-9"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Men\xfa"),e.qZA(),e._UZ(4,"hr")(5,"signals-side-menu"),e.qZA(),e.TgZ(6,"div",2),e._UZ(7,"router-outlet"),e.qZA()())},dependencies:[u.lC,d]}),t})();const f=(0,e.tdS)("fernando");let _=(()=>{class t{constructor(){this.counter=(0,e.tdS)(10),this.squareCounter=(0,e.Flj)(()=>this.counter()*this.counter()),console.log(f())}increaseBy(n){this.counter.update(r=>r+n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["signals-counter-page"]],decls:14,vars:2,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"h2"),e._uU(1),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"h4"),e._uU(4),e.qZA(),e._UZ(5,"hr"),e.TgZ(6,"button",0),e.NdJ("click",function(){return r.increaseBy(1)}),e._uU(7,"+ 1"),e.qZA(),e._uU(8,"\n\xa0\n"),e.TgZ(9,"button",0),e.NdJ("click",function(){return r.increaseBy(-1)}),e._uU(10,"- 1"),e.qZA(),e._uU(11,"\n\xa0\n"),e.TgZ(12,"button",0),e.NdJ("click",function(){return r.counter.set(0)}),e._uU(13,"Reset"),e.qZA()),2&n&&(e.xp6(1),e.hij("Counter: ",r.counter(),""),e.xp6(3),e.hij("Square counter ",r.squareCounter(),""))}}),t})();var h=i(9862),U=i(7398);let Z=(()=>{class t{constructor(){this.http=(0,e.f3M)(h.eN),this.baseUrl="https://reqres.in/api/users"}getUserById(n){return this.http.get(`${this.baseUrl}/${n}`).pipe((0,U.U)(r=>r.data))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function C(t,o){if(1&t&&(e.TgZ(0,"div",5)(1,"h3"),e._uU(2,"Usuario: "),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e._UZ(7,"img",6),e.qZA()),2&t){const n=e.oxw();e.xp6(4),e.hij("Correo: ",n.currentUser().email,""),e.xp6(2),e.hij("Nombre: ",n.fullName(),""),e.xp6(1),e.Q6J("src",n.currentUser().avatar,e.LSH)}}function v(t,o){1&t&&(e.TgZ(0,"div",7)(1,"h3"),e._uU(2,"Usuario no encontrado"),e.qZA()())}const A=[{path:"",component:g,children:[{path:"counter",component:_},{path:"user-info",component:(()=>{class t{constructor(){this.userService=(0,e.f3M)(Z),this.userId=(0,e.tdS)(1),this.currentUser=(0,e.tdS)(void 0),this.userWasFound=(0,e.tdS)(!0),this.fullName=(0,e.Flj)(()=>this.currentUser()?`${this.currentUser().first_name} ${this.currentUser()?.last_name}`:"Usuario no encontrado")}ngOnInit(){this.loadUser(this.userId())}loadUser(n){n<=0||(this.userId.set(n),this.userService.getUserById(n).subscribe({next:r=>{this.currentUser.set(r),this.userWasFound.set(!0)},error:()=>{this.currentUser.set(void 0),this.userWasFound.set(!1)}}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["signals-user-info-page"]],decls:14,vars:3,consts:[[1,"row"],[1,"col-5"],[1,"btn","btn-primary",3,"click"],["class","col-7",4,"ngIf"],["class","col-7 text-danger",4,"ngIf"],[1,"col-7"],["alt","Avatar",3,"src"],[1,"col-7","text-danger"]],template:function(n,r){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Informaci\xf3n del usuario"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"h3"),e._uU(6),e.qZA(),e.TgZ(7,"button",2),e.NdJ("click",function(){return r.loadUser(r.userId()-1)}),e._uU(8,"Anterior"),e.qZA(),e._uU(9," \xa0 "),e.TgZ(10,"button",2),e.NdJ("click",function(){return r.loadUser(r.userId()+1)}),e._uU(11,"Siguiente"),e.qZA()(),e.YNc(12,C,8,3,"div",3),e.YNc(13,v,3,0,"div",4),e.qZA()),2&n&&(e.xp6(6),e.hij("Usuario actual: ",r.userId(),""),e.xp6(6),e.Q6J("ngIf",r.currentUser()),e.xp6(1),e.Q6J("ngIf",!r.userWasFound()))},dependencies:[c.O5]}),t})()},{path:"properties",component:(()=>{class t{constructor(){this.counter=(0,e.tdS)(10),this.user=(0,e.tdS)({id:12,email:"rachel.howell@reqres.in",first_name:"Rachel",last_name:"Howell",avatar:"https://reqres.in/img/faces/12-image.jpg"}),this.fullName=(0,e.Flj)(()=>`${this.user().first_name} ${this.user().last_name}`),this.userChangeEffect=(0,e.cEC)(()=>{console.log(`${this.user().first_name} - ${this.counter()}`)})}ngOnDestroy(){this.userChangeEffect.destroy()}ngOnInit(){setInterval(()=>{this.counter.update(n=>n+1)},1e3)}increaseBy(n){this.counter.update(r=>r+n)}onFieldUpdated(n,r){this.user.mutate(s=>{switch(n){case"email":s.email=r;break;case"first_name":s.first_name=r;break;case"last_name":s.last_name=r;break;case"id":s.id=Number(r)}})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["signals-properties-page"]],decls:19,vars:7,consts:[[1,"row"],[1,"col-6"],["type","text",1,"form-control","mb-2",3,"value","input"],["txtEmail",""],["txtFirstName",""],["txtLastName",""],[1,"btn","btn-primary",3,"click"]],template:function(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"h2"),e._uU(1,"Mutaciones"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"input",2,3),e.NdJ("input",function(){e.CHM(s);const a=e.MAs(6);return e.KtG(r.onFieldUpdated("email",a.value))}),e.qZA(),e.TgZ(7,"input",2,4),e.NdJ("input",function(){e.CHM(s);const a=e.MAs(8);return e.KtG(r.onFieldUpdated("first_name",a.value))}),e.qZA(),e.TgZ(9,"input",2,5),e.NdJ("input",function(){e.CHM(s);const a=e.MAs(10);return e.KtG(r.onFieldUpdated("last_name",a.value))}),e.qZA()(),e.TgZ(11,"div",1)(12,"pre"),e._uU(13),e.ALo(14,"json"),e.qZA(),e.TgZ(15,"pre"),e._uU(16),e.qZA(),e.TgZ(17,"button",6),e.NdJ("click",function(){return r.increaseBy(1)}),e._uU(18," + 1"),e.qZA()()()}2&n&&(e.xp6(5),e.Q6J("value",r.user().email),e.xp6(2),e.Q6J("value",r.user().first_name),e.xp6(2),e.Q6J("value",r.user().last_name),e.xp6(4),e.hij("      ",e.lcZ(14,5,r.user()),"\n    "),e.xp6(3),e.hij("      ",r.fullName(),"\n    "))},dependencies:[c.Ts]}),t})()},{path:"**",redirectTo:"counter"}]}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(A),u.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,T]}),t})()}}]);