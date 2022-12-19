import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product () {
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos! 
          Quo molestiae vero excepturi odio fuga et, enim iure! Dolorem assumenda qui veniam iusto. 
          Nisi cum dicta ex id eius?
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}