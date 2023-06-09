import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-size: ${({ theme }) => theme.typography.text.s};
  color: ${({ theme }) => theme.colors['purple-dark']};
  background-color: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const ShoppingButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  border-radius: 6px;
  padding: 0.3rem;
  position: relative;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['yellow-light']};
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const TotalItems = styled.span`
  position: absolute;
  right: -0.625rem;
  top: -0.625rem;
  z-index: 10;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['yellow-dark']};

  font-size: ${({ theme }) => theme.typography.text.s};
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
