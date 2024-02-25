// App.js
import React from "react";
import "./App.css";
import Fido from "./DALL_E_2024-01-23_20.19.08_-_A_flat_2D_cartoon-style__clip_art_image_of_a_cute__fox-like_creature_with_vibrant_orange_fur_and_big__expressive_eyes._It_s_wearing_a_white_chef_hat 2.png";
import Lob from "./Lobster Ingredient Image.png";
class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://airtag-backend-api.onrender.com/users/leaderboard")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Please wait some time.... </h1>
				</div>
			);

		return (
			<div className="App" style={{color:'white'}}>
				<div className="new" style={{textAlign:'center', alignItems:'center', alignContent:'center'}}>
        			<img className="fido" src={Fido}/><h1> LEADERBOARD </h1><img src={Fido}/>
				</div>
				<div className="container">
					
					{items.map((item) => (
						<div className="item">
							<ol key={item.id}>
								<strong></strong>
								<div className="oldnew">
										<img src={Lob}/>  {item.id}  <img src={Lob}/>
								</div>
							</ol>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;

