import { ThemeContextProvider } from "../context/ThemeContext";
import AppContainer from "./AppContainer";
import "../css/app.css";

function App() {
	return (
		<ThemeContextProvider>
			<AppContainer />
		</ThemeContextProvider>
	);
}

export default App;
