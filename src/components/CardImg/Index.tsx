import img2 from '../../assets/Image-2.png'

function CardImg() {
  return (
    <div className='w-[564px] h-[572px] flex flex-col justify-around bg-[#0D0D0D] rounded-[32px]'>
      <img src={img2} alt='img2' className='w-[564px] h-[397px] mt-2 bg-[#0D0D0D] rounded-[40px]'
      />
      <div className='w-[564px] h-[103px] rounded-[32px] border border-gray-700 flex flex-row justify-evenly items-center'>
        <div className='w-[106px] h-[60px]'>
          <p className='text-[18px] font-bold leading-5'>+ 1000</p>
          <p className='text-[14px] font-normal leading-4'>Nota média geral das aulas</p>
        </div>
        <div className='w-[104px] h-[71px]'>
          <p className='text-[18px] font-bold leading-5 text-[#19C819]'>4,8/5</p>
          <p className='text-[14px] font-normal leading-4'>Nota média geral das aulas</p>
        </div>
        <div className='w-[84px] h-[43px]'>
          <p className='text-[18px] font-bold leading-5'>10k +</p>
          <p className='text-[14px] font-normal leading-4 text-center'>Comunidade</p>
        </div>
      </div>
    </div>
  )
}

export default CardImg