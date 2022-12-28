import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, LoginText, SubtitleLogin, Row, Wrapper, Title, TitleLogin, Text } from "./styles"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { api } from '../../services/api'


const schema = yup.object({
    nome: yup.string().min(3,"Nome com caracteres insuficientes").required('Campo obrigatório'),
    email: yup.string().email("Email não é valido").required('Campo obrigatório'),
    password: yup.string().min(5, "No minimo 5 caracteres").required('Campo obrigatório'),
}).required()


export const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onchange',
    })


    const navigate = useNavigate();

    const onSubmit = async formData => {
        try {
            const { data } = await api.post('/users', {
                name: formData.nome,
                email: formData.email,
                senha: formData.password,
              })
           // console.log("Retorno", data)
            if (data) {
                navigate('/feed')
            } 
        } catch {
            alert("Houve um erro, tente novamente")
        }
    };

    const handlePagine=()=>{
        navigate('/login')
    }
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma que ajudar a dominar as tecnologias utilizadas pelas empresas mais inovadoras do mundo
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Cadastrasse gratuitamente</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nome" control={control} errorMessage={errors?.nome?.message} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit"></Button>
                        </form>


                        <Row>
                            <Text>
                                Ao clicar  em "criar minha conta" você declara que concorda com os Termos de politica de privacidade e Termos de uso.<LoginText onClick={handlePagine}> Fazer login </LoginText>
                            </Text>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
