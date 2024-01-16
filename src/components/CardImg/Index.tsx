import img2 from '../../assets/Image-2.png'

function CardImg() {
  return (
    <div className='bg-black w-[564px] h-[572px] flex flex-col justify-around'>
      <img src={img2} alt='img2' className='w-[564px] h-[397px] mt-2 ' />
      <div className='bg-red-600 w-[564px] h-[103px] rounded-[32px] border border-gray-700 flex flex-row'>
      </div>
    </div>
  )
}

export default CardImg