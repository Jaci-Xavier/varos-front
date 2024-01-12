import arrow from '../../assets/arrow.png';

function Hero() {
  return (
    <div className='flex flex-col w-[35.25em] h-[22.8em] gap-[2em] items-start text-start mt-24 ml-24'>
      <h1>Investir de forma mais inteligente passa por aqui.</h1>
      <h2>Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.</h2>
      <button 
        className='flex flex-row bg-[#19C819] rounded-[40px] text-[rgba(0, 247, 0, 1)] w-[11em] h-[3em] text-[1em] items-center justify-center'
        type="button"
      >Comprar agora <img src={arrow}></img>
      </button>
    </div>
  )
}

export default Hero;