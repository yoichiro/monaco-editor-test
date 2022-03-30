import * as monaco from 'monaco-editor';

window.addEventListener('load', () => {
	monaco.editor.create(document.querySelector('.source-editor'));
});

