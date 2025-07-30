import { CollapsedAccordion } from "../../shared/ui/Accordion"
import { DefaultButton } from "../../shared/ui/Button"
import { Typography, Utility, Link } from "@visa/nova-react";
import { VisaChevronRightTiny } from "@visa/nova-icons-react"


export const Preview = ({ selectedComponent }) => {
    return ( 
        <>
        {selectedComponent && (
            <Utility vMarginTop={8}>
                {/* <div>
                    <CollapsedAccordion />
                    <DefaultButton />
                </div> */}
                    <Link href={selectedComponent.url} noUnderline>
                        more about {selectedComponent.tabLabel}
                        <VisaChevronRightTiny />
                    </Link>
                {/* <a href={selectedComponent.url}>see more options here</a> */}
            </Utility>
        )}
        </>
     );
}