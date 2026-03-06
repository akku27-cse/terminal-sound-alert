# Contributing to Terminal Sound Alerts

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/command-audio-notifier.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Setup

See [SETUP.md](SETUP.md) for detailed setup instructions.

## Code Style

- Use TypeScript with strict mode enabled
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Making Changes

1. Make your changes in the `src/` directory
2. Test your changes thoroughly
3. Update documentation if needed
4. Run `npm run compile` to ensure no errors
5. Run `npm run lint` to check code style

## Testing

1. Press `F5` to launch the Extension Development Host
2. Test all affected functionality
3. Verify on multiple platforms if possible (Windows, macOS, Linux)
4. Check the Output panel for errors

## Commit Guidelines

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 50 characters
- Add detailed description if needed

Examples:
```
Add support for custom warning keywords
Fix volume control on Linux systems
Update README with new configuration options
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the CHANGELOG.md with your changes
3. Ensure all tests pass and code compiles
4. Submit a pull request with a clear description of changes
5. Link any related issues

## Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Checklist
- [ ] Code compiles without errors
- [ ] Code follows project style guidelines
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
```

## Feature Requests

Feature requests are welcome! Please:

1. Check if the feature already exists or is planned
2. Open an issue with the "enhancement" label
3. Describe the feature and its use case
4. Explain why it would be valuable

## Bug Reports

When reporting bugs, please include:

1. VS Code version
2. Extension version
3. Operating system
4. Steps to reproduce
5. Expected behavior
6. Actual behavior
7. Screenshots or logs if applicable

## Code Review

All submissions require review. We aim to:

- Provide constructive feedback
- Respond within a few days
- Merge quality contributions promptly

## Questions?

Feel free to open an issue for questions or discussions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
