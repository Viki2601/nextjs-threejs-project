import CareerDetails from '@/components/Careers/CareerDetails'
import React from 'react'

export default function ({params}) {
    const {slug} = params;
    return <CareerDetails slug={slug} />
}
