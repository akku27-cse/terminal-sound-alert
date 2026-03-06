# Changelog

All notable changes to the "TerminalTone" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-01

### Added
- Initial release of TerminalTone
- Play success sound when terminal command exits with code 0
- Play failure sound when terminal command exits with non-zero code
- Play warning sound when command succeeds but output contains warning keywords
- Configurable sound files for success, failure, and warning
- Volume control setting (0.0 to 1.0)
- Enable/disable sound notifications setting
- Cross-platform support (Windows, macOS, Linux)
- Output channel logging for debugging
- Warning keyword detection: warning, warn, deprecated, WARN, WARNING, DEPRECATED

### Features
- Terminal state monitoring
- Exit code detection
- Output scanning for warning keywords
- Modular architecture with separate sound player and terminal watcher
- TypeScript implementation with strict type checking
- Comprehensive error handling

### Supported Platforms
- Windows (PowerShell with Windows Media Player)
- macOS (afplay)
- Linux (paplay, mpg123, aplay)

## [Unreleased]

### Planned Features
- Custom warning keyword configuration
- Sound preview in settings
- Multiple sound theme support
- Per-command sound customization
- Terminal output capture improvements
- Notification badges
- Sound duration configuration
