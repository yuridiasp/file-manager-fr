import * as React from 'react'

export const Customers = () => {
    return (
        <section id="clientes" className="clientes">
            <h1>Página de Clientes</h1>
            <div className="busca">
                <label htmlFor="search-client" className="visually-hidden">Buscar Cliente:</label>
                <input type="text" id="search-client" placeholder="Buscar Cliente por Nome ou CPF" />
                <button id="buscar-cliente"><i className="fas fa-search"></i></button>
            </div>
            <div className="tabela-container">
                <table className="clientes-tabela">
                    <thead>
                        <tr>
                            <th>Nome do Cliente</th>
                            <th>CPF</th>
                            <th>Qtd. Documentos</th>
                            <th>Gaveta/Pasta</th>
                        </tr>
                    </thead>
                    <tbody id="clientes-tbody">
                        <tr>
                            <td>João Silva</td>
                            <td>123.456.789-10</td>
                            <td>3</td>
                            <td>A1/1</td>
                        </tr>
                        <tr>
                            <td>Maria Souza</td>
                            <td>987.654.321-00</td>
                            <td>1</td>
                            <td>B2/2</td>
                        </tr>
                        <tr>
                            <td>Carlos Lima</td>
                            <td>159.753.852-99</td>
                            <td>5</td>
                            <td>C3/3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}