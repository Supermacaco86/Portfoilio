import Layout from "../component/Layout"

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
</Layout>

)

export default index