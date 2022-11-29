import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - MoiNat Plus`}</title>

        </Helmet>
    )
}
export default MetaData