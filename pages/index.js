import Layout from "../component/Layout"
import { habilidades, experiencias } from "../profile"

const index = () => (
<Layout>
{/**Header card */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="Logo sm86.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1>Martin Figueroa</h1>
                        <p>Full Stack Developer con formación como Diseñador Web. Experiencia trabajando en NodeJS, React,
Redux, SQL entre otras tecnologías del sector. Realicé dos App de manera individual y una App, cuya temática es la salud, de manera grupal. Con pensamiento creativo, resolución de problemas, trabajo en equipo, comunicación y autonomía.
</p>
                        <a href="/contratane">Contratame</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/**Segunda seccion */}
    <div className="row py-4">
        <div className="col-md-4">
            <div className="card bg-ligth">
                <div className="card body">
                    <h1>Habilidades</h1>
                       {
                        habilidades.map(({habilidades,percentage},i)=>(
                                <div className="py-2" key={i}>
                                    <h5>{habilidades}</h5>
                                        <div className="progress">
                                        <div 
                                        className="progress-bar" 
                                        role="progressbar"
                                        style={{width:`${percentage}%`}}
                                        area-valuenow="50"
                                        area-valuemin="0"
                                        area-valuemax="100"
                                        >
                                    </div>
                                </div>
                            </div>
                        ))
                       }
                        
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-ligth">
                <div className="card body">
                    <h1>Experiencia</h1>
                    <ul>
                        {
                            experiencias.map(({titulo, donde, descripcion, url, fecha},i)=>(
                                <li key={i}>
                                     <h5>{titulo}</h5> 
                                     <h6>{donde}</h6>
                                     <h6>{fecha}</h6>
                                     <p>{descripcion}</p>
                                     <h6>{url}</h6>
                                     <br/>     
                                </li>    
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/**Portfolio */}
</Layout>

)

export default index