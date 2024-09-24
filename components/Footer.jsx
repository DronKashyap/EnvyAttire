import Image from 'next/image';
function Footer() {
  return (
    <div className="h-72 bg-slate-800 text-white">
      Footer
      <div className='flex justify-between'>
      <Image src="/facebook.png" alt="Cart" width={24} height={24} />
      <Image src="/pinterest.png" alt="Cart" width={24} height={24} />
      <Image src="/instagram.png" alt="Cart" width={24} height={24} />
      <Image src="/youtube.png" alt="Cart" width={24} height={24} />
      <Image src="/x.png" alt="Cart" width={24} height={24} />
      </div>
    </div>
  )
}

export default Footer
