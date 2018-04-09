﻿using System.Web.Http;
using System.Web.Http.Cors;
using ECS.DTO;
using ECS.WebAPI.HttpClients;

namespace ECS.WebAPI.Controllers.v1
{
    [RoutePrefix("v1/ResetPassword")]
    public class ResetPasswordController : ApiController
    {
        [HttpGet]
        [Route("SecurityQuestions")]
        [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "GET")]
        public IHttpActionResult SecurityQuestions()
        {
            // Grab the repository information for User's security questions

            // Return List<SecurityQuestionDTO> to the Client
            return Ok("Get Security Questions");
        }

        [HttpPost]
        [Route("SecurityQuestions")]
        [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "POST")]
        public IHttpActionResult SecurityQuestions(AccountCredentialDTO credentials)
        {
            // Credentials is already read and deserialized into a DTO. Validate it.
            Validate(credentials);

            if (ModelState.IsValid)
            {
                // Proccess any other information.

                // Check the db If their answers are correct.

                // Return succesful response
                return Ok("Post Security Questions");
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("NewPassword")]
        [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "POST")]
        public IHttpActionResult NewPassword(AccountCredentialDTO credentials)
        {
            // Credentials is already read and deserialized into a DTO. Validate it.
            Validate(credentials);

            if (ModelState.IsValid)
            {
                // We need to take this information and update the user's password in the db.
                
                // Return 200
                return Ok("Post Reset Password");
            }

            // Fail state
            return BadRequest(ModelState);
        }

        [Route("SsoResetPasswordRequest")]
        public void SsoResetPasswordRequest()
        {
            // send the password to sso
            using (HttpClientService client = HttpClientService.SsoInstance)
            {
                // send to client.
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>Author: Scott Roberts</remarks>
        [HttpPost]
        [Route("Password")]
        // The DTO we are using worries me because it will have an empty password field for this action
        // Should I make a AccountUsernameDTO???
        public IHttpActionResult Username(AccountCredentialDTO credentials)
        {
            // Credentials is already read and deserialized into a DTO. Validate it.
            Validate(credentials);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Proccess any other information.

            // Check DB for username

            // Send User's security questions.
            using (HttpClientService client = HttpClientService.SsoInstance)
            {
                // send to client.
            }

            // Return successful response
            return Ok();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>Author: Scott Roberts</remarks>
        [HttpPost]
        [Route("SecurityAnswers")]
        public IHttpActionResult SecurityAnswers(SecurityQuestionDTO securityQuestions)
        {
            // Credentials is already read and deserialized into a DTO. Validate it.
            Validate(securityQuestions);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Proccess any other information.

            // Verify User's answers.

            // Redirect User to Account reset password page??

            // Return successful response
            return Ok();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>Author: Scott Roberts</remarks>
        [HttpPost]
        [Route("AccountPassword")]
        public IHttpActionResult AccountPassword(AccountCredentialDTO credentials)
        {
            // Credentials is already read and deserialized into a DTO. Validate it.
            Validate(credentials);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Proccess any other information.

            // Submit new password to app DB.

            // After you finish the resetpassword action, we need to send the finished information to the SSO.
            //PostNewPasswordToSSO(credentials);

            // Redirect User to Account reset password page??

            // Return successful response
            return Ok();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="credentials"></param>
        /// <remarks>Author: Scott Roberts</remarks>
        /// 
        [Route("PostNewPasswordToSSO")]
        private void PostNewPasswordToSSO(AccountCredentialDTO credentials)
        {
            // Call request service to make a request to the SSO.
            using (var client = HttpClientService.SsoInstance)
            {
                // The request should talk to the SSO controller to talk to the database.
                // The request should handle all successes and errors, or pass it off.

            }

            // We then need to save the User to our database.
            //using(var context = new ECSContext())

            // The return should be a Json object to the SSO server.

            //return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}