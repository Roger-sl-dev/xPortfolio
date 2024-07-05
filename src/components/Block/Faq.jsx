



export default ()=>{
    return(
        <>
        <span className=" w-full  flex flex-col gap-5">
            <Acord
            Title='Qual é a sua experiência em desenvolvimento de software? '
            Descri="
            Com mais de 4 anos de experiência em desenvolvimento de software, tenho trabalhado em uma ampla gama de projetos, desde aplicações web até sistemas corporativos complexos. Minha experiência abrange diversas tecnologias e metodologias, focando na entrega de soluções de alta qualidade e eficiência para atender aos desafios dos clientes.
            "
            />
            <Acord
            Title='Como você aborda a gestão de projetos e o cumprimento de prazos?'
            Descri='
            Utilizo metodologias ágeis como Scrum ou Kanban para dividir o projeto em marcos mensuráveis. Isso me permite ajustar os planos conforme necessário para garantir o cumprimento dos prazos."

            '
            />
            <Acord
            Title='Qual é o seu processo para entender e documentar os requisitos do cliente?            '
            Descri='
            Inicio cada projeto com uma análise detalhada dos requisitos, conduzindo reuniões de levantamento de requisitos e documentando tudo de forma clara para garantir alinhamento com as expectativas do cliente.

            '
            />
            <Acord
            Title='Como você lida com mudanças de escopo durante o desenvolvimento?            '
            Descri='
            Mantenho uma comunicação aberta e flexível com o cliente para lidar com mudanças de escopo de forma eficiente. Geralmente, aplico uma abordagem incremental para minimizar impactos nos prazos.


            '
            />
            <Acord
            Title='Como você garante a qualidade e a segurança do software que desenvolve?            '
           Descri='
           Implemento testes rigorosos durante todo o ciclo de desenvolvimento, incluindo testes de unidade, integração, aceitação e adoto as melhores práticas de segurança

           '
           />

            
        </span>
        </>
    )
}


const Acord =(props)=>{
    return(
        <div className="space-y-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden bg-white  p-2  rounded-xl" >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-gray-900" >
            
            <h2 className=" font-semibold text-2xl">{props.Title}</h2>
      
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
      
          <p className="mt-4 px-4 leading-relaxed text-xl  text-black font-medium">
            {props.Descri}
          </p>
        </details>
      
        
      </div>
      
    )
}