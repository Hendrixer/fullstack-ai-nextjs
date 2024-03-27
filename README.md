[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)][fem]

This is a companion repo for the [Build an AI Powered Fullstack App with Next.js, v3][course] course on [Frontend Masters][fem]. This application is built from scratch throughout the course. The `main` branch contains a final version of the application similar to the one built in the course. The other branches in the repo are code checkpoints which can be used as a starting point for specific lessons.

## Getting Started

The [course][course] covers the full process of building and deploying the application. The steps below summarize a few of the key requirements.

### Create a new Next.js Project

We recommend using Node version `18.x.x` and Next.js version `13.4.5` for this course.

```bash
npx create-next-app@13.4.5 mood
npm run dev
```

### Install Clerk

Clerk is the third-party authentication provider for the application

```bash
npm i @clerk/nextjs
```

**Add Clerk secrets to .env.local**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/journal
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user
```

> [!IMPORTANT]  
> PlanetScale has removed their free tier offering. [More info](https://planetscale.com/docs/concepts/planetscale-plans). You can still complete the course with a paid PlanetScale plan. See below for alternatives.

### PlanetScale Serverless SQL Database

1. Create a [PlanetScale Database](https://planetscale.com/)
2. Install [pscale CLI](https://github.com/planetscale/cli#installation)
3. Use the CLI to connect to the DB: `pscale auth login`
4. Create a `dev` database branch: `pscale branch create mood dev`
5. Start the connection: `pscale connect mood dev --port 3309`

### PlanetScale Alternatives

There are several serverless database alternatives to PlanetScale include [Neon](https://neon.tech/docs/guides/prisma), [Turso](https://docs.turso.tech/sdk/ts/orm/prisma), [Supabase](https://supabase.com/partners/integrations/prisma), and [CockroachDB](https://www.cockroachlabs.com/docs/v23.2/build-a-nodejs-app-with-cockroachdb-prisma). 

Neon has a branching feature similar to PlanetScale that will be in closer alignment to this course. Follow the [Prima + Neon setup guide](https://neon.tech/docs/guides/prisma).

### Prisma ORM

1. Install Prisma Client: `npm i @prisma/client`
2. Install Prisma as dev dependency: `npm i prisma --save-dev`
3. Initialize Prisma: `npx prisma init`

### OpenAI API Account Setup

1. Create an [openai.com](https://openai.com/) account
2. Select the `API` App.
3. Create an [API Key](https://platform.openai.com/account/api-keys)
4. Copy/Paste the key into your into `.env.local` using the variable `OPENAI_API_KEY`


[fem]: https://frontendmasters.com
[course]: https://frontendmasters.com/courses/fullstack-app-next-v3/
