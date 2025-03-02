import Image from 'next/image';

export default function Page() {
	return (
		<div className='flex justify-center place-items-center'>
			<div className='w-2/3 p-8 grid gap-8 justify-center place-content-center place-items-center bg-white rounded-xl'>
				<h1 className='text-2xl font-bold'>
					Mioa – Professional Dog Groomer in Vancouve
				</h1>
				<div>
					<Image
						src='/images/mioa.jpg'
						alt='Mioa – Professional Dog Groomer in Vancouver'
						width={300}
						height={300}
						className='rounded-full border-8 border-white'
					/>
				</div>
				<p className='text-lg'>
					Mioa is a dedicated and skilled dog groomer based in Vancouver, known
					for her gentle approach and expert grooming techniques. With a passion
					for animal care and years of experience, she provides top-quality
					grooming services tailored to each dog’s unique needs. From stylish
					trims to thorough hygiene care, Mioa ensures every pup looks and feels
					their best. Her patience and attention to detail make her a favorite
					among pet owners who value a stress-free grooming experience for their
					furry companions.
				</p>
			</div>
		</div>
	);
}
