import Faixa from "../components/Faixa";
import Button from "../components/ui/Button";
import Foto from '../assets/Foto.jpg'
import Fronted from "../components/Skiils/Fronted";
import Backend from "../components/Skiils/Backend";
import { Card } from "../components/ui/Card";
import Faq from "../components/Block/Faq";
import Form from "../components/Block/Form";
import Social from "../components/ui/Social";
import Project from "../components/ui/Project"



export default function Home (){
    return(
        <>
        <section className=" w-full px-5 lg:px-20 pt-36 pb-20 flex flex-col gap-6 place-items-center ">
             <h3 className=" p-1.5 rounded-lg bg-white text-center text-black text-2xl lg:text-3xl font-bold capitalize">software developer</h3>
            <h2 className=" hidden lg:flex text-5xl lg:text-7xl text-center capitalize text-white font-semibold">o desenvolvedor  que esta  <br className=" hidden lg:flex"/> faltando no sue business</h2>
            <h2 className=" flex lg:hidden text-5xl lg:text-7xl text-center capitalize text-white font-semibold">o  dev   que esta  <br className=" hidden lg:flex"/> faltando no sue business</h2>

            <p className=" text-2xl lg:text-3xl text-white font-medium text-center lg:px-32">Está procurando um desenvolvedor de software para tirar suas ideias do papel e transformá-las em produtos lucrativos ou para criar soluções que darão superpoderes ao seu negócio ?</p>
             <Button Link={'https://cal.com/roger-sl-dev/30min'}>
                Agendar Agora
             </Button>
        </section>
        <section className=" bg-white  py-4">
            <Faixa>
                <div className=" text-4xl font-bold text-black flex gap-5 ">
                    <h2>Website</h2>
                    <h2>Ecomercer</h2>
                    <h2>Aplicativos</h2>
                    <h2>Sistemas</h2>
                    <h2>Saas</h2>
                    <h2>Automação</h2>
                    <h2>ERP</h2>
                    <h2>Servidores</h2>
                    <h2></h2>
                </div>
            </Faixa>

        </section>
       
        <section className=" flex flex-row px-4 lg:px-10 py-10">
            <div className=" hidden lg:grid place-items-center w-2/5">
            <img className=" border border-white rounded-lg w-[75%]" src={Foto} alt={''}/>
            </div>
            <div className=" w-full lg:w-3/5  grid place-content-center ">
            <span className=" text-xl backdrop-blur-lg  flex flex-col gap-6 text-white font-semibold border border-white p-5 rounded-lg place-items-center">
					<h3 className=" text-4xl lg:text-5xl font-semibold text-center">Sobri min</h3>
                    <img className="  flex lg:hidden  border border-white rounded-lg w-72" src={Foto} alt={''}/>

<p className=" text-2xl">
Olá, sou Roger, desenvolvedor Software freelancer!
<br/>
<br/>
Meu foco é criar soluções criativas e inovadoras que unem criatividade e proficiência técnica. Tenho um compromisso constante em entregar software robusto e eficiente, colaborando de perto com outros desenvolvedores e adotando as melhores práticas de desenvolvimento, como clean code, clean architecture e design patterns. Tudo isso para garantir produtos de alta qualidade, seja um site, sistema ou aplicativo.
<br/>
<br/>
</p>	

 <Social/>
</span>
            </div>
        </section>
        <section className=" w-full py-10 flex gap-7 flex-col">
            <h2 className=" text-center text-white text-4xl lg:text-5xl font-semibold">Minhas Principais<br/> Habilidades </h2>
            <span className=" gap-5 flex flex-col">

            <Fronted/>
            <Backend/>


            </span>


        </section>

        <section className=" w-full px-4 lg:px-20 py-10 ">
            <h2 className=" capitalize text-center text-white text-4xl lg:text-5xl font-semibold"> Mues principasi serviços <br/> de desevolvimento  </h2>
            <div className="  grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <Card  Numero={1} Titulo="Website">
            Desenvolvimento profissional de sites responsivos e otimizados para SEO, com design personalizado e alto desempenho e lojas virtuais com gestão de produtos, integração de pagamentos, análise de desempenho e suporte contínuo.
			</Card>
            <Card Numero={2} Titulo=" Aplicativo">
            Desenvolvimento de aplicativos móveis personalizados para Android e iOS, focados em usabilidade e desempenho. Desenvolvo soluções com interfaces intuitivas, integração de APIs, notificações push, e ofereço suporte contínuo e atualizações regulares.

			</Card>
            <Card Numero={3} Titulo=" Software ">
            Desenvolvimento software totalmente personalizado para impulsionar seu negócio. Desenvolvo sistemas eficientes e escaláveis com interfaces intuitivas, integração avançada de APIs e automação de processos, garantindo suporte contínuo e atualizações regulares para manter seu software sempre otimizado e eficiente.
			</Card>
            <Card Numero={4} Titulo=" Cloud">
            desenvolvimento em cloud computing, criando soluções escaláveis e seguras na nuvem. Especializei-me em migração de sistemas, integração de serviços em nuvem, automação de infraestrutura e otimização de desempenho, garantindo suporte contínuo e atualizações regulares para manter suas operações eficientes e modernas.

			</Card>


            </div>
          

        </section>
        <section className=" bg-white  py-4">
            <Faixa>
                <div className=" text-4xl font-bold text-black flex gap-5 ">
                    <h2>Website</h2>
                    <h2>Ecomercer</h2>
                    <h2>Aplicativos</h2>
                    <h2>Sistemas</h2>
                    <h2>Saas</h2>
                    <h2>Automação</h2>
                    <h2>ERP</h2>
                    <h2>Servidores</h2>
                    <h2></h2>
                </div>
            </Faixa>

        </section>

    

        <section className=" w-full px-4 lg:px-20 py-14 flex flex-col gap-10">
        <h2 className=" text-3xl lg:text-5xl text-center text-white font-semibold capitalize flex flex-col gap-3 place-items-center">Uma coleção dos meus   <br class=" hidden lg:flex"/>melhores projetos </h2>
         <span className=" flex flex-col gap-6">
            <Project
             Title='MarketDX-Api'
             Descri=' Este projeto é um marketplace online desenvolvido em  Laravel. A aplicação oferece uma plataforma robusta onde usuários podem comprar e vender produtos, com funcionalidades completas de autenticação, gestão de produtos, carrinho de compras, pagamento integrado e avaliações de usuários. '
            />
             <Project
             Title='LeilãoNet-Api             '
             Descri=
             "LeilãoPrime é uma plataforma online que conecta compradores e vendedores para leilões de diversos produtos. Oferece uma interface intuitiva, segura e eficiente para participação e gestão de leilões, promovendo transparência e oportunidades de negócio."

            />
             <Project
             Title='DigitMart-Api             '
             Descri=' 
             Plataforma digital que simplifica a venda e distribuição de produtos digitais, conectando produtores a consumidores em uma experiência segura e intuitiva.
             '
            />
            <Project
             Title='AlugaCar-Api             '
             Descri=
             "AlugCar é uma plataforma digital que facilita o aluguel de veículos, oferecendo uma variedade de opções de carros e motos para locação. Com um processo simples e seguro, conecta proprietários de veículos a locatários, proporcionando mobilidade flexível e conveniente."

             
            />
            


         </span>
         <div className=" w-full grid place-items-center">

         <Button>
            Ver Mais
         </Button>
         </div>

        </section>

        <section className="w-full px-5 py-10 flex flex-col gap-10 ">
		<h2 className=" text-3xl lg:text-5xl text-center text-white font-semibold capitalize flex flex-col gap-3 place-items-center">Perguntas frequestes    <br className=" hidden lg:flex"/>que ressebo</h2>
        <span className=" lg:px-32">
         <Faq/>
        </span>

	</section>

     <section className=" px-80 flex flex-col gap-10 py-10">
     <h2 className=" text-3xl lg:text-5xl text-center text-white font-semibold capitalize flex flex-col gap-3 place-items-center">Vamos converçar     <br className=" hidden lg:flex"/>Deixe sua Mensagem</h2>

        <Form/>
        
     </section>
    
        </>
    )
}