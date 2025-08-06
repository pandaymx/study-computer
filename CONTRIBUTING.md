# Contributing to study-computer

First of all, thank you very much for taking the time to contribute to study-computer! It is people like you that make study-computer such a great project.

We welcome all forms of contributions, including but not limited to:

-   Reporting bugs
-   Submitting feature requests
-   Writing or improving documentation
-   Submitting pull requests

## Code of Conduct

Before contributing to this project, please take a moment to read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). We expect all contributors to adhere to this code to ensure a friendly and inclusive community.

## How to Contribute

### Reporting Bugs

If you find a bug in the project, please submit an issue on GitHub Issues. When submitting an issue, please provide as much of the following information as possible:

-   **A clear title and description**: Briefly describe the problem.
-   **Steps to reproduce**: Detail how to reproduce the bug.
-   **Expected behavior and actual behavior**: Explain what you expected to happen and what actually happened.
-   **Screenshots or screen recordings** (if applicable): This can help us better understand the problem.

### Submitting Feature Requests

If you have a suggestion for a new feature or improvement, please also submit an issue on GitHub Issues. Please describe your suggestion in detail in the issue and explain what problem it solves.

### Submitting Pull Requests

We warmly welcome direct contributions to the code or documentation! Please follow these steps:

1.  **Fork this repository**: Click the "Fork" button in the upper right corner of the repository.
2.  **Clone the repository to your local machine**:
    ```bash
    git clone [https://github.com/your-username/study-computer.git](https://github.com/your-username/study-computer.git)
    cd study-computer
    ```
3.  **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
    or
    ```bash
    git checkout -b fix/your-bug-fix-name
    ```
4.  **Install dependencies**: This project uses `yarn` or `bun` as the package manager.
    ```bash
    yarn install
    ```
    or
    ```bash
    bun install
    ```
5.  **Make your changes**: Make your changes in your favorite code editor. You can start the local development server with the following command:
    ```bash
    yarn start
    ```
    or
    ```bash
    bun run start
    ```
6.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "feat: Add some feature"
    ```
7.  **Push your branch to GitHub**:
    ```bash
    git push origin feature/your-feature-name
    ```
8.  **Create a Pull Request**: On GitHub, you will see a prompt to create a pull request. Please fill in the relevant information and submit it.

## Documentation Conventions

-   All documentation is located in the `docs/` directory.
-   Please ensure your documentation is clear, easy to understand, and follows the overall style of the project.
-   If you add new documentation, please make sure to configure it accordingly in the `sidebars.ts` file.

Thank you again for your contribution!