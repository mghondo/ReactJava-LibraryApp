export const oktaConfig = {
    clientId: '0oaifzt7ygXs5uudm5d7',
    issuer: 'https://dev-55016867.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}