import { useRef, useEffect } from "react";
import Typed from "typed.js";

function Typer() {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"Dark mode for PDFs",
				"it&#39;s electron but my eyes don&#39;t care!",
				"The PDF reader you didn't know you needed.",
				"NightPDF: your next pdf reader.",
			],
			typeSpeed: 70,
			backSpeed: 35,
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

export default Typer;
