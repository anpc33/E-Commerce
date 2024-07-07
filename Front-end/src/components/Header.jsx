import { useState } from 'react'

function Header() {
  const [searchSuggestions, setSearchSuggestions] = useState(false)

  const handleSearchSuggestions = () => {
    setSearchSuggestions(!searchSuggestions)
  }

  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 lg:px-6 py-4 lg:py-2">
        <div className="flex items-center gap-6 lg:gap-12">
          {/* logo */}
          <section className='hidden md:block'>
            <a className="link flex flex-col items-center gap-2 no-underline">
              <img
                className="h-8 lg:h-10"
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                alt="logo"
              />
              <span className="hidden lg:block txt-secondary text-sm font-semibold">
                Tốt & Nhanh
              </span>
            </a>
          </section>

          {/* main */}
          <section className="flex-1">
            <div className="w-full flex flex-col gap-2">
              <section className="w-full flex gap-4 lg:gap-12">
                {/* search */}
                <section className="relative flex flex-shrink flex-grow basis-0 rounded-lg border border-[#dddde3]">
                  <form
                    action=""
                    method="get"
                    className="flex flex-shrink flex-grow basis-0 items-center"
                  >
                    <img
                      className="ml-4 h-5 w-5"
                      src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                      alt=""
                    />
                    <input
                      className="flex flex-shrink flex-grow basis-0 border-0 px-2 text-sm outline-none"
                      type="search"
                      name=""
                      placeholder="Bạn tìm gì hôm nay"
                      onFocus={handleSearchSuggestions}
                      onBlur={handleSearchSuggestions}
                    />
                    <div className="divider divider-horizontal w-0 m-0 py-2"></div>
                    <button
                      type="submit"
                      className="h-9 lg:w-[92px] px-2 cursor-pointer rounded-r-lg p-1 text-sm txt-secondary hover:bg-[#0a68ff33]"
                    >
                      Tìm kiếm
                    </button>
                  </form>

                  {/* ===== Suggestion Search ===== */}
                  <section
                    className={`${
                      searchSuggestions !== true
                        ? 'invisible top-[150%] opacity-0'
                        : 'opacity-1 visible top-full'
                    } absolute left-0 z-50 w-full rounded-md bg-white py-4 shadow-[0_6px_12px_0px_rgba(0,0,0,0.28)] transition-all`}
                  >
                    <div className="">
                      <nav>
                        <a
                          href=""
                          className="flex items-center px-4 hover:bg-[#27272a1f]"
                        >
                          <img
                            className="h-8 w-8"
                            src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                            alt=""
                          />
                          <p className="pl-2 text-sm">cổ học kỳ thư</p>
                        </a>
                        <a
                          href=""
                          className="flex items-center px-4 hover:bg-[#27272a1f]"
                        >
                          <img
                            className="h-8 w-8"
                            src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                            alt=""
                          />
                          <p className="pl-2 text-sm">cổ học kỳ thư</p>
                        </a>
                        <a
                          href=""
                          className="flex items-center px-4 hover:bg-[#27272a1f]"
                        >
                          <img
                            className="h-8 w-8"
                            src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                            alt=""
                          />
                          <p className="pl-2 text-sm">cổ học kỳ thư</p>
                        </a>
                      </nav>

                      {/* Show more */}
                      <div className="mt-2 flex cursor-pointer items-center justify-center gap-2 px-4 py-2 text-xs txt-secondary">
                        Xem thêm
                        <svg
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="right-icon rotate-90"
                        >
                          <path
                            fill="rgb(13,92,182)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355
                                0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355
                                6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447
                                11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289
                                6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </section>
                </section>

                {/* option more */}
                <section className="flex items-center gap-1">
                  {/* ===== Home ===== */}
                  <div className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0060ff1f]">
                    <img className="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="" />
                    <span className="text-sm font-medium text-[#0a68ff]">Trang chủ</span>
                  </div>

                  {/* ===== Account ===== */}
                  <div className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#27272a1f]">
                    <img className="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="" />
                    <span className="text-sm text-[#808089]">Tài khoản</span>
                  </div>

                  {/* ===== Cart ===== */}
                  <div className="indicator">
                    <span className="indicator-item badge badge-secondary text-[10px] lg:text-xs font-bold text-white bg-[#ff424f]">10</span>
                    <a href="" className="block lg:pl-6 lg:border-l-2">
                      <img className="h-6 w-6" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="" />
                    </a>
                  </div>
                </section>
              </section>
              {/* quicklink */}
              <section className="hidden xl:flex items-center justify-between">
                <nav className="flex items-center gap-3 text-sm text-[#808089]">
                  <a href="">điện gia dụng</a>
                  <a href="">điện gia dụng</a>
                  <a href="">điện gia dụng</a>
                  <a href="">điện gia dụng</a>
                  <a href="">điện gia dụng</a>
                  <a href="">điện gia dụng</a>
                </nav>

                <div className="flex items-center gap-1">
                  <img className="h-5 w-5" src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="" />
                  <span className="text-sm text-[#808089]">Giao đến:</span>
                  <a href="" className="text-sm font-medium underline">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </header>
  )
}

export default Header
