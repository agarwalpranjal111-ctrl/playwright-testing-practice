# Playwright Testing Practice

My first automated browser tests, written with Playwright and run automatically with GitHub Actions.

I'm new to test automation. I built this to learn how testing and CI/CD work, and to apply for a software engineering intern role focused on quality and reliability.

## What this project does

- Tests a practice todo app (https://demo.playwright.dev/todomvc) with Playwright
- Runs the tests automatically on every push using GitHub Actions
- Saves a test report after every run

## Tests (4)

| Test | What it checks |
|---|---|
| Add a todo | A new task appears on the list |
| Add three todos | Three tasks all appear on the page |
| List count | The list shows exactly 2 items after adding 2 |
| Completed tab | Only ticked tasks show in the Completed tab |
Plus 3 tests for my own mini app (`tests/mini.spec.ts`).

## How to run it

```
npm install
npx playwright install firefox
npx playwright test --project=firefox
```

## What I learned

- Writing tests with `goto`, `fill`, `press`, and `expect`
- Why a test needs a check, or it can never fail
- Reading a failing test and finding the line that caused it
- Telling an app bug apart from an environment problem (for example, the internet dropping)
- Setting up CI so tests run on every push
- Breaking a test on purpose and watching CI catch it (red cross), then fixing it (green tick)

## What I want to learn next

- Page objects, to avoid repeating selectors
- Saved login state and API setup for faster tests
- Finding flaky tests
- Error alerting

## Bug experiment

I built a small todo app (`app/index.html`) with 3 tests. Then I put bugs into it on purpose, to check whether my tests would catch them.

| Bug I added | Caught? | Which test caught it |
|---|---|---|
| Counter adds 2 instead of 1 | Yes | counter shows 2 items after adding 2 |
| Empty tasks allowed | Yes | empty task is not added |

**What I learned:** a test only protects what it checks. If I had written no test for empty tasks, that bug would have gone through unnoticed. Deciding what to test matters as much as writing the test.