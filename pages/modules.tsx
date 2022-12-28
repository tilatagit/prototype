import MainContainer from "../components/MainContainer";
import  {moduleExample}  from "../components/example";
import ModulesRender from "../components/ModulesRender";

export default function Modules() {
    return(<>
        <MainContainer>
            <div className="modules">
                <h1>Launchpad</h1>
                <ModulesRender modulesList={moduleExample} />
                
            </div>
            <div className="modules">
                <h1>Reputation</h1>
                <ModulesRender modulesList={moduleExample} />
            </div>
            <div className="modules">
                <h1>Laws</h1>
                <ModulesRender modulesList={moduleExample} />
            </div>
        </MainContainer>
    </>)
}