import Marquee from "react-fast-marquee";
//define components
export function ProductCollection(props){
    return <Marquee style={welcome}  direction="left" speed={150} delay={0.4}>Welcome Our Product Collection</Marquee>
}
const welcome = {
    fontSize: 40,
    backgroundColor: 'gold',
    color: 'green',
    marginBottom: 25
}