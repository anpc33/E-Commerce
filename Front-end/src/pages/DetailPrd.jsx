'use client'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

function DetailPrd() {
  return (
    <article className="w-full rounded-lg">
      <section className="flex flex-col gap-3">
        <Breadcrumb className='py-3' aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
      </section>
      <section className='detailrd-layout'>
        <div className='rounded-lg bg-white'>
          <div className='flex flex-col p-4'>
            <div className='border rounded-lg'>
              <img className='w-full' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
            </div>
            <div className='mt-2 overflow-hidden'>
              <div className="flex items-center gap-2">
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
                <img className='h-14 border rounded-md cursor-pointer' src="https://salt.tikicdn.com/cache/750x750/ts/product/dd/42/95/ae7976cda4f1ae1de6be8c5e84df1815.png.webp" alt="" />
              </div>
            </div>
          </div>
          {/* desc */}
          <div className='px-4'>
            <h4 className='font-semibold'>Đặc điểm nổi bật</h4>
            <ul className='mt-2 flex flex-col gap-1'>
              <li className='flex gap-2'>
                <img className='h-4 w-4' src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                <p>Màn hình Super Retina XDR 6.1 inch với chế độ Điện Ảnh, tạo độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video.</p>
              </li>
              <li className='flex gap-2'>
                <img className='h-4 w-4' src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                <p>Màn hình Super Retina XDR 6.1 inch với chế độ Điện Ảnh, tạo độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video.</p>
              </li>
              <li className='flex gap-2'>
                <img className='h-4 w-4' src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" />
                <p>Màn hình Super Retina XDR 6.1 inch với chế độ Điện Ảnh, tạo độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video.</p>
              </li>
            </ul>
          </div>
          {/* more */}
          <div className="mt-2 py-2 px-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className='h-6 w-6' src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png" alt="" />
              <p className='text-sm'>Xem thêm Ưu điểm & lưu ý của sản phẩm</p>
            </div>
            <img className='h-6 w-6' src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png" alt="" />
          </div>
        </div>
        <div className=''>d</div>
        <div className=''>d</div>
      </section>
    </article>
  )
}

export default DetailPrd
