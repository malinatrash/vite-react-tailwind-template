import Favicon from '@assets/favicon.png';

const Home = () => {
	const wrapper = 'flex h-screen justify-center items-center';
	const content = 'flex items-center text-[2rem] gap-[5rem]';
	return (
		<div className={wrapper}>
			<div className={content}>
				<div>
					<h1>malinatrash</h1>
					<h1>React</h1>
					<h1>Tailwind</h1>
					<h1>Template</h1>
				</div>
				<img src={Favicon} />
			</div>
		</div>
	);
};

export default Home;
