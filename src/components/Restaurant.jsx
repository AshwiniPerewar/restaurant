import React from 'react'
import styles from './restaurant.module.css';
export const Restaurant = (props) => {
    console.log(props.res.res)
  return (
    <div className={styles.res}>
        {props.res.res.map((res)=>(
            <div key={res.id}>
                <img src={`${res.image}`}/>
                <div className={styles.info}>
                <h3>{res.name}</h3>
               <p>{res.rating}</p>
                <p>Cost RS.{res.cost} for One</p>
                <li>Up To {res.deliveryTimings}</li>
                <p>{res.paynent}</p>
                <div className={styles.order}> 
                <input></input>
                <button>Order Online > </button>
                </div>
                </div>
            </div>
))}
    </div>
  )
}
