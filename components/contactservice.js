import React, { useState } from 'react'

const pricehaircut=[
    {name:'adult haircut',price:'$39'},
    {name:'kids haircut',price:'$10'},
    {name:'neck shave',price:'$20'},
    {name:'beard grooming',price:'$50'},
    {name:'hair coloring',price:'$25'},
    {name:'beard trim',price:'$30'},
]

export const Contactservice = () => {
const [selectedServ,setSelectedServ]=useState('')
const [price,setPrice]=useState('')

const handleSelect=(e)=>{
    const service=e.target.value
    setSelectedServ(service)

    const foundprice=pricehaircut.find(item=>item.name===service)
    setPrice(foundprice? foundprice.price:'')
}


  return (
    <div className='w-full py-3'>
        <form className='flex flex-col space-y-4'>
            <input type='text' placeholder='Name' className='w-full px-4 py-2 border-2 border-[#746f6f] rounded-lg' />
            <input type='tel' placeholder='Phone number' className='w-full px-4 py-2 border-2 border-[#746f6f] rounded-lg' />
             <div className='flex items-center gap-2 w-full uppercase'>
                   <label > Select your time </label>
            <select>
                <option>-- Select Your Time --</option>
                <option>10h-12h</option>
                <option>12h-14h</option>
                <option>14h-16h</option>
                <option>16h-18h</option>
                <option>18h-20h</option>
                <option>20h-22h</option>
            </select>
             </div>
             <div className='flex flex-col space-y-2'>
                <div className='flex items-center w-full gap-3 uppercase'>
                <label>Select your service</label>
                <select
                value={selectedServ}
                onChange={handleSelect}>
                    <option>-- Select Your Service --</option>
                    {
                        pricehaircut.map((items,index)=>(
                            <option key={index} value={items.name}>
                                {items.name}
                            </option>
                        ))
                    }
                </select>
             </div>
             {
                price &&(
                    <p className='text-xl font-bold text-green-500'>
                        Price: {price}
                    </p>
                )
             }
             </div>
                
        </form>

    </div>
  )
}
