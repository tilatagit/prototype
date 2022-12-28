import { IModule } from "../models"

interface IModulesListProps {
    modulesList: IModule[]
}

export default function ModulesRender({modulesList}: IModulesListProps) {
    const modules = modulesList.map((module) => {
        return (
            
            <div className="module">
                <div className='module-icon ' id={"color-" + Math.floor(Math.random() * 5).toString() }>{module.name[0]}</div>
                <h3>{module.name}</h3>
                <p>{module.amountProjects} projects</p>
                <div className="module-button-contailer">
                    <button>View</button><button>Connect</button>
                </div>
            </div>
        )
    })

    return (<div className="module-container">

        {modules}
    </div>)
}