import styled from "styled-components"
import Categoryitem from "./Categoryitem"
import { categories } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
function Categories() {
  return (
    <Container>
        {categories.map(item=>(
            <Categoryitem  item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories