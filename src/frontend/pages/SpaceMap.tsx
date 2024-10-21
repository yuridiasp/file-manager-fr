import * as React from 'react'

export const SpaceMap = () => {
    return (
        <section id="mapa-espaco" className="mapa-espaco">
            <h1>Mapa de Espaço</h1>
            <div className="gaveta-container">
                <h2>Gaveta A1</h2>
                <div className="mapa-item pasta" data-status="cheio"><i className="fas fa-box"></i> Pasta 1</div>
                <div className="mapa-item pasta" data-status="vazio"><i className="fas fa-box"></i> Pasta 2</div>
            </div>
            <div className="gaveta-container">
                <h2>Gaveta A2</h2>
                <div className="mapa-item pasta" data-status="cheio"><i className="fas fa-box"></i> Pasta 3</div>
                <div className="mapa-item pasta" data-status="vazio"><i className="fas fa-box"></i> Pasta 4</div>
            </div>
            <div className="gaveta-container">
                <h2>Gaveta B1</h2>
                <div className="mapa-item pasta" data-status="cheio"><i className="fas fa-box"></i> Pasta 5</div>
                <div className="mapa-item pasta" data-status="vazio"><i className="fas fa-box"></i> Pasta 6</div>
            </div>
        </section>
    )
}