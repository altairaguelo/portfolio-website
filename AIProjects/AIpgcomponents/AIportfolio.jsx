import React from "react";
import AIdata from "../AIpgdata/AIdata";
import AIportfolioitem from "./AIportfolioitem";

function AIportfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {AIdata.map(project =>(
                    <AIportfolioitem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default AIportfolio;