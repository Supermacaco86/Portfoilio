import Layout from "../component/Layout"
import { habilidades, experiencias, proyectos } from "../profile"
import LeguajeSelector from "../component/LenguajeSelector";


export default function index (props) {
      const {title}= props;
    return(
   
<Layout>
{/**Header card */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="Logo_celeste.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1>Martin Figueroa</h1>
                        <p>{title.descripcion}</p>
                        <a href="https://www.linkedin.com/in/martin--figueroa/ " target="_blank" className="btn btn-secondary">{title.contratame}</a>
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
                    <h1>{title.habilidades}</h1>
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
                    <h1>{title.experiencia}</h1>
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
    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">{title.proyecto}</h1>
                    </div>
                    {
                            proyectos.map(({titulo, donde, descripcion, url, imagen, fecha},i)=>(
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${imagen}`} alt="" className="card-img-top"/>
                                            </div>
                                            <div className="card-body">
                                                <h5>{titulo}</h5> 
                                                <h6>{donde}</h6>
                                                <h6>{fecha}</h6>
                                                <p>{descripcion}</p>
                                                <h6>{url}</h6>
                                            </div>
                                        </div>    
                                    </div>
                            ))
                        }
                </div>
            </div>
        </div>
    </div>
</Layout>

)
 }

 export async function getStaticProps ({ locale }){
    console.log(locale)
    const response = await import(`../lang/${locale}.json`);
    return{
        props: { title:response.default.title}
    };
}