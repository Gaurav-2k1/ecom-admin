import prismadb from '@/lib/prismadb'
import React from 'react'
import BillBoardForm from './components/billboard-form'

const BillboardPage = async ({
    params
}: { params: { billboardId: string } }) => {
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })
    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8'>
                <BillBoardForm initialData={billboard}/>
            </div>
        </div>
    )
}

export default BillboardPage