import { CollapsedAccordion } from "../../shared/ui/Accordion"
import { DefaultButton } from "../../shared/ui/Button"



export const Preview = ({ data }) => {
    return ( 
        <>
        {data && (
            <div>
                <h1>Here's a preview!</h1>
                <p>Data received: {data.tabLabel}</p>
                <div className="embedded-component">
                    <CollapsedAccordion />
                    <DefaultButton />
                </div>
                <a href={data.url}>see more options here</a>
            </div>
        )}
        </>
     );
}