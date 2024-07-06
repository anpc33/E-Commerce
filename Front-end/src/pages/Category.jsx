import Slider from '~/components/Slider'

function Category() {
  return (
    <article className="w-[calc(100%-246px)] rounded-lg">
      <div className="flex flex-col gap-3">
        <section className="text-3xl font-semibold p-4 rounded-lg bg-white">Nhà Sách Tiki</section>

        <section className=""><Slider/></section>

        <section className='flex flex-col gap-3 px-4 py-3 rounded-lg bg-white'>
          <div className='text-base font-semibold'>Khám phá theo danh mục</div>
          <div className='grid grid-cols-6 gap-3'>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
          </div>
        </section>

        <article className='flex flex-col gap-3 px-4 py-3 rounded-lg bg-white'>
          <section className='text-base font-semibold text-red-600 lg:text-blue-400 md:text-orange-600'>Tất cả sản phẩm</section>

          {/*  */}
          <section className='flex items-center'>
            <section className='flex flex-1 items-center'>
              {/* Brand */}
              <div className='w-1/2'>
                <h4 className='text-xs mb-1 text-[#808089]'>Thương hiệu</h4>
                <section className='flex items-center gap-2 relative'>
                  <div className='overflow-hidden'>
                    <div className='flex-1'>
                      <div className='w-full grid grid-flow-col auto-cols-max gap-2'>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className='h-8 w-8 min-w-8 flex items-center justify-center border rounded-2xl border-[#dddde3]'>
                    <img className='h-5 w-5 -rotate-90' src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg" alt="" />
                  </button>
                </section>
              </div>
              {/* Divier */}
              <div className='h-4 w-1 mx-4 bg-slate-500'></div>
              {/* Supplier */}
              {/* <div className='w-1/2'>
                <h4 className='text-xs mb-1 text-[#808089]'>Thương hiệu</h4>
                <section className='flex items-center gap-2 relative'>
                  <div className='overflow-hidden'>
                    <div className='flex-1'>
                      <div className='w-full grid grid-flow-col auto-cols-max gap-2'>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                        <button className='flex items-center gap-2 px-3 py-[6px] border rounded-2xl border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                          <span className='text-sm'>Tất cả</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className='h-8 w-8 min-w-8 flex items-center justify-center border rounded-2xl border-[#dddde3]'>
                    <img className='h-5 w-5 -rotate-90' src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg" alt="" />
                  </button>
                </section>
              </div> */}
            </section>
            {/* Divier */}
            <div className='h-4 w-1 mx-4 bg-slate-500'></div>
            <section className=''>
              <button className='flex items-center gap-2 px-3 py-2 border rounded border-[#dddde3] hover:bg-[#dddde3] hover:border-[#00000026]'>
                <img className='w-5 h-5' src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png" alt="" />
                <span className='text-sm'>Tất cả</span>
              </button>
            </section>
          </section>

          <section className=''></section>
        </article>
      </div>
    </article>
  )
}

export default Category