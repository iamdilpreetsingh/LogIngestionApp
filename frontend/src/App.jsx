import ThemeProviderComponent from "./commons/ThemeProvider/ThemeProviderComponent";
import SearchContextProvider from "./Contexts/SearchContexts/SearchContextProvider";
import Layout from "./components/Layout/Layout";
import Body from "./components/Body/Body";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FilterContextProvider from "./contexts/FilterContexts/FilterContextProvider";

function App() {
  return (
    <ThemeProviderComponent>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SearchContextProvider>
          <FilterContextProvider>
            <Layout>
              <Body />
            </Layout>
          </FilterContextProvider>
        </SearchContextProvider>
      </LocalizationProvider>
    </ThemeProviderComponent>
  );
}

export default App;
