import { useNavigate } from "react-router-dom"
import{ Button} from "../../components/Button"
import { Header } from "../../components/Header"
import { Container, TextContent, Title,TitleHighlight } from "./styles"
import banner from "../../assets/banner.png"

 export const Home = () => {
    const navigate = useNavigate();
    const handleClinkSignIn=()=>{
        navigate('/login')
    }
    return (
        <>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>Implemente<br/></TitleHighlight>
                    </Title>
                    <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title={"Começar agora"} variant="secondary" onClick={handleClinkSignIn}/>
                </div>
                <div>
                    <img src={banner} alt="Banner sobre tecnologia"/>
                </div>
            </Container>
        </>
    )
}
