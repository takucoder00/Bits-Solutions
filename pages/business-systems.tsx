import React from 'react'
import BusinessAreas from '../components/businessSystems/businessAreas'
import BusinessHero from '../components/businessSystems/bussinessHero'
import JoinOurBusiness from '../components/businessSystems/joinOurBusiness'
import Layout from '../components/Layout'

export default function BusinessSystems() {
    return (
        <Layout
        title="Bitssolutions | Business Systems"
       desc="We provide business systems that allows your business to standout and beat your competition.">
            <BusinessHero/>
            <BusinessAreas/>
            <JoinOurBusiness/>
        </Layout>
    )
}
