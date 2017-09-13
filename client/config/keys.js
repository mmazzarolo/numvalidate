/* @flow */
import utils from '../utils';

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_ENV_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_ENV_PRODUCTION: process.env.NODE_ENV === 'production',
  AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  AUTH0_REDIRECT_URI: process.env.REACT_APP_AUTH0_REDIRECT_URI,
  AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
  PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL || 'http://localhost:1337',
  DASHBOARD_URL:
    process.env.REACT_APP_DASHBOARD_URL ||
    `${process.env.REACT_APP_PUBLIC_URL || 'http://localhost:1337'}/dashboard`,
  DOCS_URL:
    process.env.REACT_APP_DOCS_URL ||
    `${process.env.REACT_APP_PUBLIC_URL || 'http://localhost:1337'}/docs`,
  STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  STRIPE_FREE_PLAN_ID: process.env.REACT_APP_STRIPE_FREE_PLAN_ID,
  STRIPE_PRO_PLAN_ID: process.env.REACT_APP_STRIPE_PRO_PLAN_ID,
  STRIPE_PRO_PLAN_AMOUNT: process.env.REACT_APP_STRIPE_PRO_PLAN_AMOUNT,
  MAX_API_TOKENS_PER_USER: utils.toInt(process.env.REACT_APP_MAX_API_TOKENS_PER_USER, 5),
  RATE_LIMIT_FOR_UNAUTHENTICATED_REQUESTS: utils.toInt(
    process.env.REACT_APP_RATE_LIMIT_FOR_UNAUTHENTICATED_REQUESTS,
    100
  ),
  RATE_LIMIT_FOR_FREE_USER_REQUESTS: utils.toInt(
    process.env.REACT_APP_RATE_LIMIT_FOR_FREE_USER_REQUESTS,
    1000
  ),
  RATE_LIMIT_FOR_PRO_USER_REQUESTS: utils.toInt(
    process.env.REACT_APP_RATE_LIMIT_FOR_PRO_USER_REQUESTS,
    10000
  ),
  EMAIL_ADDRESS: process.env.REACT_APP_EMAIL_ADDRESS,
  GOOGLE_ANALYTICS_TRACKING_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
};