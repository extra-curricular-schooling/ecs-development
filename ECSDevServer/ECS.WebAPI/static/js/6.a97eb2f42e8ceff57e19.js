webpackJsonp([6],{LiRD:function(e,t){},MADM:function(e,t){},MNWc:function(e,t){},SKZB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal",class:{"is-active":e.isActive}},[s("div",{staticClass:"modal-background"}),e._v(" "),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[e._m(0),e._v(" "),s("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v("Continue Registration")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("h1",[this._v("Welcome to Extracurricular Schooling!")]),t("br"),this._v(" "),t("p",[this._v("We will need additional information before you can get started.")]),t("br")])}]};var i=s("VU/8")({name:"WelcomeMessage",data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}}},a,!1,function(e){s("MADM")},null,null).exports,n=s("mtWM"),l=s.n(n),o=s("mafi"),r=s("R8d6"),d=s("e7x4"),c=s.n(d),u={name:"RegistrationForm",components:{"agreement-modal":o.a},data:function(){return{question1:"",question2:"",question3:"",questionSet1:[],questionSet2:[],questionSet3:[],states:this.$store.getters.getUnitedStatesAbbrevs,agreementIsChecked:!1,loadingIsDisabled:!1,firstName:"",lastName:"",email:"",address:"",city:"",state:"",zipCode:"",questionIDs:[],questions:[],error:{},firstNameMessage:"",lastNameMessage:"",emailMessage:"",addressMessage:"",cityMessage:"",zipCodeMessage:"",answersMessage:"",NAME_REGEX:this.$store.getters.getNameRegex,EMAIL_REGEX:this.$store.getters.getEmailRegex,ADDRESS_REGEX:this.$store.getters.getAddressRegex,CITY_REGEX:this.$store.getters.getCityRegex,ZIPCODE_REGEX:this.$store.getters.getZipCodeRegex}},created:function(){this.$store.dispatch("updateToken",""),this.fetchSecurityQuestions()},methods:{getSecurityAnswer:function(e){var t;return 1==e?t="answer1":2==e?t="answer2":3==e&&(t="answer3"),document.getElementById(t).value},getSelectionID:function(e,t){for(var s in this.$data.questions){var a=this.$data.questions[s];if(a.SecQuestion===t)var i=a.SecurityQuestionID}this.$data.questionIDs[e]=i},validateFirstName:function(){this.$data.NAME_REGEX.test(this.$data.firstName)||""==this.$data.firstName?""==this.$data.firstName?(document.getElementById("firstName").className="input",document.getElementById("firstNameControl").className="help",this.$data.firstNameMessage=""):(document.getElementById("firstName").className="input is-success",document.getElementById("firstNameControl").className="help",this.$data.firstNameMessage=""):(document.getElementById("firstName").className="input",document.getElementById("firstNameControl").className="help is-info",this.$data.firstNameMessage=this.$store.getters.getNameMessage)},validateLastName:function(){this.$data.NAME_REGEX.test(this.$data.lastName)||""==this.$data.lastName?""==this.$data.lastName?(document.getElementById("lastName").className="input",document.getElementById("lastNameControl").className="help",this.$data.lastNameMessage=""):(document.getElementById("lastName").className="input is-success",document.getElementById("lastNameControl").className="help",this.$data.lastNameMessage=""):(document.getElementById("lastName").className="input",document.getElementById("lastNameControl").className="help is-info",this.$data.lastNameMessage=this.$store.getters.getNameMessage)},validateEmail:function(){this.$data.EMAIL_REGEX.test(this.$data.email)||""==this.$data.email?""==this.$data.email?(document.getElementById("email").className="input",document.getElementById("emailControl").className="help",this.$data.emailMessage=""):(document.getElementById("email").className="input is-success",document.getElementById("emailControl").className="help",this.$data.emailMessage=""):(document.getElementById("email").className="input",document.getElementById("emailControl").className="help is-info",this.$data.emailMessage=this.$store.getters.getEmailMessage)},validateAddress:function(){this.$data.ADDRESS_REGEX.test(this.$data.address)||""==this.$data.address?""==this.$data.address?(document.getElementById("address").className="input",document.getElementById("addressControl").className="help",this.$data.addressMessage=""):(document.getElementById("address").className="input is-success",document.getElementById("addressControl").className="help",this.$data.addressMessage=""):(document.getElementById("address").className="input",document.getElementById("addressControl").className="help is-info",this.$data.addressMessage=this.$store.getters.getAddressMessage)},validateCity:function(){this.$data.CITY_REGEX.test(this.$data.city)||""==this.$data.city?""==this.$data.city?(document.getElementById("city").className="input",document.getElementById("cityControl").className="help",this.$data.cityMessage=""):(document.getElementById("city").className="input is-success",document.getElementById("cityControl").className="help",this.$data.cityMessage=""):(document.getElementById("city").className="input",document.getElementById("cityControl").className="help is-info",this.$data.cityMessage=this.$store.getters.getCityMessage)},validateZipCode:function(){this.$data.ZIPCODE_REGEX.test(this.$data.zipCode)||""==this.$data.zipCode?""==this.$data.zipCode?(document.getElementById("zipCode").className="input",document.getElementById("zipCodeControl").className="help",this.$data.zipCodeMessage=""):(document.getElementById("zipCode").className="input is-success",document.getElementById("zipCodeControl").className="help",this.$data.zipCodeMessage=""):(document.getElementById("zipCode").className="input",document.getElementById("zipCodeControl").className="help is-info",this.$data.zipCodeMessage=this.$store.getters.getZipCodeMessage)},validateAnswers:function(){""==document.getElementById("answer1").value&&""==document.getElementById("answer2").value&&""==document.getElementById("answer3").value?(document.getElementById("answer1").className="input",document.getElementById("answer2").className="input",document.getElementById("answer3").className="input",document.getElementById("answersControl").className="help",this.$data.answersMessage=""):""!=document.getElementById("answer1").value&&""!=document.getElementById("answer2").value&&""!=document.getElementById("answer3").value?(document.getElementById("answer1").className="input is-success",document.getElementById("answer2").className="input is-success",document.getElementById("answer3").className="input is-success",document.getElementById("answersControl").className="help",this.$data.answersMessage=""):(document.getElementById("answer1").className="input",document.getElementById("answer2").className="input",document.getElementById("answer3").className="input",document.getElementById("answersControl").className="help is-info",this.$data.answersMessage=this.$store.getters.getAnswerMessage)},isValidForm:function(){return"input is-success"==document.getElementById("firstName").className&&"input is-success"==document.getElementById("lastName").className&&"input is-success"==document.getElementById("email").className&&null!=this.$data.questionIDs[0]&&"input is-success"==document.getElementById("answer1").className&&null!=this.$data.questionIDs[1]&&"input is-success"==document.getElementById("answer2").className&&null!=this.$data.questionIDs[2]&&"input is-success"==document.getElementById("answer3").className},toggleModal:function(){this.$refs.modal.toggle()},checkBox:function(){this.agreementIsChecked=!this.agreementIsChecked},submit:function(){var e=this;this.isValidForm()?this.$data.agreementIsChecked?l()({method:"POST",url:this.$store.getters.getBaseAppUrl+"Registration/SubmitPartialRegistration",headers:this.$store.getters.getRequestHeaders,data:{firstName:this.$data.firstName,lastName:this.$data.lastName,username:this.$store.getters.getUsername,email:this.$data.email,address:this.$data.address,city:this.$data.city,state:this.$data.state,zipCode:Number(this.$data.zipCode),securityQuestions:[{question:Number(this.$data.questionIDs[0]),answer:this.getSecurityAnswer(1)},{question:Number(this.$data.questionIDs[1]),answer:this.getSecurityAnswer(2)},{question:Number(this.$data.questionIDs[2]),answer:this.getSecurityAnswer(3)}]}}).then(function(t){console.log(t),e.$store.dispatch("signIn",t.data),e.$store.dispatch("updateToken",t.data),e.$router.push({name:"Home"})}).catch(function(t){t.response?(400===t.response.status&&c()({title:"Bad News",text:"According to our records, you are not in our database",footer:'<a href="/">Take me to the main page</a>'}),409===t.response.status&&(e.$store.dispatch("signOut"),c()({title:"Good News",text:"According to our records, you already have an account with us!",footer:'<a href="/">Take me to the home page</a>'}))):t.request&&c()({type:"error",title:"We Apologize",text:"We are unable to process your request at this time."}),console.log("Error: ",t.config)}):c()({type:"warning",title:"Uh-Oh",html:"You must <b>read and agree</b> to our Terms and Conditions to continue..."}):c()({type:"warning",title:"Uh-Oh",html:"It seems either your form is <b>incomplete</b> or some of your inputs are <b>invalid</b>..."})},fetchSecurityQuestions:function(){var e=this;l()({method:"GET",url:this.$store.getters.getBaseAppUrl+"Registration/GetSecurityQuestions",headers:this.$store.getters.getRequestHeaders,timeout:this.$store.getters.getFormTimeout}).then(function(t){e.$data.questions=r.a.shuffleArray(t.data),e.divideQuestions(),e.loadingIsDisabled=!0}).catch(function(e){e.response?(503===e.response.status&&c()({type:"error",title:"We Apologize",text:"The resource your are requesting is not available."}),500===e.response.status&&c()({type:"error",title:"We Apologize",text:"We are unable to process your request at this time."})):e.request&&c()({type:"error",title:"We Apologize",text:"We are unable to process your request at this time."}),console.log(e.config)})},divideQuestions:function(){for(var e=this.$data.questions.length/3,t=0;t<this.$data.questions.length;t+=e)0===t?this.$data.questionSet1=this.$data.questions.slice(t,t+e):t===e?this.$data.questionSet2=this.$data.questions.slice(t,t+e):t===2*e&&(this.$data.questionSet3=this.$data.questions.slice(t,t+e))}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"registration-form",attrs:{method:"post"}},[s("p",{staticClass:"warning field-element"},[e._v("* indicates a required field")]),e._v(" "),s("div",{staticClass:"is-field-group"},[s("div",{staticClass:"field first-name"},[s("label",{staticClass:"label field-element is-required"},[e._v("First Name")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"input",attrs:{id:"firstName",type:"text",autocomplete:"given-name",placeholder:"First Name",required:""},domProps:{value:e.firstName},on:{keyup:e.validateFirstName,input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"firstNameControl"}},[e._v(e._s(e.firstNameMessage))])]),e._v(" "),s("div",{staticClass:"field last-name"},[s("label",{staticClass:"label field-element is-required"},[e._v("Last Name")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"input",attrs:{id:"lastName",type:"text",autocomplete:"family-name",placeholder:"Last Name",required:""},domProps:{value:e.lastName},on:{keyup:e.validateLastName,input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"lastNameControl"}},[e._v(e._s(e.lastNameMessage))])]),e._v(" "),s("div",{staticClass:"field email-address"},[s("label",{staticClass:"label field-element is-required"},[e._v("Email")]),e._v(" "),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{id:"email",type:"email",autocomplete:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{keyup:e.validateEmail,input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e._m(0)]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"emailControl"}},[e._v(e._s(e.emailMessage))])])]),e._v(" "),s("div",{staticClass:"is-field-group"},[s("div",{staticClass:"field mailing-address"},[s("label",{staticClass:"label field-element"},[e._v("Mailing Address")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input",attrs:{id:"address",type:"text",autocomplete:"street-address",placeholder:"Street Address"},domProps:{value:e.address},on:{keyup:e.validateAddress,input:function(t){t.target.composing||(e.address=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"addressControl"}},[e._v(e._s(e.addressMessage))])]),e._v(" "),s("div",{staticClass:"field mailing-address"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"input",attrs:{id:"city",type:"text",autocomplete:"address-line2",placeholder:"City"},domProps:{value:e.city},on:{keyup:e.validateCity,input:function(t){t.target.composing||(e.city=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"cityControl"}},[e._v(e._s(e.cityMessage))])]),e._v(" "),s("div",{staticClass:"is-table"},[s("div",{staticClass:"field mailing-adress state"},[s("div",{staticClass:"control left-cell"},[s("span",{staticClass:"select select-state"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"select-state",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.state=t.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[e._v("--select--")]),e._v(" "),e._l(e.states,function(t){return s("option",{key:t},[e._v(" "+e._s(t)+" ")])})],2)])])]),e._v(" "),s("div",{staticClass:"field mailing-address zip"},[s("p",{staticClass:"control right-cell"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.zipCode,expression:"zipCode"}],staticClass:"input",attrs:{id:"zipCode",autocomplete:"postal-code",placeholder:"Zip Code"},domProps:{value:e.zipCode},on:{keyup:e.validateZipCode,input:function(t){t.target.composing||(e.zipCode=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"zipCodeControl"}},[e._v(e._s(e.zipCodeMessage))])])])]),e._v(" "),s("div",{staticClass:"is-field-group"},[s("div",{staticClass:"field security-questions"},[s("label",{staticClass:"label field-element is-required"},[e._v("Security Questions")]),e._v(" "),s("div",{staticClass:"control"},[s("span",{staticClass:"select questions"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.question1,expression:"question1"}],staticClass:"pull-down",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.question1=t.target.multiple?s:s[0]},function(t){e.getSelectionID(0,e.question1)}]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("--select--")]),e._v(" "),e._l(e.questionSet1,function(t){return s("option",{key:t.SecurityQuestionID},[e._v(" "+e._s(t.SecQuestion)+" ")])})],2)]),e._v(" "),e.loadingIsDisabled?e._e():s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-spinner fa-pulse",attrs:{id:"loadingQuestions"}})])])]),e._v(" "),s("div",{staticClass:"field security-questions-answers"},[s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{id:"answer1",type:"text",placeholder:"Answer 1",required:""},on:{keyup:e.validateAnswers}})])]),e._v(" "),s("div",{staticClass:"field security-questions"},[s("div",{staticClass:"control"},[s("span",{staticClass:"select questions"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.question2,expression:"question2"}],staticClass:"pull-down",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.question2=t.target.multiple?s:s[0]},function(t){e.getSelectionID(1,e.question2)}]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("--select--")]),e._v(" "),e._l(e.questionSet2,function(t){return s("option",{key:t.SecurityQuestionID},[e._v(" "+e._s(t.SecQuestion)+" ")])})],2)]),e._v(" "),e.loadingIsDisabled?e._e():s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-spinner fa-pulse",attrs:{id:"loadingQuestions"}})])])]),e._v(" "),s("div",{staticClass:"field security-questions-answers"},[s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{id:"answer2",type:"text",placeholder:"Answer 2",required:""},on:{keyup:e.validateAnswers}})])]),e._v(" "),s("div",{staticClass:"field security-questions"},[s("div",{staticClass:"control"},[s("span",{staticClass:"select questions"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.question3,expression:"question3"}],staticClass:"pull-down",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.question3=t.target.multiple?s:s[0]},function(t){e.getSelectionID(2,e.question3)}]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("--select--")]),e._v(" "),e._l(e.questionSet3,function(t){return s("option",{key:t.SecurityQuestionID},[e._v(" "+e._s(t.SecQuestion)+" ")])})],2)]),e._v(" "),e.loadingIsDisabled?e._e():s("span",{staticClass:"icon is-medium"},[s("i",{staticClass:"fas fa-spinner fa-pulse",attrs:{id:"loadingQuestions"}})])])]),e._v(" "),s("div",{staticClass:"field security-questions-answers"},[s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{id:"answer3",type:"text",placeholder:"Answer 3",required:""},on:{keyup:e.validateAnswers}})])]),e._v(" "),s("p",{staticClass:"help",attrs:{id:"answersControl"}},[e._v(e._s(e.answersMessage))])]),e._v(" "),s("div",{staticClass:"field form-agreements"},[s("label",{staticClass:"checkbox"},[s("agreement-modal",{ref:"modal"}),e._v(" "),s("input",{class:{checked:e.agreementIsChecked},attrs:{type:"checkbox"},on:{click:e.checkBox}}),e._v("\n      I agree to the "),s("a",{on:{click:function(t){return t.preventDefault(),e.toggleModal(t)}}},[e._v("Terms and Conditions")]),e._v(".\n    ")],1)]),e._v(" "),s("div",{staticClass:"field is-grouped is-grouped-centered form-buttons"},[s("p",{staticClass:"control"},[s("router-link",{staticClass:"button is-link cancel-button",attrs:{to:"/",tag:"button"}},[e._v("\n      Cancel\n      ")])],1),e._v(" "),s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary submit-button",on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("\n      Submit\n      ")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])}]};var p={name:"PartialRegistration",components:{"welcome-message":i,"registration-form":s("VU/8")(u,m,!1,function(e){s("MNWc")},"data-v-2f610d44",null).exports},mounted:function(){this.welcomeUser()},methods:{welcomeUser:function(){this.$refs.welcome.toggle()}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"this-form"},[t("p",{staticClass:"msg-to-user"},[this._v("Please provide your information to get started!")]),this._v(" "),t("welcome-message",{ref:"welcome"}),this._v(" "),t("registration-form")],1)},staticRenderFns:[]};var v=s("VU/8")(p,g,!1,function(e){s("LiRD")},"data-v-2f1e1e51",null);t.default=v.exports}});
//# sourceMappingURL=6.a97eb2f42e8ceff57e19.js.map