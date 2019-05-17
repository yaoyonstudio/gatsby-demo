import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Menu = () => {
  const menus = [
    {id: 2, title: '文章', link: '/posts/'},
    {id: 1, title: '首页', link: '/'},
    {id: 3, title: '关于', link: '/about/'},
  ]

  const Nav = styled.nav`
    width: 100%;
    height: .5rem;
    margin-bottom: .12rem;
    background-color: #a870e0;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `

  const Ul = styled.ul`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `

  const Li = styled.li`
    display: block;
    a {
      color: #fff;
      display: block;
      width: 100%;
      line-height: .5rem;
      text-decoration: none;
      padding: 0 .1rem;
      position: relative;
      font-size: .18rem;
    }
    .active {
      color: #663399;
      &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-width: .1rem .1rem 0;
        border-style: solid;
        border-color: #663399 transparent transparent;
        position: absolute;
        top: -.01rem;
        left: 50%;
        margin-left: -.1rem;
      }
      &::after {
        content: '';
        display: block;
        width: 30%;
        height: .03rem;
        background-color: #663399;
        position: absolute;
        left: 50%;
        margin-left: -15%;
        bottom: .04rem;
      }
    }
  `

  return (
    <Nav>
      <Ul>
        {menus.map(menu => {
          return (
            <Li key={menu.id}>
              <Link activeClassName='active' to={menu.link}>
                {menu.title}
              </Link>
            </Li>
          )
        })}
      </Ul>
    </Nav>
  )
}

export default Menu
