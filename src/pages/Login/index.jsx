import {MdEmail,MdLock} from 'react-icons/md'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, CriarText, EsqueciText, SubtitleLogin, Row, Wrapper, Title, TitleLogin } from "./styles"
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate();
    const handleClinkSignIn=()=>{
        navigate('/feed')
    }
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts. 
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change_</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="secondary" onClick={handleClinkSignIn} type="button"></Button>
                        </form>
                    

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
