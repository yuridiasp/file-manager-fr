import * as React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="nav-link"><i className="fas fa-chart-line"></i> Dashboard</Link></li>
                <li><Link to="/drawerviewer" className="nav-link"><i className="fas fa-folder-open"></i> Gavetas</Link></li>
                <li><Link to="/customers" className="nav-link"><i className="fas fa-users"></i> Clientes</Link></li>
                <li><Link to="/documents" className="nav-link"><i className="fas fa-file-alt"></i> Documentos</Link></li>
                <li><Link to="/spacemap" className="nav-link"><i className="fas fa-map-marker-alt"></i> Mapa de Espaço</Link></li>
                <li><Link to="/configuratios" className="nav-link"><i className="fas fa-cog"></i> Configurações</Link></li>
            </ul>
        </nav>
    )
}