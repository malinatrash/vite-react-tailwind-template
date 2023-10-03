import Favicon from '@assets/logo.png';

const Home = () => {
	const wrapper =
		'flex h-screen justify-center items-center bg-background select-none';
	const content = 'flex items-center mobile:flex-col-reverse';
	return (
		<div className={wrapper}>
			<div className={content}>
				<div className='flex items-center flex-col'>
					<h1 className='hover:scale-150 transition-all duration-500 text-[4rem] mobile:text-[3rem]'>
						malinatrash
					</h1>
					<h1 className='text-[3rem] mobile:text-[2rem]'>
						React Tailwind Template
					</h1>
				</div>
				<img
					className='w-96 transition-all duration-500 hover:scale-150'
					src={Favicon}
				/>
			</div>
		</div>
	);
};

export default Home;
