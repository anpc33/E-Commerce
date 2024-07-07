import Slider from '~/components/Slider'

function Category() {
  return (
    <article className="w-full rounded-lg md:w-[calc(100%-246px)]">
      <div className="flex flex-col gap-3">
        <section className="rounded-lg bg-white p-4 text-3xl font-semibold">
          Nhà Sách Tiki
        </section>

        <section className="">
          <Slider />
        </section>

        <section className="flex flex-col gap-3 rounded-lg bg-white px-4 py-3">
          <div className="text-base font-semibold">Khám phá theo danh mục</div>
          <div className="grid grid-cols-6 gap-3">
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
            <a href="" className="flex flex-col items-center gap-2">
              <img
                className="h-[88px] w-[88px]"
                src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg"
                alt=""
              />
              <p className="cssText text-center text-sm font-medium">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </p>
            </a>
          </div>
        </section>

        <article className="flex flex-col gap-3 rounded-lg bg-white px-4 py-3">
          <section className="text-base font-semibold text-red-600 md:text-orange-600 lg:text-blue-400">
            Tất cả sản phẩm
          </section>

          {/*  */}
          <section className="flex items-center">
            <section className="flex flex-1 items-center">
              {/* Brand */}
              <div className="w-full">
                <h4 className="mb-1 text-xs text-[#808089]">Thương hiệu</h4>
                <section className="relative flex items-center gap-2">
                  <div className="overflow-hidden">
                    <div className="flex-1">
                      <div className="grid w-full auto-cols-max grid-flow-col gap-2">
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                          <span className="text-sm">Tất cả</span>
                        </button>

                      </div>
                    </div>
                  </div>

                  <button className="flex h-8 w-8 min-w-8 items-center justify-center rounded-2xl border border-[#dddde3]">
                    <img
                      className="h-5 w-5 -rotate-90"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                      alt=""
                    />
                  </button>
                </section>
              </div>
            </section>

            <section className="">
              <button className="flex items-center gap-2 rounded border border-[#dddde3] px-3 py-2 hover:border-[#00000026] hover:bg-[#dddde3]">
                <img
                  className="h-5 w-5"
                  src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                  alt=""
                />
                <span className="text-sm">Tất cả</span>
              </button>
            </section>
          </section>

          <section className="flex items-center justify-between">
            <section className="flex items-center gap-6">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <div
                  htmlFor="defaultCheckbox"
                  className="ms-2 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <img
                    className="h-5 w-10"
                    src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                    alt=""
                  />
                  <span>Giao siêu tốc 2H</span>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <div
                  htmlFor="defaultCheckbox"
                  className="ms-2 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <img
                    className="h-4"
                    src="https://salt.tikicdn.com/ts/upload/0e/22/93/9b37cf1438ac51f5028bc6ff3deed2a0.png"
                    alt=""
                  />
                  <span>Giao siêu tốc 2H</span>
                </div>
              </div>
            </section>

            {/* Fillter */}
            <section className="flex items-center gap-2">
              <span className="text-sm">Sắp xếp</span>
              <button className="flex items-center gap-2 rounded-2xl border border-[#dddde3] px-3 py-[6px] hover:border-[#00000026] hover:bg-[#dddde3]">
                <span className="text-sm">Phổ biến</span>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg" alt="" />
              </button>
            </section>
          </section>
        </article>
      </div>
    </article>
  )
}

export default Category
