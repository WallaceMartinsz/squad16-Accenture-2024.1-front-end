import React from 'react'
import styles from './Card1.css'
export const Card1 = (props) => {
  return (
    <div className='divCard1'>
        <div className='divImgCard1'>
            <img src="https://t3.ftcdn.net/jpg/04/34/64/10/360_F_434641018_j60oIFIl0tT4jWVdacBVo9YJHuL77aUg.jpg" alt="" />
            <div>
                <h3>{props.nome}</h3>
                <p>{props.quantidade}</p>  
            </div>
        </div>

        <div className='divContentCard1'>

            <div c>
                <p>{props.preco}</p>
                <input type="button" value='delete' onClick={props.onClick} />
            </div>
            </div>
    </div>
  )
}
