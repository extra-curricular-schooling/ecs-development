﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using ECS.DTO;
using ECS.DTO.Sso;
using ECS.Repositories;
using ECS.Repositories.Implementations;
using Microsoft.IdentityModel.Tokens;

namespace ECS.Security.AccessTokens.Jwt
{
    public class SsoJwtManager : IJwtManager
    {
        #region Constants and fields
        /// <summary>
        /// Use the below code to generate symmetric Secret Key
        ///     var hmac = new HMACSHA256();
        ///     var key = Convert.ToBase64String(hmac.Key);
        /// </summary>
        private const string Secret = "db3OIsj+BXE9NZDy0t8W3TcNekrF+2d/1sFnWG4HnV8TZY30iTOdtVWJG8abWvB1GlOgJuQZdcF2Luqm/hccMw==";

        // Single repository to query users associated with tokens.
        private readonly IPartialAccountRepository _partialAccountRepository;

        // Instance for Singleton Pattern
        private static SsoJwtManager _instance;
        #endregion

        private SsoJwtManager()
        {
            _partialAccountRepository = new PartialAccountRepository();
        }

        public static SsoJwtManager Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new SsoJwtManager();
                }
                return _instance;
            }
        }    

        public string GenerateToken(string username, int expireMinutes = 15)
        {
            // var partialAccount = _partialAccountRepository.GetSingle(acc => acc.UserName == username);
            var claimsIdentity = new ClaimsIdentity(new List<Claim>()
            {
                new Claim("username", username),
                new Claim("password", "aaa"),
                // TODO @Scott This should not be hardcoded to scholar in case we want to make admins from SSO.
                new Claim("roleType", "public"),
                new Claim("application", "ecs")
            });

            var now = DateTime.UtcNow;

            var symmetricKey = Encoding.UTF8.GetBytes(Secret);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                IssuedAt = now,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature),
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }

        public string GenerateToken(SsoLoginRequestDTO loginDto)
        {
            // var partialAccount = _partialAccountRepository.GetSingle(acc => acc.UserName == username);
            var claimsIdentity = new ClaimsIdentity(new List<Claim>()
            {
                new Claim("username", loginDto.Username),
                new Claim("password", loginDto.Password),
                new Claim("roleType", loginDto.RoleType),
                new Claim("application", "ecs")
            });

            var now = DateTime.UtcNow;

            var symmetricKey = Encoding.UTF8.GetBytes(Secret);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                IssuedAt = now,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature),
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }

        public ClaimsPrincipal GetPrincipal(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            if (!(tokenHandler.ReadToken(token) is JwtSecurityToken))
                throw new Exception("Token is not a compatible JwtSecurityToken type");

            var symmetricKey = Encoding.UTF8.GetBytes(Secret);   

            // The checks that occur during validation of the JWT.
            var validationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                RequireExpirationTime = false,
                IssuerSigningKey = new SymmetricSecurityKey(symmetricKey)
            };

            // The JwtSecurityTokenHandler will check all of the validation parameters to ensure
            // the Jwt is acceptable to use.
            var principal = tokenHandler.ValidateToken(token, validationParameters, out var _);

            return principal;
        }

        public bool ValidateToken(string token, out string username)
        {
            throw new NotImplementedException();
        }

        // Should be deleted... Unless we need multiple JWTs from different headers.
        public List<string> GetJwtsFromHttpHeaders(HttpRequestMessage request)
        {
            var jwtList = new List<string>();
            if (request.Headers.Authorization != null)
            {
                jwtList.Add(request.Headers.Authorization.Parameter);
            }
            return jwtList;
        }

        public string GetAccessToken(HttpRequestMessage request)
        {
            return request.Headers.Authorization.Parameter;
        }

        public Claim GetClaim(IPrincipal principal, string claimType)
        {
            // This line is called multiple times during execution... Figure out a way to get it out.
            var claimsPrincipal = (ClaimsPrincipal) principal;
            return claimsPrincipal.FindFirst(claimType);
        }

        public string GetClaimValue(IPrincipal principal, string claimType)
        {
            // This line is called multiple times during execution... Figure out a way to get it out.
            var claimsPrincipal = (ClaimsPrincipal) principal;
            return claimsPrincipal.FindFirst(claimType).Value;
        }
    }
}
