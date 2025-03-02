import Link from 'next/link';
import Image from 'next/image';

function Logo() {
	return (
		<Link href='/'>
			<Image
				width={100}
				height={100}
				src='/logo.png'
				alt='Logo'
			/>
		</Link>
	);
}

export default Logo;
