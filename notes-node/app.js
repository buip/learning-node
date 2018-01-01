const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of the note',
	required: true,
	alias: 't'
}

const bodyOptions = {
	describe: 'Body of the note',
	required: true,
	alias: 'b'
}

let command = process.argv[2];
const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body); 
	if (note) {
		notes.logNote(note);
	} else {
		console.log('Note already exists');
	}
} else if (command === 'list') {
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} notes`);
	allNotes.forEach(note => {
		notes.logNote(note);
	});

} else if (command === 'read') {
	let note = notes.getNote(argv.title);
	if (note) {
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? 'Note was not removed' : 'Note was removed';
	console.log(message);
} else {
	console.log('Not recognized');
}