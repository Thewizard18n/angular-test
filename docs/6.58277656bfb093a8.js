"use strict";(self.webpackChunkangular_test=self.webpackChunkangular_test||[]).push([[6],{4006:(Zt,C,s)=>{s.r(C),s.d(C,{SearchGithubUsersModule:()=>Ut});var u=s(6814),f=s(7398),Z=s(4829),g=s(9360),T=s(8251);function x(e,o){return o?n=>n.pipe(x((r,i)=>(0,Z.Xf)(e(r,i)).pipe((0,f.U)((c,p)=>o(r,c,i,p))))):(0,g.e)((n,r)=>{let i=0,c=null,p=!1;n.subscribe((0,T.x)(r,l=>{c||(c=(0,T.x)(r,void 0,()=>{c=null,p&&r.complete()}),(0,Z.Xf)(e(l,i++)).subscribe(c))},()=>{p=!0,!c&&r.complete()}))})}var N=s(9732);const w=(e,o)=>(e.push(o),e);class h{}var t=s(5879),_=s(9862),B=s(2181),I=s(6306),R=s(8504),Q=s(1190);let D=(()=>{class e{constructor(n,r){this.httpClient=n,this.toast=r}buildHeaders(n){let r=new _.WM;return n&&Object.entries(n).forEach(i=>{r=r.append(i[0],i[1])}),r}get(n){return this._request("GET",n)}_request(n,r){let i=new _.aW(n,r,null,{headers:this.buildHeaders({"X-GitHub-Api-Version":"2022-11-28",Authorization:"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"}),responseType:"text"});return this.httpClient.request(i).pipe((0,B.h)(l=>l instanceof _.Zn)).pipe((0,f.U)(l=>JSON.parse(l.body)||"{}"),(0,I.K)(l=>(this.toast.open(JSON.parse(l.error).message),(0,R._)(()=>l))))}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(_.eN),t.LFG(Q.k))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),J=(()=>{class e extends h{constructor(n){super(),this.httpClient=n,this.baseUrl="https://api.github.com/"}getUsers(n){return this.httpClient.get(this.baseUrl+"users/"+n).pipe(x(i=>this.getRepos(i.login).pipe((0,f.U)(c=>{const p=c.reduce((l,Ct)=>l+Ct.stargazers_count,0);return{name:i.name,username:i.login,description:i.bio,followers:i.followers,following:i.following,location:i.location,profileImage:i.avatar_url,stars:p}}))),function Y(){return(0,g.e)((e,o)=>{(function b(e,o){return(0,g.e)((0,N.U)(e,o,arguments.length>=2,!1,!0))})(w,[])(e).subscribe(o)})}())}getRepos(n){return this.httpClient.get(this.baseUrl+"users/"+n+"/repos").pipe((0,f.U)(i=>i.map(c=>({stargazers_count:c.stargazers_count,name:c.name}))))}static#t=this.\u0275fac=function(r){return new(r||e)(t.LFG(D))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var O=s(1902),m=s(6223),d=s(1348),S=s(4716),y=s(617),A=s(2296),U=s(1941),L=s(2032),a=s(9221);function q(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"campo obrigatorio"),t.qZA())}function z(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Name "),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function F(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Username "),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.username," ")}}function H(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Description "),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.description," ")}}function G(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Followers "),t.qZA())}function E(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.followers," ")}}function P(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Following "),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.following," ")}}function k(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Stars "),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.stars," ")}}function W(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Location "),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.location," ")}}function tt(e,o){1&e&&(t.TgZ(0,"th",22),t._uU(1," Profile Image "),t.qZA())}function et(e,o){if(1&e&&(t.TgZ(0,"td",23),t._UZ(1,"img",24),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngSrc",n.profileImage)}}function nt(e,o){1&e&&t._UZ(0,"tr",25)}function ot(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr",26),t.NdJ("click",function(){const c=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.teste(c))}),t.qZA()}}function rt(e,o){if(1&e&&(t.TgZ(0,"div")(1,"table",9),t.ynx(2,10),t.YNc(3,z,2,0,"th",11),t.YNc(4,$,2,1,"td",12),t.BQk(),t.ynx(5,13),t.YNc(6,F,2,0,"th",11),t.YNc(7,M,2,1,"td",12),t.BQk(),t.ynx(8,14),t.YNc(9,H,2,0,"th",11),t.YNc(10,j,2,1,"td",12),t.BQk(),t.ynx(11,15),t.YNc(12,G,2,0,"th",11),t.YNc(13,E,2,1,"td",12),t.BQk(),t.ynx(14,16),t.YNc(15,P,2,0,"th",11),t.YNc(16,X,2,1,"td",12),t.BQk(),t.ynx(17,17),t.YNc(18,k,2,0,"th",11),t.YNc(19,V,2,1,"td",12),t.BQk(),t.ynx(20,18),t.YNc(21,W,2,0,"th",11),t.YNc(22,K,2,1,"td",12),t.BQk(),t.ynx(23,19),t.YNc(24,tt,2,0,"th",11),t.YNc(25,et,2,1,"td",12),t.BQk(),t.YNc(26,nt,1,0,"tr",20),t.YNc(27,ot,1,0,"tr",21),t.qZA()()),2&e){const n=o.ngIf,r=t.oxw();t.xp6(1),t.Q6J("dataSource",n),t.xp6(25),t.Q6J("matHeaderRowDef",r.cols),t.xp6(1),t.Q6J("matRowDefColumns",r.cols)}}function it(e,o){1&e&&(t.TgZ(0,"div",28),t._uU(1,"Loading..."),t.qZA())}function st(e,o){if(1&e&&t.YNc(0,it,2,0,"div",27),2&e){const n=t.oxw();t.Q6J("ngIf",n.isLoading)}}function ct(e,o){1&e&&(t.TgZ(0,"th",10),t._uU(1," Name "),t.qZA())}function lt(e,o){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function mt(e,o){1&e&&(t.TgZ(0,"th",10),t._uU(1," Stars "),t.qZA())}function pt(e,o){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.stargazers_count," ")}}function ut(e,o){1&e&&t._UZ(0,"tr",12)}function dt(e,o){1&e&&t._UZ(0,"tr",13)}function ft(e,o){if(1&e&&(t.TgZ(0,"div")(1,"table",3),t.ynx(2,4),t.YNc(3,ct,2,0,"th",5),t.YNc(4,lt,2,1,"td",6),t.BQk(),t.ynx(5,7),t.YNc(6,mt,2,0,"th",5),t.YNc(7,pt,2,1,"td",6),t.BQk(),t.YNc(8,ut,1,0,"tr",8),t.YNc(9,dt,1,0,"tr",9),t.qZA()()),2&e){const n=o.ngIf,r=t.oxw();t.xp6(1),t.Q6J("dataSource",n),t.xp6(7),t.Q6J("matHeaderRowDef",r.cols),t.xp6(1),t.Q6J("matRowDefColumns",r.cols)}}function ht(e,o){1&e&&(t.TgZ(0,"div",15),t._uU(1,"Loading..."),t.qZA())}function _t(e,o){if(1&e&&t.YNc(0,ht,2,0,"div",14),2&e){const n=t.oxw();t.Q6J("ngIf",n.isLoading)}}const gt=[{path:"",component:(()=>{class e{constructor(n,r,i){this.githubRepositoryImp=n,this.fb=r,this.router=i,this.isLoading=!1,this.formdata=this.fb.group({username:["",{validators:[m.kI.required]}]}),this.cols=["name","username","description","followers","following","stars","location","profileImage"]}submit(){const n=this.formdata.value.username;this.isLoading=!0,this.data$=this.githubRepositoryImp.getUsers(n).pipe((0,S.x)(()=>this.isLoading=!1))}teste({username:n}){this.router.navigate(["/repos",n])}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(h),t.Y36(m.qu),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-users"]],decls:17,vars:7,consts:[[1,"form-container"],[1,"centered-form",3,"formGroup","ngSubmit"],[1,"wrapper_input_field"],["appearance","outline"],["matInput","","placeholder","Digite","formControlName","username"],[4,"ngIf"],["type","submit","mat-fab","","color","primary","aria-label","icone para prosseguir com icone de seta",3,"disabled"],[4,"ngIf","ngIfElse"],["loading",""],["mat-table","",1,"mat-elevation-z0",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","description"],["matColumnDef","followers"],["matColumnDef","following"],["matColumnDef","stars"],["matColumnDef","location"],["matColumnDef","profileImage"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["width","100","height","100","priority","",3,"ngSrc"],["mat-header-row",""],["mat-row","",3,"click"],["class","loader",4,"ngIf"],[1,"loader"]],template:function(r,i){if(1&r&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2," busca de usu\xe1rios"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"Buscar usuario"),t.qZA(),t._UZ(8,"input",4),t.YNc(9,q,2,0,"mat-error",5),t.qZA(),t.TgZ(10,"button",6)(11,"mat-icon"),t._uU(12,"arrow_forward"),t.qZA()()()(),t.YNc(13,rt,28,3,"div",7),t.ALo(14,"async"),t.YNc(15,st,1,1,"ng-template",null,8,t.W1O),t.qZA()),2&r){const c=t.MAs(16);t.xp6(3),t.Q6J("formGroup",i.formdata),t.xp6(6),t.Q6J("ngIf",i.formdata.invalid),t.xp6(1),t.Q6J("disabled",!i.formdata.valid),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,5,i.data$))("ngIfElse",c)}},dependencies:[u.O5,y.Hw,A.cs,U.KE,U.hX,U.TO,L.Nt,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,u.Zd,u.Ov],styles:[".centered-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.wrapper_input_field[_ngcontent-%COMP%]{display:flex}.wrapper_input_field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:24px}.mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]{border-color:currentColor}"]})}return e})()},{path:"repos/:userId",component:(()=>{class e{constructor(n,r){this.githubRepositoryImp=n,this.activatedRoute=r,this.isLoading=!1,this.cols=["stargazers_count","name"],this.isLoading=!0,this.activatedRoute.params.subscribe(i=>{this.data$=this.githubRepositoryImp.getRepos(i.userId).pipe((0,S.x)(()=>this.isLoading=!1))})}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(h),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-repos-by-user"]],decls:11,vars:4,consts:[["mat-mini-fab","","color","primary","routerLink",""],[4,"ngIf","ngIfElse"],["loading",""],["mat-table","",1,"mat-elevation-z0",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","stargazers_count"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["class","loader",4,"ngIf"],[1,"loader"]],template:function(r,i){if(1&r&&(t.TgZ(0,"section")(1,"div")(2,"button",0)(3,"mat-icon"),t._uU(4,"arrow_back"),t.qZA()(),t.TgZ(5,"h1"),t._uU(6,"Listagem de reposit\xf3rios"),t.qZA()(),t.YNc(7,ft,10,3,"div",1),t.ALo(8,"async"),t.qZA(),t.YNc(9,_t,1,1,"ng-template",null,2,t.W1O)),2&r){const c=t.MAs(10);t.xp6(7),t.Q6J("ngIf",t.lcZ(8,2,i.data$))("ngIfElse",c)}},dependencies:[u.O5,y.Hw,A.nh,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,d.rH,u.Ov]})}return e})()}];let vt=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(gt),d.Bz]})}return e})(),Ut=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[{provide:h,useClass:J}],imports:[u.ez,O.q,m.UX,vt]})}return e})()}}]);