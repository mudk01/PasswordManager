import { expressjwt, GetVerificationKey } from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

export const auth = expressjwt({
    secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-a1fg1o1m.us.auth0.com/.well-known/jwks.json'
  }) as GetVerificationKey,
  audience: 'https://authorize_password.com',
  issuer: 'https://dev-a1fg1o1m.us.auth0.com/',
  algorithms: ['RS256']
});