
import { useState } from "react";
import CardProducto from '../components/cardProducto';
import SeccionCategoria from '../components/seccionCategoria';

function Productos({ agregar }) {

    // Totales individuales
    const [pilsener, setPilsener] = useState(0);
    const [club, setClub] = useState(0);
    const [caran, setCaran] = useState(0);

    const [kachitos, setKachitos] = useState(0);
    const [papitas, setPapitas] = useState(0);
    const [cueritos, setCueritos] = useState(0);

    const [cocacola, setCocacola] = useState(0);
    const [pepsi, setPepsi] = useState(0);
    const [sevenup, setSevenup] = useState(0);

    const [kipitos, setKipitos] = useState(0);
    const [perlitas, setPerlitas] = useState(0);
    const [chicles, setChicles] = useState(0);

    // Calcular total general
    let totalGeneral = pilsener + club + caran +
        kachitos + papitas + cueritos +
        cocacola + pepsi + sevenup +
        kipitos + perlitas + chicles;

    return (
        <div className="bg-info p-3 min-vh-100">

            <h3 className="mb-4 text-center">
                Mi lista de productos
            </h3>

            {/* LICORES */}
            <div className="row g-3 mb-4">

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Pilsener"
                        precio={5}
                        disponible={false}
                        stock={16}
                        onTotalChange={(nombre, total) => setPilsener(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Club"
                        precio={6}
                        disponible={true}
                        stock={6}
                        onTotalChange={(nombre, total) => setClub(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Caran"
                        precio={10}
                        disponible={true}
                        stock={4}
                        onTotalChange={(nombre, total) => setCaran(total)}
                        agregar={agregar}
                    />
                </div>

            </div>

            <h3 className="mb-4">
                Secciones
            </h3>

            {/* SNACKS */}
            <SeccionCategoria titulo="Snacks">

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Kachitos"
                        precio={0.5}
                        disponible={true}
                        stock={30}
                        onTotalChange={(nombre, total) => setKachitos(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Papitas"
                        precio={1}
                        disponible={true}
                        stock={5}
                        onTotalChange={(nombre, total) => setPapitas(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Cueritos"
                        precio={1.5}
                        disponible={true}
                        stock={25}
                        onTotalChange={(nombre, total) => setCueritos(total)}
                        agregar={agregar}
                    />
                </div>

            </SeccionCategoria>

            {/* BEBIDAS */}
            <SeccionCategoria titulo="Bebidas">

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Coca-Cola"
                        precio={1}
                        disponible={true}
                        stock={30}
                        onTotalChange={(nombre, total) => setCocacola(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Pepsi"
                        precio={1.5}
                        disponible={true}
                        stock={5}
                        onTotalChange={(nombre, total) => setPepsi(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="7-UP"
                        precio={0.75}
                        disponible={true}
                        stock={25}
                        onTotalChange={(nombre, total) => setSevenup(total)}
                        agregar={agregar}
                    />
                </div>

            </SeccionCategoria>

            {/* DULCES */}
            <SeccionCategoria titulo="Dulces">

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Kipitos"
                        precio={0.25}
                        disponible={true}
                        stock={10}
                        onTotalChange={(nombre, total) => setKipitos(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Perlitas"
                        precio={0.05}
                        disponible={true}
                        stock={5}
                        onTotalChange={(nombre, total) => setPerlitas(total)}
                        agregar={agregar}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <CardProducto
                        nombre="Chicles"
                        precio={0.5}
                        disponible={true}
                        stock={25}
                        onTotalChange={(nombre, total) => setChicles(total)}
                        agregar={agregar}
                    />
                </div>

            </SeccionCategoria>

            {/* TOTAL GENERAL */}
            <div className="alert alert-success mt-4 text-center">
                <h4 className="mb-0">
                    Total de productos: ${totalGeneral.toFixed(2)}
                </h4>
            </div>

        </div>
    );
}

export default Productos;
