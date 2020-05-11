import React from "react";
// import styled from "styled-components";
import { Tag } from "../components/Tag";
import { Layout } from "../components/Layout";
import styled, { css } from "styled-components";

// const Title = styled.h1`
//   font-size: 2rem;
// `;
interface ContainerProps {
  area: string;
}
const Container = styled.div<ContainerProps>`
  ${(p) =>
    css`
      grid-area: ${p.area};
    `};
  box-shadow: 1px 1px 7px #00000015;
  border-radius: 1rem;
  background-color: #ffffff10;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #00000010;
  font-weight: bold;
  color: #0003;
`;

const Content = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-weight: 300;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
`;
const SocialContent = styled.ul`
  list-style: none;
  li {
    float: left;
    margin-right: 1rem;
  }
`;

const Table = styled.table`
  width: 100%;
  tbody {
    tr {
      td {
        width: 50%;
      }
      td:first-child {
        li {
          margin-right: 3rem;
        }
      }
    }
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    width: 50%;
    padding-right: 2rem;
  }
  @media screen and (max-width: 768px) {
    p {
      width: 100%;
    }
  }
`;
const Index: React.FC = () => (
  <Layout>
    <Container area="main">
      <Header>
        <p>BEM VINDO</p>
        <Tag text="Contrate-me" bg="white" shadow />
      </Header>
      <Content>
        <h1>Prazer, sou o Samuel.</h1>
        <h2>
          Sou programador web profissional a cerca de um ano e meio e atualmente
          trabalho desenvolvendo páginas, softwares e blogs pela internet a
          fora.
        </h2>
        <br />
        <p>
          Estou cursando engenharia de software por amor para aperfeiçoar minhas
          habilidades na escrita e organização de código. Gosto muito de ajudar
          pessoas que querem entrar para a área de desenvolvimento por isso sou
          bem ativo em comunidades e grupos que buscam esses conhecimentos.
        </p>
        <p>
          Sempre procuro trabalhar com as tecnologias que melhor atenderá o meu
          cliente para que haja uma melhor experiência e usabilidade do software
          final. Tenho trabalhado bastante com a stack do famoso Node JS fazendo
          SPA’s de pequeno porte com tudo o que tem direito.
        </p>
        <br />
        <SocialContent>
          {Array(5).fill(
            <li>
              <Tag text="Saiba mais" />
            </li>
          )}
        </SocialContent>
        <br />
        <h2>Atualmente</h2>
        <Table>
          <tbody>
            <tr>
              <td>
                <li>
                  <p>
                    Desenvolvedor estagiário no Tribunal de Contas da União{" "}
                    <strong> (8 meses).</strong>
                  </p>
                </li>
              </td>
              <td>
                <li>
                  <p>
                    Desenvolvedo um projeto pessoal para ajudar pessoas a
                    administrar seus aluguéis.
                  </p>
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <p>
                    Desenvolvedo um projeto em grupo para um delivery de
                    supermercados.
                  </p>
                </li>
              </td>
              <td>
                <li>
                  <p>
                    Cursando engenharia de software na universidade Uniceplac -
                    Gama <strong>(3º Semestre)</strong> .
                  </p>
                </li>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />

        <h2>Previamente</h2>
        <Table>
          <tbody>
            <tr>
              <td>
                <li>
                  <p>
                    Término do desenvolvimento de um software para pesquisadores
                    de uma universidade.
                  </p>
                </li>
              </td>
              <td>
                <li>
                  <p>
                    Término do ensino médio <strong>(2017)</strong>
                  </p>
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <p>
                    Término do curso técnico em multimídia pelo SENAI - Gama DF.
                    <strong>(2016)</strong>
                  </p>
                </li>
              </td>
              <td>
                <li>
                  <p>
                    Ativo em projetos para ajudar quem quer aprender a programar
                    em Node JS ou aprender a essência do desenvolvimento.
                  </p>
                </li>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
    <Container area="side">
      <Header>
        <p>ALGUMAS OUTRAS COISAS</p>
      </Header>
      <Content>
        <h2>Estudo</h2>
        <br />
        <p>
          Nesse último mês venho estudando bastante o desenvolvimento de
          softwares web utilizando Java com seu famoso framework
          <strong>Spring Boot</strong>. Ainda não sou um expert com ele, mas já
          consigo fazer aplicações que requerem integrações com banco de dados e
          também autorizações.
        </p>
        <p>
          Venho estudando e aplicando conhecimentos também com o{" "}
          <strong>TypeScript</strong>, uma famosa "linguagem" utilizada para
          tipar os dados do <strong>JavaScript</strong>. Cada vez mais vejo a
          necessidade de utilizá-lo em meus projetos graças a facilidade que ela
          me da ao juntar mais pessoas para desenvolver.
        </p>
        <br />
        <h2>Meu tempo livre</h2>
        <br />
        <p>
          Quando não estou desenvolvendo costumo ler livros sobre economia e
          mercado de ações que busco um dia entrar e começar a investir. Fora
          isso também curto jogar um Counter Strike ou League of Legends com
          meus amigos.
        </p>
        <p>
          Costumo fazer caminhadas de manhã para relaxar um pouco e também
          manter a forma.
        </p>
      </Content>
    </Container>
    <Container area="hab">
      <Content>
        <h2>Habilidades</h2>
        <br/>
        <List>
          <p>
            <strong>Node Js:&nbsp;</strong>
            Linguagem que uso para desenvolver projetos. Tenho bastamte
            conhecimento sobre. Com ele e uma equipe sou capaz de desenvolver um
            sistema de larga escala com filas, banco de dados, dados em tempo
            real, etc.
          </p>

          <p>
            <strong>TypeScript:&nbsp;</strong>É a "linguagem" que dar poder ao
            JavaScript implementando a tipagem de dados nela. Com ela sou capaz
            de criar projetos que podem escalar facilmente por causa da
            organização e arquitetura do software que ela ajuda a proporcionar.
          </p>

          <p>
            <strong>Express JS:&nbsp;</strong>
            Este é o principal framework para desenvolvimento de API's RESTful
            que utilizo. Com ele sou capaz de gerenciar rotas, tipos de
            respostas, integração com banco de dados, gerenciamento de filas,
            envios de email, etc. Importante lembrar que só ele não é capaz
            disso, o que necesista de conhecimento de outras bibliotecas que dão
            mais poder a ele.
          </p>

          <p>
            <strong>Adonis JS&nbsp;</strong>É um framework completo inpirado no{" "}
            <strong>Laravel</strong> para aplicações em Node JS. Aos poucos
            estou migrando do node JS para ele por causa da arquitetura padrão
            que ele fornece facilitando o trabalho em equipe e divergências
            entre padrões de projeto. Possuo um conhecimento intermediário, mas
            sou capaz de produzir facilmente uma api RESTful integrada com banco
            de dados, autorizações, autenticação, filas, envios de email, etc.
          </p>

          <p>
            <strong>React JS:&nbsp;</strong> Biblioteca para criação de
            interfaces gráficas para web. Possuo um conhecimento avançado com
            ela sendo capaz de gerenciar estados, ciclos de renderizações,
            estilos, temas, propriedades globais, entre outros.
          </p>

          <p>
            <strong>Next JS:&nbsp;</strong>
            Este é um framework para desenvolvimento de interfaces que utiliza o{" "}
            <strong>React</strong> para o desenvolvimento de telas que
            futuramente podem ser geradas estaticamente. Possuo um conhecimento
            intermediário com ele. Mas já sou capaz de desenvoler um blog,
            e-commerce, entre outros.
          </p>

          <p>
            <strong>Java&nbsp;</strong>
            Uma linguagem fortemente tipada largamente utilizada no mundo
            corporativa. Sou novato com ela mas busco aperfeiçoar meu
            conhecimento ao máximo pela importância que ela tem no mercado.
            Domino o conceito de orientação a objetos que ela utiliza por trás,
            implementando herança, polimorfismo e encapsulamento facilmente.
          </p>

          <p>
            <strong>Spring Boot&nbsp;</strong>
            Um framework java para quase todos os tipos de aplicações. Meu
            conhecimento com ele é basico visto a infinidade de conceitos que
            ele tem a oferecer. Fiz pequenas aplicações CRUD para desenvolver-me
            um pouco nesta ferramenta.
          </p>
        </List>
      </Content>
    </Container>
  </Layout>
);

export default Index;
