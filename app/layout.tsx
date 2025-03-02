import { ReactNode } from 'react';
import { SimpleNavbarWithHoverEffects } from './components/Navigation';
import './globals.css';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<body className='bg-gray-100'>
				<SimpleNavbarWithHoverEffects />
				<div className=''>
					<header></header>
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
