import React from 'react';

const EnviosPrevio = (envio) => (
  <div className ="EnviosPrevio">
    <div className="category-name">
      {envio.DOrigen}
    </div>
    <div className="contest-name">
      {envio.DDestino}
    </div>

  </div>

);

export default EnviosPrevio;