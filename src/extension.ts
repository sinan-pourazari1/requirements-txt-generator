import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


    // Listen to the save event for Python files
    vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        if (document.languageId === 'python') {
            generateRequirementsTxt();
        }
    });
}

export function deactivate() {

}

async function generateRequirementsTxt() {
    const terminal = vscode.window.createTerminal('requirements-txt-generator');
    terminal.sendText("pipreqs --force");
    vscode.window.showInformationMessage('Generating requirements.txt using pipreqs...');
	await new Promise(resolve => setTimeout(resolve, 3000));
	terminal.hide();
	terminal.dispose();
}
