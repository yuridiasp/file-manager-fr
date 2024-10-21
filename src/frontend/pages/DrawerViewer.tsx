import * as React from 'react'

export const DrawerViewer = () => {
    return (
        <section id="gavetas" className="gavetas">
            <h1>Visualização de Gavetas</h1>
            <div className="gavetas-container">
                <div className="gaveta" data-gaveta="A1">Gaveta A1</div>
                <div className="gaveta" data-gaveta="A2">Gaveta A2</div>
                <div className="gaveta" data-gaveta="A3">Gaveta A3</div>
                <div className="gaveta" data-gaveta="B1">Gaveta B1</div>
                <div className="gaveta" data-gaveta="B2">Gaveta B2</div>
                <div className="gaveta" data-gaveta="B3">Gaveta B3</div>
                <div className="gaveta" data-gaveta="C1">Gaveta C1</div>
                <div className="gaveta" data-gaveta="C2">Gaveta C2</div>
                <div className="gaveta" data-gaveta="C3">Gaveta C3</div>
            </div>
            <div id="pastas-container" className="hidden"></div>
            <div id="documentos-container" className="hidden"></div>
            <button id="voltar-gavetas" className="hidden">Voltar para Gavetas</button>
            <button id="voltar-pastas" className="hidden">Voltar para Pastas</button>
        </section>
    )
}