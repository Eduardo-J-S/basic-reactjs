import React from 'react';
import ReactDOM from 'react-dom';

const estrutura = 
<div>
    <h1>Meu primeiro render</h1>
    <p>Testando</p>
</div>

ReactDOM.render(
    estrutura,
    document.getElementById('root')
);
