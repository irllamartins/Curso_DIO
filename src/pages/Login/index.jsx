import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, CriarText, EsqueciText, SubtitleLogin, Row, Wrapper, Title, TitleLogin } from "./styles"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import {api} from '../../services/api'


const schema = yup.object({
    email: yup.string().email("Email não é valido").required('Campo obrigatório'),
    password: yup.string().min(5,"No minimo 5 caracteres").required('Campo obrigatório'),
}).required()


export const Login = () => {
    const { control, handleSubmit, formState: { errors} } = useForm({
        resolver:yupResolver(schema),
        mode:'onchange',
    })


    const navigate = useNavigate();
    
    const onSubmit = async formData => {
        try{
            const{ data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            //console.log("Retorno",data)
            if(data.length ===1){
                navigate('/feed')
            }else{
                alert("Email ou senha invalida")
            }
        }catch{
            alert("Houve um erro, tente novamente")
        }
    };
    const handlePagine=()=>{
        navigate('/register')
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" control={control} errorMessage={errors?.password?.message}  placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" type="submit"></Button>
                        </form>


                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handlePagine}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
