import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CoffeeEnum, CoffeeType } from '../../@types/Coffee'
import * as S from './styles'
import { useState } from 'react'

type CoffeeProps = {
  coffee: CoffeeType
}

export function Coffee({ coffee }: CoffeeProps) {
  const [count, setCount] = useState(1)

  return (
    <S.Wrapper>
      <S.Image src={coffee.image} />
      <S.CaracteristicsContainer>
        {coffee.tags.map((item, index) => (
          <S.Caracteristic key={index}>{CoffeeEnum[item]}</S.Caracteristic>
        ))}
      </S.CaracteristicsContainer>
      <S.TextContainer>
        <S.CoffeeTitle>{coffee.name}</S.CoffeeTitle>
        <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>
      </S.TextContainer>

      <S.PriceContainer>
        <S.FullPrice>
          <span>R$</span>
          <S.Price>{coffee.price.toFixed(2)}</S.Price>
        </S.FullPrice>
        <S.BuyContainer>
          <S.ButButtonContainer>
            <S.MinusButton
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
            >
              <Minus />
            </S.MinusButton>

            <S.BuyText>{count}</S.BuyText>

            <S.PlusButton onClick={() => setCount((prev) => prev + 1)}>
              <Plus />
            </S.PlusButton>
          </S.ButButtonContainer>

          <S.ShoppingButton>
            <ShoppingCart weight="fill" />
          </S.ShoppingButton>
        </S.BuyContainer>
      </S.PriceContainer>
    </S.Wrapper>
  )
}