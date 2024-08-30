// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import Command from '@ckeditor/ckeditor5-core/src/command';
import { Command, Plugin, ButtonView } from 'ckeditor5';

// highlighted-quote-plugin.js
// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class InsertHighlightedQuoteCommand extends Plugin {
    execute() {
        this.editor.model.change(writer => {
            const quoteElement = writer.createElement('highlightedQuote');

            // Insert the element into the document
            this.editor.model.insertContent(quoteElement);

            // Place the cursor inside the new element
            writer.setSelection(quoteElement, 'in');
        });
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const isAllowed = model.schema.checkChild(selection.focus.parent, 'highlightedQuote');

        this.isEnabled = isAllowed;
    }
}

export default class HighlightedQuotePlugin extends Plugin {
    init() {
        const editor = this.editor;

        // Register the command
        editor.commands.add('insertHighlightedQuote', new InsertHighlightedQuoteCommand(editor));

        // Register the UI component
        editor.ui.componentFactory.add('highlightedQuote', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Insert Highlighted Quote',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0L7.5 7.5H0L6 12.5L3.5 20L10 15L16.5 20L14 12.5L20 7.5H12.5L10 0Z" fill="#000000"/></svg>',
                tooltip: true
            });

            // Execute the command when the button is clicked
            view.on('execute', () => {
                editor.execute('insertHighlightedQuote');
                editor.editing.view.focus();
            });

            return view;
        });

        // Define the schema for the new element
        editor.model.schema.register('highlightedQuote', {
            allowWhere: '$block',
            allowContentOf: '$block',
            allowAttributes: [ 'class' ]
        });

        // Define how the element will be rendered in the view
        editor.conversion.for('downcast').elementToElement({
            model: 'highlightedQuote',
            view: (modelElement, { writer: viewWriter }) => {
                const quote = viewWriter.createContainerElement('blockquote', {
                    class: 'highlighted-quote'
                });

                return quote;
            }
        });

        editor.conversion.for('upcast').elementToElement({
            view: {
                name: 'blockquote',
                classes: 'highlighted-quote'
            },
            model: 'highlightedQuote'
        });
    }
}

