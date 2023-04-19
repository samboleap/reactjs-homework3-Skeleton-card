import { useState, useEffect } from 'react';
import { SetLoading } from './Skeleton';

export const RenderCard = () => {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState([true]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()).then(data => {
            setCard(data);
            setLoading(false)
        });
    }
    useEffect(() => {
        fetchCards();
    }, [])

    return loading ? (
        
        <div class="container"> 
            <div class="row">
                <SetLoading/>
            </div>  
        </div>
           
    ) : (
        card.map(item => (
            <div class="col-12 col-lg-3 col-sm-6 col-md-4 p-2">
            <div class="card h-100" style={{width: "18rem"}} >
                <img src={item.images} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                </div>
            </div>
            </div>
        ))
    )
}
