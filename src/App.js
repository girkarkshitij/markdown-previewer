import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
        };
    }

    updateMarkdown(markdown) {
        this.setState({ markdown });
    }

    render() {
        return (
            <div className='container'>
                <h1>Markdown Previewer</h1>

                <div className='editor-container'>
                    <h2>Editor</h2>
                    <div className='mark-input'>
                        <textarea
                            id='editor'
                            cols='100'
                            rows='20'
                            value={this.state.markdown}
                            onChange={(e) => {
                                this.updateMarkdown(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>

                <div className='previewer-container'>
                    <h2>Previewer</h2>
                    <div id='preview'></div>
                </div>
            </div>
        );
    }
}

export default App;
