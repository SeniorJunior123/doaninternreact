import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function PhuongHoang(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('Phượng Hoàng');
    const [hotPH, setHotPH] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotPH(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotPH ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotPH)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default PhuongHoang;