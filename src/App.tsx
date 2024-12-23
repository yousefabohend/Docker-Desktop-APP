import React, { useState } from 'react';
import './App.css';
import ContainerList from './components/ContainerList';
import ImageList from './components/ImageList';
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'containers' | 'images'>(
		'containers'
	);
	return (
		<div className="app">
			<NavigationBar
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<div className="content">
				{activeTab === 'containers' ? (
					<ContainerList />
				) : (
					<ImageList />
				)}
			</div>
		</div>
	);
};
export default App;
