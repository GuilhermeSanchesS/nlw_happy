import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estãoesperando a sua visita </p>
                </header>

                <footer>
                    <strong>São Caetano do Sul</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.6239123,-46.5730855]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{x}/{y}.png"/>  */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>         
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#ffffff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap
