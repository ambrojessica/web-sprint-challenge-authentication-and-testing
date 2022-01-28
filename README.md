# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Build your database executing `npm run migrate`.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

When it comes to sessions it first begins by the user logging in and the data gets saved in the server. When it comes to authentication and sessions, it will start by verifying the session data that was stored in the server from when the user logged in the first time. However, with JSON Web tokens once a user logs in the data gets saved in the localStorage so when the user logs in the unique key created by the server then sends it back to the client and once the encrypted token is received that means the user has been authenticated. For both tokens once the user has logged out the token is then deleted.

2. What does `bcryptjs` do to help us store passwords in a secure manner?

Bcryptjs helps us turn the users password and hashes it, or  in other words turns it into a string of random numbers. This is done by using an algorithm and each time it is created it makes it harder for attackers to retrieve these passwords.

3. How are unit tests different from integration and end-to-end testing?

Unit tests is testing the components or any individual parts of our code, the outcome would be to validate those individual parts of our application.
Integration testing is testing the components that are grouped together or combined, the purpose of this is to see if there are any errors when the components interact with each other.
End to end testing are tests that start from top to bottom, this test goes through the functionality of the entire code, the purpose of this testing is making sure the code runs smooth and doesn't explode.

4. How does _Test Driven Development_ change the way we write applications and tests?

Using Test Driven Development is such a helping tool because we are able to check our code and make sure it is functioning, we begin by creating and executing the tests, we want them to fail in the beginning because if it is true it might be a false positive, then we make sure that the tests are passing and lastly we then clean up our code making our applications more concise. 

