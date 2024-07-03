# Requirements.txt Generator

This VS Code extension automatically generates a `requirements.txt` file for Python projects using `pipreqs`.

## Features

- Automatically runs `pipreqs .` to generate `requirements.txt` when a Python file is saved.
- Disposes of the terminal automatically after generating the file.

## Usage

1. Install the extension in VS Code.
2. Open or create a Python project.
3. Save any Python file (`.py`).
4. The extension will automatically generate/update `requirements.txt` in the background.

## Commands

- **Generate requirements.txt**: Manually triggers the generation of `requirements.txt` using the Command Palette or key bindings.

## Notes

- Ensure `pipreqs` is installed globally (`pip install pipreqs`) or locally (`pip install pipreqs --user`) depending on your environment.
