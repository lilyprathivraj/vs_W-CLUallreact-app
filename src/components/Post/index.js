import { RiForwardShareLine } from "react-icons/ri";
import SocialButton from "../SocialButton";

import "./index.css";

const Post = () => {
	return (
		<div className="post-container">
			<h1 className="heading">React Hooks</h1>
			<p className="paragraph">
				Hooks are a new addition in React 16.8. They let you use state and other
				React features without writing a class.
			</p>
			<div className="social-button-wrapper">
				<SocialButton>Like</SocialButton>
				<SocialButton>Comment</SocialButton>
				<SocialButton>
					<RiForwardShareLine className="share-icon" />
					share
				</SocialButton>
			</div>
		</div>
	);
};

export default Post;
