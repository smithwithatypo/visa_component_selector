import { CollapsedAccordion } from "../../shared/ui/Accordion"
import { DefaultButton } from "../../shared/ui/Button"
import { Typography, Utility } from "@visa/nova-react";


export const Preview = ({ data }) => {
    return ( 
        <>
        {data && (
            <Utility>
                <Typography >Here's a preview!</Typography>
                <p>Data received: {data.tabLabel}</p>
                <div>
                    <CollapsedAccordion />
                    <DefaultButton />
                </div>
                <a href={data.url}>see more options here</a>
            </Utility>
        )}
        </>
     );
}