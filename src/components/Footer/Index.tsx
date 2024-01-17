import frame331 from '../../assets/Frame 331.svg';
import varos from '../../assets/varos.png';

function Footer() {
  return (
    <div className="flex flex-col pt-40 justify-between pb-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img src={frame331} alt="Varos Icon" className="w-[74px] h-[74px]" />
          <img src={varos} alt="Varos Logo" className="w-[74px] h-[13px]" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#F2F4F8]">Cursos</p>
          <a
            href="https://varos.com.br/vza?utm_campaign=vza-lista-espera&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Valuation do Zero ao
            <br />
            Avançado 2.0
          </a>
          <a
            href="https://varos.com.br/cursos/codigopy/lista-de-espera?utm_medium=footer&utm_term=varos&utm_content=%2Finformacoes%2Fquem-somos&utm_source=site&utm_campaign=codigopy1123"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Código.py
          </a>
          <a
            href="https://varos.com.br/cursos/reels?utm_medium=footer&utm_term=varos&utm_content=%2Finformacoes%2Fquem-somos&utm_source=site&utm_campaign=minicurso-reels"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Minicurso Reels
          </a>
          <a
            href="https://checkout.varos.com.br/pay/enciclopedia-dos-fiis-oferta-principal?utm_medium=footer&utm_content=%2Finformacoes%2Fquem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Enciclopédia de FII
          </a>
        </div>
        <div className="flex flex-col justify-start gap-[20px]">
          <p className="text-[#F2F4F8]">Carteiras</p>
          <a
            href="https://varos.com.br/carteiras/fator?utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira FATOR
          </a>
          <a
            href="https://varos.com.br/carteiras/selecao?utm_campaign=carteira-selecao&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira Seleção
          </a>
          <a
            href="https://varos.com.br/carteiras/essencial?utm_campaign=carteira-essencial&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira Essencial
          </a>
          <a
            href="https://varos.com.br/carteiras/small-caps?utm_campaign=carteira-small-caps&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira Small Caps
          </a>
          <a
            href="https://varos.com.br/carteiras/dividendos?utm_campaign=carteira-dividendos&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira Dividendos
          </a>
          <a
            href="https://varos.com.br/carteiras/fundos-imobiliarios?utm_campaign=carteira-fiis&utm_source=site&utm_term=varos&utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Carteira FIIs
          </a>
        </div>
        <div
          className="w-[172px] h-[71px] flex flex-col justifi-start gap-[20px] 
        "
        >
          <p className="text-[#F2F4F8]">Sobre</p>
          <a
            href="https://varos.com.br/informacoes/quem-somos?utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Quem Somos
          </a>
        </div>
        <div
          className="w-[172px] h-[161px] flex flex-col justify-start gap-[20px]
        "
        >
          <p className="text-[#F2F4F8]">Redes Sociais</p>
          <a
            href="https://www.instagram.com/varos.br/?utm_medium=footer&utm_content=%2Finformacoes%2Fquem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/varosbr?utm_medium=footer&utm_content=/informacoes/quem-somos"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/@varosbr"
            target="_blank"
            rel="noreferrer"
            className="text-[#F2F4F6]"
          >
            Youtube
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#F2F4F6]">Varos 2023</p>
        <p className="text-[#F2F4F6]">Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
