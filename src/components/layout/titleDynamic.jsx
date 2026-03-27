import { Helmet } from "react-helmet-async";

function DynamicTitle ({title}) {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}
export default  DynamicTitle