import { Plugin, ButtonView } from 'ckeditor5';

class InsertHighlightedQuoteCommand extends Plugin {
    execute() {
        const editor = this.editor;
        const model = editor.model;
        const selection = model.document.selection;

        model.change(writer => {
            const ranges = selection.getRanges();

            for (const range of ranges) {
                const isFlat = range.start.parent === range.end.parent;

                if (isFlat) {
                    const quoteElement = writer.createElement('highlightedQuote');
                    writer.wrap(range, quoteElement);
                } else {
                    // If the range is not flat, handle wrapping each block separately
                    const flatRanges = Array.from(range.getItems())
                        .map(item => writer.createRangeOn(item));

                    for (const flatRange of flatRanges) {
                        const quoteElement = writer.createElement('highlightedQuote');
                        writer.wrap(flatRange, quoteElement);
                    }
                }
            }
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

        editor.commands.add('insertHighlightedQuote', new InsertHighlightedQuoteCommand(editor));

        editor.ui.componentFactory.add('highlightedQuote', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Insert Highlighted Quote',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0L7.5 7.5H0L6 12.5L3.5 20L10 15L16.5 20L14 12.5L20 7.5H12.5L10 0Z" fill="#000000"/></svg>',
                tooltip: true
            });

            view.on('execute', () => {
                editor.execute('insertHighlightedQuote');
                editor.editing.view.focus();
            });

            return view;
        });

        editor.model.schema.register('highlightedQuote', {
            allowWhere: '$block',
            allowContentOf: '$block',
            allowAttributes: ['class']
        });

        editor.conversion.for('downcast').elementToElement({
            model: 'highlightedQuote',
            view: (_, { writer: viewWriter }) => {
                const quote = viewWriter.createContainerElement('blockquote', {
                    class: 'highlighted-quote'
                });

                const strong = viewWriter.createContainerElement('strong');
                viewWriter.insert(viewWriter.createPositionAt(quote, 0), strong);

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
