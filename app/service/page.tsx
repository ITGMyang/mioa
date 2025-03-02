import Image from 'next/image';
export default function Page() {
	return (
		<div className='grid gap-16 place-content-center place-items-center'>
			<h1 className='text-cyan-900 text-3xl'>
				Page needs to be edited in the future....
			</h1>
			<Image
				src='/images/price.png'
				alt='price'
				className='rounded-lg'
				width={1000}
				height={300}
			/>
		</div>
	);
}
