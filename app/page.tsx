import Image from 'next/image';

export default function Page() {
	return (
		<div className='justify-center place-items-center'>
			<div className='flex content-center justify-center place-items-center'>
				<div>
					<h1 className='text-4xl font-bold'>Eleven Dog Grooming</h1>
					<p>Bring your dogs and have a nice grooming!</p>
					<p className='text-2xl font-semibold text-gray-600'>
						1 on 1 private studio
					</p>
				</div>
				<Image
					src='/dog.png'
					alt='Dog Grooming Banner'
					width={500}
					height={300}
				/>
			</div>

			<div className='w-2/3 mt-12 grid grid-cols-1 gap-2 content-center justify-center justify-items-center sm:grid-cols-4'>
				<Image
					src='/Dog1.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog2.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog3.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog4.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog5.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog6.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog7.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
				<Image
					src='/Dog8.png'
					alt='Dog Grooming Banner'
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
}
