import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/load.gif'
      alt='loader'
      width={400}
      height={400}
      className='object-contain'
    />
    <p className='text-md font-bold text-white'>Loading...</p>
  </div>
);

export default Loader;
