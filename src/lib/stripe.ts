import Stripe from 'stripe'

const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY as string;

export const stripe = new Stripe(STRIPE_PRIVATE_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop'
  }
})