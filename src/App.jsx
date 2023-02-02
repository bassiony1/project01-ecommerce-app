import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";

const theme = {
  colors : {
    primary : "#FB2E86",
    secondary: "#151875",
    p_color:"rgba(21, 24, 117,.35)"

  }
}
function App() {

  return (
      <ThemeProvider theme={theme}>
    <>
     <Home/> 
    </>
      </ThemeProvider>
  );
}

export default App;
