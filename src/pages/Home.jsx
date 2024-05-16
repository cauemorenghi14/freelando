import { Col, Container, Row } from "react-grid-system";
import { Card } from "../components/Card/Card";
import { Estilos } from "../components/EstilosGlobais/Estilos";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input"
import { ProvedorTema } from "../components/ProvedorTema/ProvedorTema";
import { Tipografia } from "../components/Tipografia/Tipografia";
import { ListaSuspensa } from "../components/ListaSuspensa/ListaSuspensa";

function Home() {

  
  const estadosBrasileiros = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR" },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
  ]

  return (
    <ProvedorTema>
      <Estilos />
      <Header />
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia componente="h1" variante="h1">
                Freelando
              </Tipografia>
              <Tipografia componente="body" variante="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.{" "}
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Input titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <ListaSuspensa opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <Input titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Input titulo="Email"/>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Input titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Input titulo="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <button>Anterior</button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <button>Próximo</button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default Home;
