<h1>Auth</h1>

> Project Status: Finished (February 12, 2024)

### Topics

:small_blue_diamond: [Project Description](#project-description)

:small_blue_diamond: [Features](#features)

:small_blue_diamond: [Dependencies](#dependencies)

:small_blue_diamond: [Run App](#run-application)

## Project Description

<p align="justify">
  Built with Next.js, TypeScript, and React, this project focuses on creating a highly secure authentication system using NextAuth/AuthJS. It supports traditional credentials login and registration, as well as integration with external services like Google and GitHub. The system prioritizes security with Two-Factor Authentication during login.
</p>

## Features

:heavy_check_mark: Login and register using traditional credentials or external services (Google and GitHub). Update user info, as well as access current user data on client and server components.

## Dependencies

:warning: Node
<br>
:warning: TypeScript
<br>
:warning: NextJS
<br>
:warning: ReactJS
<br>
:warning: Tailwind

PROJECT IS AVAILABLE: [https://auth-enzobozzani.vercel.app](https://auth-enzobozzani.vercel.app)

:warning: (not all features available in the project. To test all features, follow instructions below to run the app.)

## Run application:

Clone project:

```
git clone https://github.com/EnzoBozzani/taskify-trello-clone.git
```

Install dependencies:

```
npm install
```

Setup environment variables:

```
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

Setup prisma:

```
npx prisma generate
npx prisma db push
```

Run project:

```
npm run dev
```
