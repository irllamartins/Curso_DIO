
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { UserInfo } from "../../components/UserInfo"
import { Container, Column, Title, TitleHighlight } from "./styles"


export const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card 
                    name="Irlla Martins"
                    image={"https://plus.unsplash.com/premium_photo-1661510050360-b8447baf1963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                    title="Assunto 1"
                    content="teste 1"
                    like={12}
                    />
                    <Card
                     name="Irlla Martins"
                     image={"https://images.unsplash.com/photo-1671955100918-37bfb98d33fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}
                     title="Assunto 2"
                    content="teste 3"
                    like={2}
                    />
                    <Card
                    name="Isley Martins"
                     image={"https://images.unsplash.com/photo-1671879506570-48f5d7c4addd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"}
                     title="Assunto 2"
                     content="teste 3"
                     like={9}
                    />
                  
                </Column>
                <Column flex={1}>
                    <TitleHighlight># Ranking 5 Top da semana</TitleHighlight>

                    <UserInfo percentual={35} nome="irlla" image="https://avatars.githubusercontent.com/u/39415559?s=400&u=fc2fe5da173a8bb3937a9301e41559f2e6be1201&v=4" />
                    <UserInfo percentual={54} nome="irlla" image="https://avatars.githubusercontent.com/u/39415559?s=400&u=fc2fe5da173a8bb3937a9301e41559f2e6be1201&v=4" />
                    <UserInfo percentual={95} nome="irlla" image="https://avatars.githubusercontent.com/u/39415559?s=400&u=fc2fe5da173a8bb3937a9301e41559f2e6be1201&v=4" />
                </Column>
            </Container>
        </>
    )
}
