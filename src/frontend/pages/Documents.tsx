import * as React from 'react'

export const Documents = () => {
    return (
        <section id="documentos" className="documentos">
            <h1>Página de Documentos</h1>
            <div className="busca">
                <label htmlFor="search-doc" className="visually-hidden">Buscar Documento:</label>
                <input type="text" id="search-doc" placeholder="Buscar Documento por Nome ou CPF" />
                <button id="buscar-doc"><i className="fas fa-search"></i></button>
            </div>
            <div className="tabela-container">
                <table className="documentos-tabela">
                    <thead>
                        <tr>
                            <th>Nome do Documento</th>
                            <th>Cliente</th>
                            <th>Gaveta/Pasta</th>
                            <th>Data de Armazenamento</th>
                        </tr>
                    </thead>
                    <tbody id="documentos-tbody">
                        <tr>
                            <td>Contrato Aposentadoria</td>
                            <td>João Silva</td>
                            <td>A1/1</td>
                            <td>01/10/2024</td>
                        </tr>
                        <tr>
                            <td>Petição Inicial</td>
                            <td>Maria Souza</td>
                            <td>B2/2</td>
                            <td>15/09/2024</td>
                        </tr>
                        <tr>
                            <td>Guia INSS</td>
                            <td>Carlos Lima</td>
                            <td>C3/3</td>
                            <td>20/08/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}