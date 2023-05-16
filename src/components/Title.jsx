import React from "react";
import Typed from "typed.js";

export default function MyComponent() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"Dark mode for PDFs",
				"it&#39;s electron but my eyes don&#39;t care!",
				"The PDF reader you didn't know you needed.",
				"NightPDF: your next pdf reader.",
			],
			typeSpeed: 60,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return (
		<div>
			<h1>
				<span ref={el} />
			</h1>
		</div>
	);
}
