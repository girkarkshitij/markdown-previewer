import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Markdown Previewer</h1>

                <div className='editor-container'>
                    <h2>Editor</h2>
                    <div className='mark-input'>
                        <textarea id='editor' cols='100' rows='20'></textarea>
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
