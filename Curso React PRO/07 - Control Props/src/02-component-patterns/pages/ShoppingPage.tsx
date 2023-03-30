import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCard } from '../hooks/useShoppingCard';
import { products } from '../data/productos';


export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCard();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* <ProductCard 
                    product={ product1 }
                    className="bg-dark text-white">

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard> */}

                {
                    products.map( product => (
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductTitle className="text-bold" />
                        <ProductButtons
                            className="custom-buttons" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}  
                        />
                    </ProductCard>
                    ))
                }

            </div>

            


            <div className='shopping-cart'>

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '150px'}}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}    
                            />
                        </ProductCard>
                    ))
                }

            
            </div>

            <div>
                <code>
                    { JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>


        </div>
    )
}
