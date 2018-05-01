webpackJsonp([8],{"6YtC":function(t,e){},Q95w:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),o=i("Zm3I"),n={name:"LinkedInPostModal",data:function(){return{isActive:!1,isButtonVisible:!1,isConfirm:!1,isRedirect:!1,postData:{comment:"Check this article I found on ECS!",title:"",description:"",submittedurl:"",code:"connections-only"},currentDateTime:new Date}},mounted:function(){var t=this;o.a.$on("articleChosen",function(){t.toggleShareButton()})},methods:{getLinkedInTokenUri:function(){return"https://localhost:44311/v1/OAuth/RedirectToLinkedIn?authtoken="+this.$store.getters.getAuthToken+"&returnuri="+encodeURIComponent(window.location.href)},updateArticleInfo:function(){this.postData.title=this.$store.getters.getArticleTitle,this.postData.submittedurl=this.$store.getters.getCurrentArticle,this.postData.description=this.$store.getters.getInterestTag,this.currentDateTime=new Date},toggleLinkedInModal:function(){this.isActive=!this.isActive},modalActions:function(){this.updateArticleInfo(),this.toggleLinkedInModal()},toggleConfirmModal:function(){this.isConfirm=!this.isConfirm},toggleShareButton:function(){this.isButtonVisible=!0},toggleErrorModal:function(t){this.$store.dispatch("updateErrorMessage",t),o.a.$emit("error")},toggleRedirectModal:function(t,e){this.$store.dispatch("updateRedirectUri",t),this.$store.dispatch("updateErrorMessage",e),this.$store.dispatch("updateRedirectVisiblity",!0),o.a.$emit("redirect")},redirectToLinkedIn:function(){window.location.assign(this.getLinkedInTokenUri())},shareToLinkedIn:function(){var t=this;a()({method:"POST",url:this.$store.getters.getLinkedInPostURI,headers:this.$store.getters.getRequestHeaders,data:{comment:this.postData.comment,title:this.postData.title,description:this.postData.description,submittedurl:this.postData.submittedurl,code:this.postData.code}}).then(function(e){t.toggleLinkedInModal(),document.getElementById("post-url").href=e.data.UpdateUrl,t.toggleConfirmModal()}).catch(function(e){console.log(e),"ERR7"===e.response.data.message?(t.toggleLinkedInModal(),t.toggleRedirectModal(t.getLinkedInTokenUri(),"Your LinkedIn session has expired, do you wish to renew it?")):"ERR1"===e.response.data.message?(t.toggleLinkedInModal(),t.toggleRedirectModal(t.getLinkedInTokenUri(),"Your account does not seem to be linked to LinkedIn, would you like to start that process now?")):(t.toggleLinkedInModal(),t.toggleErrorModal("Seems like LinkedIn did not like that post! Please try again later!"))})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{staticClass:"button is-primary",attrs:{disabled:!t.isButtonVisible},on:{click:t.modalActions}},[t._v("Share on LinkedIn!")]),t._v(" "),i("div",{staticClass:"modal",class:{"is-active":t.isActive}},[i("div",{staticClass:"modal-background",on:{click:t.toggleLinkedInModal}}),t._v(" "),i("div",{staticClass:"modal-card",attrs:{id:"linkedin-modal"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Share this article on LinkedIn!")]),t._v(" "),i("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.toggleLinkedInModal}})]),t._v(" "),i("section",{staticClass:"modal-card-body",attrs:{id:"linkedin-modal-body"}},[i("p",{staticClass:"warning field-element"},[t._v("* indicates a required field")]),t._v(" "),i("div",{staticClass:"is-field-group"},[i("div",{staticClass:"field comment"},[i("label",{staticClass:"label field-element is-required"},[t._v("Comment")]),t._v(" "),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.comment,expression:"postData.comment"}],staticClass:"input",attrs:{type:"text",placeholder:"Comment",required:""},domProps:{value:t.postData.comment},on:{input:function(e){e.target.composing||t.$set(t.postData,"comment",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"field comment"},[i("label",{staticClass:"label field-element is-required"},[t._v("Privacy Settings")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.code,expression:"postData.code"}],attrs:{type:"radio",id:"public",value:"anyone"},domProps:{checked:t._q(t.postData.code,"anyone")},on:{change:function(e){t.$set(t.postData,"code","anyone")}}}),t._v(" "),i("label",{attrs:{for:"public"}},[t._v("Public")]),t._v(" "),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.code,expression:"postData.code"}],attrs:{type:"radio",id:"connections-only",value:"connections-only"},domProps:{checked:t._q(t.postData.code,"connections-only")},on:{change:function(e){t.$set(t.postData,"code","connections-only")}}}),t._v(" "),i("label",{attrs:{for:"connections-only"}},[t._v("Connections Only")])])])]),t._v(" "),i("section",{staticClass:"hero is-info",attrs:{id:"linkedin-preview"}},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"box"},[i("article",{staticClass:"media"},[t._m(0),t._v(" "),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("p",[i("strong",[t._v("John Smith")]),i("br"),t._v(" "),i("small",[t._v("Occupation here.")]),i("br"),t._v(" "),i("small",[t._v(t._s(t.currentDateTime.toString()))]),i("br"),t._v(" "),i("br"),t._v("\n                    "+t._s(t.postData.comment)+"\n                  ")])]),t._v(" "),i("hr",{staticClass:"dropdown-divider"}),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])])]),t._v(" "),i("footer",{staticClass:"modal-card-foot"},[i("button",{staticClass:"button is-success",attrs:{id:"linkedin-submit-button"},on:{click:t.shareToLinkedIn}},[t._v("Post on LinkedIn")]),t._v(" "),i("button",{staticClass:"button",on:{click:t.toggleLinkedInModal}},[t._v("Cancel")])])])]),t._v(" "),i("div",{staticClass:"modal",class:{"is-active":t.isConfirm}},[i("div",{staticClass:"modal-background"}),t._v(" "),i("div",{staticClass:"modal-card",attrs:{id:"linkedin-modal"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Article has been shared on LinkedIn!")]),t._v(" "),i("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.toggleConfirmModal}})]),t._v(" "),t._m(3),t._v(" "),i("footer",{staticClass:"modal-card-foot"},[i("button",{staticClass:"button is-success",attrs:{id:"linkedin-submit-button"},on:{click:t.toggleConfirmModal}},[t._v("Close")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"media-left"},[e("p",{staticClass:"image is-64x64"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-left"},[e("a",{staticClass:"level-item"},[e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-reply"})])]),this._v(" "),e("a",{staticClass:"level-item"},[e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-retweet"})])]),this._v(" "),e("a",{staticClass:"level-item"},[e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-heart"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-right"},[e("button",{staticClass:"delete"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"modal-card-body",attrs:{id:"linkedin-modal-body"}},[e("p",[this._v("View the article ")]),e("a",{attrs:{id:"post-url",href:""}},[this._v("here")])])}]};var c=i("VU/8")(n,l,!1,function(t){i("6YtC")},"data-v-1aed8f11",null);e.a=c.exports},"cE/m":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("Zm3I"),o=i("rd2Y"),n=i("Q95w");s.a.component("connect-to-linkedin",{template:'<button v-on:click="redirectToLinkedIn" class="button is-primary">Use LinkedIn!</button>',methods:{redirectToLinkedIn:function(){window.location.assign("https://localhost:44311/v1/OAuth/RedirectToLinkedIn?authtoken="+this.$store.getters.getAuthToken+"&returnuri="+encodeURIComponent(window.location.href))}}}),s.a.component("toggle-loading",{template:'<button v-on:click="toggleLoading" class="button is-primary">Toggle Loading!</button>',methods:{toggleLoading:function(){a.a.$emit("loading")}}});var l={name:"LinkedIn",components:{LinkedInPostModal:n.a,LoadingModal:o.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("loading-modal"),this._v(" "),e("toggle-loading"),this._v(">\n  "),e("connect-to-linkedin"),this._v(" "),e("LinkedInPostModal")],1)},staticRenderFns:[]},d=i("VU/8")(l,c,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=8.83286624c625fcb65968.js.map