import { useNavigate } from "react-router-dom"
import{ Button} from "../../components/Button"
import { Header } from "../../components/Header"
import { Container, TextContent, Title,TitleHighlight } from "./styles"


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
                    <img src="https://hermes.digitalinnovation.one/public/components/pages/home/how-it-works/emerging-technologies.png" alt="Banner sobre tecnologia"/>
                </div>
            </Container>
        </>
    )
}
