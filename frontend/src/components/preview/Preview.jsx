export const Preview = ({ data }) => {
    return ( 
        <>
        <h1>preview component</h1>
        {data && (
            <div>
                <p>Data received: {data.tabLabel}</p>
            </div>
        )}
        </>
     );
}