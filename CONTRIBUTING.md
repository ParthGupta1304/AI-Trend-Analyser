# 🤝 Contributing to SentiMax

Thank you for your interest in contributing to SentiMax! This guide will help you get started.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, Node version, browser)

### 💡 Suggesting Features

Feature requests are welcome! Please provide:

- **Clear description** of the feature
- **Use case** - why is this needed?
- **Possible implementation** (if you have ideas)
- **Alternative solutions** you've considered

### 🔧 Code Contributions

1. **Find an issue to work on** or create a new one
2. **Comment on the issue** to let others know you're working on it
3. **Fork the repository**
4. **Create a branch** from `main`
5. **Make your changes**
6. **Submit a pull request**

---

## Development Setup

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- Git

### Setup Steps

1. **Fork and clone**

   ```bash
   git clone https://github.com/YOUR-USERNAME/AI-Trend-Analyser.git
   cd "AI Trend Analyser"
   ```

2. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/ParthGupta1304/AI-Trend-Analyser.git
   ```

3. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```

4. **Start development environment**

   ```bash
   # Start PostgreSQL
   docker-compose up -d postgres

   # Set up environment
   cp .env.local.example .env.local
   # Edit .env.local with your API keys

   # Push database schema
   npm run db:push

   # Start dev server
   npm run dev
   ```

---

## Pull Request Process

### Before Submitting

1. **Update your branch**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes**

   ```bash
   npm run build    # Ensure build succeeds
   npm run lint     # Check for linting errors
   ```

3. **Commit your changes** following [commit guidelines](#commit-guidelines)

### Submitting PR

1. **Push to your fork**

   ```bash
   git push origin your-branch-name
   ```

2. **Create Pull Request** on GitHub

3. **Fill out the PR template**

   - Description of changes
   - Related issue number
   - Type of change (bugfix, feature, docs, etc.)
   - Screenshots (if UI changes)

4. **Address review comments**

### PR Requirements

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)
- [ ] Documentation updated (if needed)
- [ ] All CI checks pass

---

## Coding Standards

### TypeScript

```typescript
// ✅ Good
interface User {
  id: number;
  email: string;
  name: string;
}

const fetchUser = async (id: number): Promise<User> => {
  // Implementation
};

// ❌ Bad
const fetchUser = async (id: any): Promise<any> => {
  // Avoid using 'any'
};
```

### React Components

```typescript
// ✅ Good - Functional component with types
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  onClick,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

// ❌ Bad - Missing types
export function Button({ onClick, children, variant }) {
  // ...
}
```

### File Naming

- **Components**: PascalCase - `Button.tsx`, `UserProfile.tsx`
- **Utilities**: camelCase - `formatDate.ts`, `apiClient.ts`
- **Types**: PascalCase - `types.ts`, `User.ts`
- **API Routes**: lowercase - `route.ts`

### Directory Structure

```
frontend/
├── app/
│   ├── (auth)/           # Route groups
│   ├── api/              # API routes
│   ├── components/       # Shared components
│   └── page.tsx          # Pages
├── db/
│   └── schema.ts         # Database schema
├── lib/                  # Utility functions
└── public/               # Static assets
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
feat(auth): add password reset functionality

# Bug fix
fix(api): resolve database connection timeout

# Documentation
docs(readme): update setup instructions

# Refactor
refactor(components): extract reusable Button component
```

### Best Practices

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Keep subject line under 50 characters
- Capitalize the subject line
- No period at the end of subject line
- Separate subject from body with blank line
- Wrap body at 72 characters
- Explain what and why, not how

---

## Code Review Process

### As an Author

- Respond to all comments
- Make requested changes promptly
- Ask for clarification if needed
- Be open to feedback

### As a Reviewer

- Be respectful and constructive
- Explain the "why" behind suggestions
- Approve when ready, request changes if needed
- Test the changes locally if possible

---

## Areas for Contribution

### High Priority

- [ ] Add unit tests for API routes
- [ ] Implement user profile page
- [ ] Add sentiment analysis features
- [ ] Improve error handling
- [ ] Add rate limiting to API routes

### Medium Priority

- [ ] Dark mode support
- [ ] Email verification
- [ ] Password reset flow
- [ ] User settings page
- [ ] Export chat history

### Documentation

- [ ] API documentation
- [ ] Component documentation
- [ ] Architecture diagrams
- [ ] Video tutorials

---

## Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Chat**: Join our community (link coming soon)

---

## Recognition

Contributors will be:

- Listed in [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- Mentioned in release notes
- Given credit in documentation

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">

**Thank you for contributing to SentiMax! 🎉**

Every contribution, no matter how small, helps make this project better.

</div>
