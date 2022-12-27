import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainContainer({children}: any){
    return(
        <>
            <Sidebar/>
            <Header/>
            <div className="main-content">
                {children}
            </div>
        </>
    )
}