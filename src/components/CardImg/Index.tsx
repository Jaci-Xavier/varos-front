import img2 from '../../assets/Image-2.png';

function CardImg() {
  return (
    <div className="flex flex-col gap-8">
      <img src={img2} alt="img2" className="rounded-[40px] desktop:w-[48rem]" />
      <div className="py-4 rounded-[32px] border border-gray-700 flex justify-evenly items-center">
        <div className="text-center">
          <p className="text-[18px] font-bold leading-5">+ 1000</p>
          <p className="text-[14px] font-normal leading-4">
            Nota média
            <br /> geral das aulas
          </p>
        </div>
        <div className="text-center">
          <p className="text-[18px] font-bold leading-5 text-[#19C819]">4,8/5</p>
          <p className="text-[14px] font-normal leading-4">
            Nota média <br />
            geral das aulas
          </p>
        </div>
        <div className="text-center">
          <p className="text-[18px] font-bold leading-5">10k +</p>
          <p className="text-[14px] font-normal leading-4 text-center">Comunidade</p>
        </div>
      </div>
    </div>
  );
}

export default CardImg;
