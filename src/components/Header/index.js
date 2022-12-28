import React from "react";
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png"
export const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    const handleClickSignIn=()=>{
        navigate('/login')
    }
    const handleClickCadastro=()=>{
        navigate('/register')
    }
    return (
        <Wrapper>
            <Container>
                <Row>
                    <MenuRight href="/">
                        <img src={logo} alt="Logo da DIO" />
                        </MenuRight>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}

                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/39415559?s=400&u=fc2fe5da173a8bb3937a9301e41559f2e6be1201&v=4" />
                    ) :
                        (
                            <>
                                
                                <Button title="Entrar" onClick={ handleClickSignIn}/>
                                <Button title="Cadastrar" onClick={handleClickCadastro}/>
                            </>
                        )}

                </Row>
            </Container >
        </Wrapper >
    )
}