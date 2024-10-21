import * as React from 'react'

export const Configurations = () => {
    return (
        <section id="configuracoes" className="configuracoes">
            <h1>Configurações</h1>
            <div className="config-container">
                <form>
                    <div className="config-item">
                        <label htmlFor="theme-color">Cor do Tema:</label>
                        <input type="color" id="theme-color" value="#3498db" />
                    </div>
                    <div className="config-item">
                        <label htmlFor="font-size">Tamanho da Fonte:</label>
                        <input type="number" id="font-size" value="16" min="10" max="24" /> px
                    </div>
                    <div className="config-item">
                        <label htmlFor="lang">Idioma:</label>
                        <select id="lang">
                            <option value="pt-br" selected>Português</option>
                            <option value="en">Inglês</option>
                            <option value="es">Espanhol</option>
                        </select>
                    </div>
                    <div className="config-item">
                        <label htmlFor="items-per-page">Itens por Página:</label>
                        <input type="number" id="items-per-page" value="10" min="5" max="50"/>
                    </div>
                    <div className="config-item">
                        <label htmlFor="capacidade-gaveta">Capacidade por Gaveta:</label>
                        <input type="number" id="capacidade-gaveta" value="50" min="10" max="100"/> documentos
                    </div>
                    <div className="config-item">
                        <label htmlFor="capacidade-pasta">Capacidade por Pasta:</label>
                        <input type="number" id="capacidade-pasta" value="10" min="1" max="20"/> documentos
                    </div>
                </form>
            </div>
        </section>
    )
}