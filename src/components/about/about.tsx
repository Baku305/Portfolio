import { menuElementType } from "../../data/menuData"


export const About = ({content}:aboutProps) => {


 return(
  <>
  <div>{content?.title}</div>
  <div>{content?.description}</div>
  </>
 )
}

type aboutProps = {
 content : menuElementType | undefined
}