import * as React from 'react'

export const Dashboard = () => {
    return (
        <section id="dashboard" className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                <div className="card card-large">
                    <h3>Total de Clientes</h3>
                    <p>20</p>
                </div>
                <div className="card card-large">
                    <h3>Total de Documentos</h3>
                    <p>100</p>
                </div>
                <div className="card card-half">
                    <h3>Espaço Disponível</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                    <p>45% disponível</p>
                </div>
                <div className="card card-half">
                    <h3>Gavetas Ocupadas</h3>
                    <p>10</p>
                </div>
            </div>
        </section>
    )
}