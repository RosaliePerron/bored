import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { Header } from "./components/header";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <Header />

        <AppShell.Main>
          <Home />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
