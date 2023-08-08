# Full Stack MERN Next.js 13 Threads App

- This is a fullstack thread app with next js, React, Next JS, TypeScript, MongoDB, shadcn ui

- This Threads app, Next.js 13 app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!

- to create a new next app `npx create-next-app@latest threads` - select the option with the tailwindcss

### Features

- Next.js 13.4 with Server Side Rendering
- MongoDB handling of complex schemas, multiple data population
- Create beautiful layouts with TailwindCSS
- Use Clerk for authentication
- Handle file uploads with UploadThing
- Explore Shadcn components
- Listen to real-time events with webhooks
- Understand middleware, API actions, and authorization
- Explore & integrate new Next.js layout route groups
- Validate data with Zod
- Manage forms with react hook form
- Create reusable components
- Build a solid application architecture
- Deploy the application and more!

### Dependencies

- clerk for the authentication `npm i @clerk/nextjs`
  - `npm i @clerk/themes` - for the clerk themes, dark mode, we can make set the base appearance as dark theme, for the user button
  - then add the mw for our routes (refer clerk docs for the code), which can be used to enable the webhook for our org ex - "api/webhooks/clerk" and for the root
- tailwind animate for some animations effects `npm i tailwindcss-animate`
- upload thing `npm i @uploadthing/react uploadthing` for uploading the profile imgs
- mongo db `npm i mongoose`
- svix for webhooks `npm i svix`
- the shadcn ui `npx shadcn-ui@latest init` then add the ui comps we want
  - `npx shadcn-ui@latest add form input textarea tabs`

## Server side rendered page

- instead of csr rendering, app calling from the client side to the backend (such as node server), which has the api/ endpoints then call/ fetch the data from the db,
- now with this new next approach we can literally eliminate the node js part, instead we can make the entire app SSR, so now have our comps to call the actions (js fns) and then we there we can make a call to the db to fetch the data.
- and now with this approach we can stay in the ssr (next js app), the advantage of this is we re now only writing the js code and not making any node js script

## no prisma (or any ORM)

- i haven't used prisma in this project, instead i wrote all the schema(for db) for the user, thread and community

## webhooks

- while creating the community comp, we use the webhook.
- the webhook is an event thats gon to happen once something gets triggered and its gon to sen the req at the same time
- we can create a org in the clerk and how to append the post, once they (org) are made as part of our org ? to do that we gon ve webhooks waiting and listening for the events to trigger (just like the event listening for the stripe payment)

  - so by using the webhooks we can listen for events in clerk so we can make additional actions and modify our db accordingly.

- as per the clerk documentation, the recommended way to sync the data b/w clerk and our app's backend, is via webhooks. and it is updated every time an event happens in our clerk instance
- and bts they (clerk) uses "Svix" package to power the webhooks (which will provide the verifyable requests)
- and the webhook endpoint (in clerk) is https://app.vercel.app/api/webhook/clerk

## Deployment

- the app was deployed in vercel and the deployed url is [here](https://threads-chatx.vercel.app)